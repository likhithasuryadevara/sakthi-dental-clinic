
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const ContactEnquiry = require("./models/ContactEnquiry");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json({ limit: "10kb" }));

// MongoDB connection cache
let connectionPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  const uri = process.env.MONGODB_URI || "";

  if (!uri.trim()) {
    throw new Error("MONGODB_URI environment variable is missing");
  }

  // Safe MongoDB URI diagnostics (never logs credentials)
  console.log("MongoDB URI diagnostic:", {
    exists: Boolean(uri),
    validPrefix: /^mongodb(\+srv)?:\/\//i.test(uri.trim()),
    hasLeadingWhitespace: uri !== uri.trim(),
    hasQuotes: /^["']/.test(uri.trim()),
    hasVariableName: uri.startsWith("MONGODB_URI="),
    length: uri.length,
  });

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(uri.trim(), {
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
        maxPoolSize: 10,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => {
        connectionPromise = null;

        console.error("MongoDB connection failed:", {
          name: error.name,
          message: error.message,
          code: error.code,
        });

        throw error;
      });
  }

  await connectionPromise;
}

// Connect to MongoDB before API requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database middleware error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Database connection failed.",
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Sakthi Dental Clinic API is running!",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
  });
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof phone !== "string" ||
      !phone.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and phone are required.",
      });
    }

    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const validPhone = /^[+()\d\s-]{7,20}$/.test(phone.trim());

    if (!validPhone) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid phone number.",
      });
    }

    if (
      message !== undefined &&
      (typeof message !== "string" ||
        message.trim().length > 2000)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid message.",
      });
    }

    const enquiry = await ContactEnquiry.create({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message:
        typeof message === "string" ? message.trim() : "",
    });

    console.log("Contact enquiry saved:", enquiry._id);

    return res.status(201).json({
      success: true,
      message: "Your enquiry was received successfully.",
    });
  } catch (error) {
    console.error("Contact enquiry error:", {
      name: error.name,
      message: error.message,
    });

    return res.status(500).json({
      success: false,
      message: "Unable to save your enquiry. Please try again later.",
    });
  }
});

// Local development only
if (require.main === module) {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Local server startup failed:", error.message);
      process.exit(1);
    });
}

// Export Express app for Vercel
module.exports = app;
