import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/dbConnect';
import User from '../../../models/User';

export async function GET() {
  await dbConnect();
  const users = await User.find({},'-password');
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const { name, email, password, role } = body;
  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Tous les champs requis.' }, { status: 400 });
  }
  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: 'Email déjà utilisé.' }, { status: 409 });
  }
  const user = await User.create({ name, email, password, role });
  return NextResponse.json({ user });
}
