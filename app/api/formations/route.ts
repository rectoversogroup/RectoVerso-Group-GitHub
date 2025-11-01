import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/dbConnect';
import Formation from '../../../models/Formation';

export async function GET() {
  await dbConnect();
  const formations = await Formation.find().populate('instructor','name');
  return NextResponse.json(formations);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const { title, domain, cost, instructor, mode, subvention } = data;
  if (!title || !domain || cost === undefined || !instructor || !mode) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
  }
  const created = await Formation.create({ title, domain, cost, instructor, mode, subvention: !!subvention });
  return NextResponse.json(created, { status: 201 });
}
