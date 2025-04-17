import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/sendEmail"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send the email
    await sendEmail({
      to: `<${process.env.SMTP_USER}>`, // recipient email address
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`, // must match your SMTP user
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    return NextResponse.json({ message: "Thank you for reaching out" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
