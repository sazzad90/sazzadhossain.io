// lib/sendEmail.ts
import nodemailer from "nodemailer"
export async function sendEmail({
  to,
  from,
  subject,
  text,
}: {
  to: string
  from: string
  subject: string
  text: string
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use 'hotmail', 'yahoo', etc., or custom SMTP settings
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  console.log("Sending email to:", to)
  console.log("Email from:", from);
  
  const mailOptions = {
    from,
    to,
    subject,
    text,
  }

  await transporter.sendMail(mailOptions)
}
