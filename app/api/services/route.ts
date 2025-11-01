import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/dbConnect';
import Service from '../../../models/Service';

export async function GET() {
  await dbConnect();
  const services = await Service.find().populate('provider','name');
  return NextResponse.json(services);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const { title, description, price, category, provider } = body;
  if (!title || !description || !price || !category || !provider) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
  }
  const created = await Service.create({ title, description, price, category, provider, approved: false });
  return NextResponse.json(created, { status: 201 });
}
