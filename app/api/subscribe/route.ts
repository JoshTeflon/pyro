import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import { WelcomeToThePack } from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  try {
    const { email } = await request.json();

    const { data, error } = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: error.message ?? 'Failed to join' },
        { status: 400 }
      )
    }

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'ii6 pyro <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to the ii6 Pack',
      react: WelcomeToThePack(),
    });

    if (emailError) {
      console.error('Email send error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    console.info('Subscription successful:', email, emailData);

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
};