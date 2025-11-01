import { NextResponse } from 'next/server';
import { assertCloudinaryConfig } from '../../../lib/cloudinary';

export async function POST() {
  try {
    assertCloudinaryConfig();
    // Placeholder - ici on retournerait une signature upload cloudinary ou utiliserait un preset
    return NextResponse.json({ ok: true, message: 'Upload prêt (placeholder)' });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
