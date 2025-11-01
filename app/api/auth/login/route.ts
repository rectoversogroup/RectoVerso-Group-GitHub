import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/dbConnect';
import User from '../../../../models/User';
import { comparePassword, signToken } from '../../../../utils/auth';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, password } = await req.json();
  if (!email || !password) return NextResponse.json({ error: 'Email et mot de passe requis.' }, { status: 400 });
  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: 'Identifiants invalides.' }, { status: 401 });
  const ok = await comparePassword(password, user.password);
  if (!ok) return NextResponse.json({ error: 'Identifiants invalides.' }, { status: 401 });
  const token = signToken({ sub: user._id, role: user.role, email: user.email });
  const res = NextResponse.json({ ok: true, user: { id: user._id, email: user.email, name: user.name, role: user.role } });
  res.headers.set('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax`);
  return res;
}
