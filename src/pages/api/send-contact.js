// src/pages/api/send-contact.js
import { getPayload } from "@/locales/payload.js";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const payload = await getPayload();

    await payload.sendEmail({
      to: process.env.SMTP_USER,
      subject: `📩 New message from ${name}`,
      html: `
        <h3>Get In Touch</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
