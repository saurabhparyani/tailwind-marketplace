import prisma from "@/app/lib/db";
import { stripe } from "@/app/lib/stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
    const body = await req.text();

    const signature = headers().get('Stripe-Signature') as string;

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_SECRET_WEBHOOK as string
        )
    } catch (error) {
        return new Response("Webhook error", {status: 400})
    }

    switch(event.type) {
        case "checkout.session.completed": {
            const session = event.data.object;
        }
        default:
            console.log(`Unhandled event type ${event.type}`)
    }

    return new Response(null, {status: 200})

}

