
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const ContactEnquiry = require("./models/ContactEnquiry");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Sakthi Dental Clinic API is running!",
    database: mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected",
  });
});

// Contact form route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
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

    // Validate email
    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Validate phone
    const validPhone = /^[+()\d\s-]{7,20}$/.test(phone.trim());

    if (!validPhone) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid phone number.",
      });
    }

    // Save enquiry to MongoDB
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

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Please check the contact details you provided.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to save your enquiry. Please try again later.",
    });
  }
});

// Connect to MongoDB, then start the server
async function startServer() {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is missing from the server .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
