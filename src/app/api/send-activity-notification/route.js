// /src/app/api/send-activity-notification/route.js

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  // Parse the request body
  const {
    leaderName,
    email,
    membershipNumber,
    contactNumber,
    groupUnit,
    sections,
    activityName,
    date,
    startTime,
    endTime,
    location,
    numYoungPeople,
    numAdults,
    inTouch,
    riskAssessment,
  } = await req.json();

  try {
    // Determine additional recipients based on Group/Unit
    const additionalRecipients = [];
    if (groupUnit === "1st Woodmancote") {
      additionalRecipients.push("derek.platt@1wsg.org.uk");
    } else if (groupUnit === "1st Gotherington") {
      additionalRecipients.push("nic.coates@gotheringtonscouts.org.uk");
    } else if (groupUnit === "2nd Twyning") {
      additionalRecipients.push("theianpalmer@gmail.com");
    } else if (groupUnit === "3rd Tewkesbury") {
      additionalRecipients.push("kula.margaret@googlemail.com");
    } else if (
      groupUnit === "Pioneer Explorer Unit" ||
      groupUnit === "Red Wolves Explorer Unit" ||
      groupUnit === "Extreme Explorer Unit" ||
      groupUnit === "Haberpakka Young Leader Unit"
    ) {
      additionalRecipients.push("tewkesburydesc@gmail.com");
    }

    // Base recipients
    const toRecipients = [email, "cdlodwig@gmail.com", ...additionalRecipients];

    // Construct the email subject
    const subject = `${groupUnit} - ${sections.join(", ")} - ${activityName}`;

    // Construct the email content as HTML with inline CSS
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Activity Notification</title>
      </head>
      <body style="background-color: #f3f4f6; font-family: Arial, sans-serif; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 24px;">
            <img src="https://www.tewkesburyscouts.org.uk/_next/image?url=%2Ftscouts_navy.png&w=256&q=75" alt="Tewkesbury Scouts Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto;">
          </div>

          <div style="margin-bottom: 24px;">
            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Leader in Charge Name:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${leaderName}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Email:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${email}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Membership Number:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${membershipNumber || "Not provided"}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Contact Number:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${contactNumber}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Group or Unit:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${groupUnit}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Section(s):
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${sections.join(", ")}
            </p>
          </div>

          <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />

          <div style="margin-bottom: 24px;">
            <p style="font-size: 18px; font-weight: bold; color: #374151; margin-bottom: 16px;">
              Activity Details
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Activity Name:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${activityName}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Date:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${date}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Start Time:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${startTime}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              End Time:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${endTime}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Location:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${location}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Number of Young People:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${numYoungPeople}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Number of Adults:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${numAdults}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              InTouch:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${inTouch}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Risk Assessment:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${riskAssessment ? "Yes, completed" : "No"}
            </p>
          </div>

          <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />

          <p style="font-size: 14px; color: #6b7280; text-align: center; margin: 0;">
            © ${new Date().getFullYear()} Tewkesbury District Scouts. All rights reserved.
          </p>
        </div>
      </body>
      </html>
    `;

    // Send the email using Resend
    await resend.emails.send({
      from: "Tewkesbury Scouts <no-reply@tewkesburyscouts.org.uk>",
      to: toRecipients,
      subject: subject,
      html: emailContent,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
