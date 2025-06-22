import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    })

    // Email content for you (the recipient)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "03312436713aa@gmail.com",
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #006A71, #01949f, #73f3f3); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 24px;">New Contact Form Message</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f0f8ff; border-left: 4px solid #006A71; border-radius: 5px;">
              <h3 style="margin: 0 0 10px 0; color: #006A71;">Contact Details</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
              <h3 style="margin: 0 0 15px 0; color: #006A71;">Message</h3>
              <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This message was sent from your website contact form.<br>
                Reply directly to <strong>${email}</strong> to respond to the sender.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>© ${new Date().getFullYear()} TechExa Vision - Contact Form Notification</p>
          </div>
        </div>
      `,
    }

    // Auto-reply email for the sender
    const autoReplyOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting TechExa Vision!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #006A71, #01949f, #73f3f3); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 24px;">Thank You for Contacting Us!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #006A71;">
              <h3 style="margin: 0 0 10px 0; color: #006A71;">Your Message Summary:</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              We typically respond within 24 hours during business days. If your inquiry is urgent, 
              please feel free to call us at <strong>0331 2436713</strong>.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://wa.me/923312436713" style="background: linear-gradient(135deg, #006A71, #01949f); color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                Contact us on WhatsApp
              </a>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>TechExa Vision Team</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>© ${new Date().getFullYear()} TechExa Vision - Transforming Ideas into Digital Solutions</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
