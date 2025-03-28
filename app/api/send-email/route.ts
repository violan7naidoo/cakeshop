import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    console.log('Received email request:', { name, email, message });
    console.log('Using API key:', process.env.RESEND_API_KEY ? 'Present' : 'Missing');
    console.log('Target email:', process.env.CONTACT_FORM_EMAIL || 'info@thebakeshopcrescent.co.za');

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { success: false, error: "API key is missing" },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: 'The Bake Shop <onboarding@resend.dev>',
      to: ['info@thebakeshopcrescent.co.za'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending email:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // Check if it's a domain verification error
    if (error.name === 'validation_error' && error.message.includes('verify a domain')) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Domain verification required. Please verify your domain at resend.com/domains",
          details: error.message 
        },
        { status: 403 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
} 