// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendEmailWithAttachments } from '@/lib/sendEmailWithAttachments';

export async function POST(req: Request) {
  const formData = await req.formData();
  try {
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const files = formData.getAll('files') as File[];
 
    // Ici, appelle ton utilitaire mail personnalisé
    await sendEmailWithAttachments({ name, email, message, files });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
