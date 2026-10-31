
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

// MongoDB connection cache for Vercel
let connectionPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGODB_URI)
      .catch((error) => {
        connectionPromise = null;
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
    console.error("MongoDB connection failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Database connection failed.",
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
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
      (typeof message !== "string" || message.trim().length > 2000)
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
      message: typeof message === "string" ? message.trim() : "",
    });

    console.log("Contact enquiry saved:", enquiry._id);

    return res.status(201).json({
      success: true,
      message: "Your enquiry was received successfully.",
    });
  } catch (error) {
    console.error("Contact enquiry error:", error.message);

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
      console.log("MongoDB connected successfully.");

      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
      process.exit(1);
    });
}

// Export Express app for Vercel
module.exports = app;
