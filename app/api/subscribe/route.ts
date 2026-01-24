import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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