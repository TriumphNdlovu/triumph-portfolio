

import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message, } = body;

    

    // Validate email credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Missing email credentials in environment variables');
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ["realtriumphndlovu@gmail.com", email],
      cc: email,
      subject: `Hey From Personal Website it's ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
            <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; padding: 20px; background-color: #f8f8f8; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="text-align: center; color: #333; font-size: 24px; font-weight: bold; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">New Message from ${name}</h2>
                <p style="text-align: center; margin: 0 0 20px; font-size: 16px; color: #555;">You have a new message from your personal website. Below are the details of the message:</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 16px; color: #333; border-radius: 8px; background-color: #fff; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
                <tr style="background-color: #f0f0f0;">
                    <th style="text-align: left; padding: 12px 15px; text-transform: uppercase; font-weight: bold; color: #444;">Field</th>
                    <th style="text-align: left; padding: 12px 15px; text-transform: uppercase; font-weight: bold; color: #444;">Details</th>
                </tr>
                <tr>
                    <td style="padding: 12px 15px; border-top: 1px solid #ddd;">Full Name</td>
                    <td style="padding: 12px 15px; border-top: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                    <td style="padding: 12px 15px;">Email</td>
                    <td style="padding: 12px 15px;">${email}</td>
                </tr>
                <tr>
                    <td style="padding: 12px 15px;">Message</td>
                    <td style="padding: 12px 15px;">${message}</td>
                </tr>
                </table>
                
                <p style="text-align: center; font-size: 14px; color: #777; margin-top: 30px;">
                Thank you for reaching out! We will get back to you as soon as possible.
                </p>
            </div>
      `,
    };


    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!', info }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error:', error.message || error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email', error: error.message || error }),
      { status: 500 }
    );
  }
}