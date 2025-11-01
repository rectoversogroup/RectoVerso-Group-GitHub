import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/dbConnect';
import User from '../../../../models/User';
import { hashPassword } from '../../../../utils/auth';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { name, email, password, role } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
  }
  const existing = await User.findOne({ email });
  if (existing) return NextResponse.json({ error: 'Email déjà utilisé.' }, { status: 409 });
  const hashed = await hashPassword(password);
  const user = await User.create({ name, email, password: hashed, role });
  return NextResponse.json({ id: user._id, email: user.email });
}
