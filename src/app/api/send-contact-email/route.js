// /src/app/api/send-contact-email/route.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  // Parse the request body
  const { name, email, telephone, message } = await req.json();

  try {
    // Construct the email content as HTML with inline CSS
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Submission</title>
      </head>
      <body style="background-color: #f3f4f6; font-family: Arial, sans-serif; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 24px;">
            <img src="https://www.tewkesburyscouts.org.uk/_next/image?url=%2Ftscouts_navy.png&w=256&q=75" alt="Tewkesbury Scouts Logo" style="max-width: 150px; height: auto; display: block; margin: 0 auto;">
          </div>

          <div style="margin-bottom: 24px;">
            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Name:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${name}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Email:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${email}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Telephone:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${telephone || 'Not provided'}
            </p>

            <p style="font-size: 16px; font-weight: bold; color: #374151; margin-bottom: 8px;">
              Message:
            </p>
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 16px;">
              ${message}
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
      from: 'Tewkesbury Scouts <notifications@tewkesburyscouts.org.uk>',
      to: 'nic.coates@tewkesburyscouts.org.uk',
      subject: 'Contact Submission',
      html: emailContent,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}