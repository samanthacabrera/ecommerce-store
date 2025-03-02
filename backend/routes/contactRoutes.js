const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post("/contact", async (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        console.log("New Contact Message Received:");
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        console.log("Email sent successfully!");
        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send message" });
    }
});

module.exports = router;
