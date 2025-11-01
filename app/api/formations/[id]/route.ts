import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/dbConnect';
import Formation from '../../../../models/Formation';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const item = await Formation.findById(params.id).populate('instructor','name');
  if (!item) return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const body = await req.json();
  const updated = await Formation.findByIdAndUpdate(params.id, body, { new: true });
  if (!updated) return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  await Formation.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
