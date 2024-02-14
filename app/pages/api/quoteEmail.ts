// LIBRARY IMPORTS
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { senderEmail, subject, message } = req.body;

  // Creates a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Sets up email data
  const mailOptions = {
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `Quote Request from ${senderEmail}: ${subject}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  // Sends the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
    res
      .status(200)
      .json({ success: true, message: "Email sent", info: info.response });
  });
};
