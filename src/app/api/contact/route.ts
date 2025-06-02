
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendEmailWithAttachments } from '@/lib/sendEmailWithAttachments';

export async function POST(req: Request) {
  const formData = await req.formData();
  try {
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString(); // Peut être undefined
    const message = formData.get('message')?.toString() || '';
    const files = formData.getAll('files') as File[];
 
    await sendEmailWithAttachments({ 
      name, 
      email, 
      phone: phone || undefined, // Assure que c'est undefined si vide
      message, 
      files 
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

    