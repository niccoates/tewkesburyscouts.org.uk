import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(request) {
  try {
    const { name, email, dateOfBirth, message } = await request.json();

    if (!name || !email || !dateOfBirth || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Tewkesbury Scouts <no-reply@tewkesburyscouts.org.uk>",
      to: "sam.gilchrist@tewkesburyscouts.org.uk",
      replyTo: email,
      subject: "Youth Lead Role enquiry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #374151;">
          <h1 style="color: #003087;">Youth Lead Role enquiry</h1>
          <p><strong>Name:</strong><br>${escapeHtml(name)}</p>
          <p><strong>Email address:</strong><br>${escapeHtml(email)}</p>
          <p><strong>Date of birth:</strong><br>${escapeHtml(dateOfBirth)}</p>
          <p><strong>Message/comment:</strong><br>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
        </div>
      `,
    });

    return Response.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending Youth Lead Role email:", error);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
