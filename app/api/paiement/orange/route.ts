import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Placeholder - ici on appellerait l'API Orange Money Business
  return NextResponse.json({ ok: true, provider: 'orange', message: 'Orange Money prêt (placeholder)' });
}
