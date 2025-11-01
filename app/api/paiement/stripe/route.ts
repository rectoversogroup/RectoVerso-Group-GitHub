import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return NextResponse.json({ error: 'Stripe non configuré' }, { status: 501 });
  // Placeholder: ici on créerait une session de paiement Stripe
  return NextResponse.json({ ok: true, message: 'Stripe prêt (placeholder)' });
}
