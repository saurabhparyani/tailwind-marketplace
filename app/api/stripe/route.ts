import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/app/lib/stripe';
import { Resend } from 'resend';
import ProductEmail from '@/app/components/ProductEmail';
import prisma from '@/app/lib/db';
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK as string
    );

  } catch (error: unknown) {
    return new Response("webhook error", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {

    const session = event.data.object;
    console.log('Received session:', session);

    const userId = session.metadata?.userId;
    console.log('Metadata userId:', userId);

    // Retrieve the user's email from the database
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    console.log('Fetched user:', user);

    if (user && user.email) {
      const link = session.metadata?.link;
      console.log('Sending email to:', user.email);

      // Send the email using the user's email
      await resend.emails.send({
        from: "Tailwind Marketplace <onboarding@resend.dev>",
        to: user.email,
        subject: "Your Product from Tailwind Marketplace is here 🎉",
        react: ProductEmail({
          link: link as string,
        }),
      });
    } else {
      console.error('User email not found');
  }
    break;
  }
  default: {
    console.log("unhandled event");
  }
}

  return NextResponse.json({ received: true }, { status: 200 });
}