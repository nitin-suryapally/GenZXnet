import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

const transport = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 465, // Correct secure port for SMTP
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  // Set CORS headers
  if (req.method === "OPTIONS") {
    return NextResponse.json(null, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Update this to specific domains if needed
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      status: 204,
    });
  }

  try {
    const body = await req.json();
    const { email, subject, text } = body;

    // Validate request payload
    if (!email || !subject || !text) {
      return NextResponse.json(
        { error: "Missing required fields" },
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Verify SMTP connection
    await transport.verify();

    // Send email to site admin
    const adminMailInfo = await transport.sendMail({
      from: email,
      to: SITE_MAIL_RECIEVER,
      subject,
      text,
    });

    // Send confirmation email to user
    const userMailInfo = await transport.sendMail({
      from: SITE_MAIL_RECIEVER, // Use the site admin's email as the sender
      to: email, // The user's email
      subject: "Thank you for reaching out!",
      text: `Hello,

Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.

Here's a summary of your message:
------------------------------
${text}
------------------------------

Best regards,  
[Your Company Name or Contact Team]`,
    });

    return NextResponse.json(
      {
        message: "Messages sent successfully",
        adminMessageId: adminMailInfo.messageId,
        userMessageId: userMailInfo.messageId,
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    // Narrow down the type of error
    if (error instanceof Error) {
      console.error("Error sending email:", error.message); // Log the actual error message
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } else {
      // Handle cases where the error is not an instance of Error
      console.error("Unexpected error type:", error);
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  }
}
