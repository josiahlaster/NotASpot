import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { PACKAGES } from '@/lib/packages';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { service, make, model, year, date, time, name, email, phone } = body;

    const pkg = PACKAGES.find(p => p.id === service);
    if (!pkg) {
      return NextResponse.json({ error: 'Invalid package selected.' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${pkg.name} – Deposit`,
              description: `Appointment: ${date} at ${time} · ${year} ${make} ${model}`,
              images: [`${process.env.NEXT_PUBLIC_BASE_URL || 'https://notaspot.com'}/hero_car.png`],
            },
            unit_amount: pkg.deposit * 100, // cents
          },
          quantity: 1,
        },
      ],
      metadata: {
        service: pkg.id,
        vehicle: `${year} ${make} ${model}`,
        date,
        time,
        name,
        phone,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/#booking`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe error:', err);
    return NextResponse.json({ error: err.message || 'Stripe checkout failed.' }, { status: 500 });
  }
}
