import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // console.log("name", name)

    // Send Confirmation Email to the User
    await resend.emails.send({
      from: "contact@genzxnet.com",
      to: email,
      subject: "We received your message!",
      html: `<p>Hello ${name},</p>
                   <p>We have received your email and will get back to you soon.</p>
                   <p>Best regards,</p>
                   <p>GenZXNet Team</p>`,
    });

    // Send User's Details to Company Emails
    await resend.emails.send({
      from: "contact@genzxnet.com", // Use user's email to make it clear who sent it
      to: "archana@genzxnet.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone || "N/A"}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
