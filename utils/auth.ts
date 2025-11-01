import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '';

export async function hashPassword(plain: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export async function comparePassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

export function signToken(payload: object, expiresIn: string = '7d'): string {
  if (!JWT_SECRET) throw new Error('JWT_SECRET manquant');
  return jwt.sign(payload as any, JWT_SECRET, { expiresIn });
}

export function verifyToken<T = any>(token: string): T {
  if (!JWT_SECRET) throw new Error('JWT_SECRET manquant');
  return jwt.verify(token, JWT_SECRET) as T;
}
