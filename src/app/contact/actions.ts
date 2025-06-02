
'use server';

import { sendEmailWithAttachments } from '@/lib/sendEmailWithAttachments';

export async function handleContactFormSubmission(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string | undefined;
    const message = formData.get('message') as string;
    const files = formData.getAll('files') as File[];

    await sendEmailWithAttachments({ name, email, phone, message, files });

    return { success: true };
  } catch (error: any) {
    console.error('Erreur lors de l\\'envoi de l\\'email :', error);
    return { success: false, error: error.message || 'Erreur inconnue' };
  }
}

    