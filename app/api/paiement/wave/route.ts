import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Placeholder - ici on appellerait l'API Wave Business
  return NextResponse.json({ ok: true, provider: 'wave', message: 'Wave Money prêt (placeholder)' });
}
