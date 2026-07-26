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
    const {
      name,
      membershipNumber,
      email,
      role,
      groupUnit,
      trainingCourse,
      trainingDate,
      dateTbc,
      reason,
      fullCost,
    } = await request.json();

    if (
      !name ||
      !membershipNumber ||
      !email ||
      !role ||
      !groupUnit ||
      !trainingCourse ||
      (!trainingDate && !dateTbc) ||
      !reason ||
      !fullCost
    ) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const courseDate = dateTbc ? "To be confirmed" : trainingDate;

    await resend.emails.send({
      from: "Tewkesbury Scouts <no-reply@tewkesburyscouts.org.uk>",
      to: [
        "kat.holter@tewkesburyscouts.org.uk",
        "som.sadasivam@tewkesburyscouts.org.uk",
      ],
      replyTo: email,
      subject: `Training funding request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #374151;">
          <h1 style="color: #003087;">Training funding request</h1>
          <p><strong>Name:</strong><br>${escapeHtml(name)}</p>
          <p><strong>Membership number:</strong><br>${escapeHtml(membershipNumber)}</p>
          <p><strong>Email address:</strong><br>${escapeHtml(email)}</p>
          <p><strong>Role:</strong><br>${escapeHtml(role)}</p>
          <p><strong>Group/Unit:</strong><br>${escapeHtml(groupUnit)}</p>
          <p><strong>Training course:</strong><br>${escapeHtml(trainingCourse)}</p>
          <p><strong>Date of training course:</strong><br>${escapeHtml(courseDate)}</p>
          <p><strong>Reason for funding request and District benefit:</strong><br>${escapeHtml(reason).replaceAll("\n", "<br>")}</p>
          <p><strong>Full cost of training:</strong><br>£${escapeHtml(fullCost)}</p>
          <p><strong>Indicative 50% contribution:</strong><br>£${(
            Number(fullCost) / 2
          ).toFixed(2)}</p>
        </div>
      `,
    });

    return Response.json({ message: "Funding request sent successfully." });
  } catch (error) {
    console.error("Error sending training funding request:", error);
    return Response.json(
      { error: "Failed to send funding request." },
      { status: 500 },
    );
  }
}
