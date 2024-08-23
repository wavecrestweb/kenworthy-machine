// LIBRARY IMPORTS
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, industry, details } = await request.json();

  // Creates a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //CONSOLE LOG TO ENSURE AUTH IS CORRECT, remove upon verification
  transporter.verify(function (error, success) {
    if (error) {
      console.log("transporter verify error", error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // Sets up email data
  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    cc: email,
    subject: `Quote Request from ${name}: ${industry}`,
    text: details,
  };

  // Sends the email
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
