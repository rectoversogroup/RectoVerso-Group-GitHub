import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/dbConnect';
import Service from '../../../../models/Service';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const svc = await Service.findById(params.id).populate('provider','name');
  if (!svc) return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
  return NextResponse.json(svc);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const body = await req.json();
  const updated = await Service.findByIdAndUpdate(params.id, body, { new: true });
  if (!updated) return NextResponse.json({ error: 'Introuvable' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  await Service.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
