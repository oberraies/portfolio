
'use server';

import * as z from 'zod';
import nodemailer from 'nodemailer';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB total
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

// Ensure environment variables are loaded. In Next.js, .env.local is loaded automatically.
// You might need to install dotenv if running in a different Node.js environment: `npm install dotenv`
// require('dotenv').config();

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Veuillez entrer une adresse e-mail valide."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
  files: z.array(z.instanceof(File))
    .optional()
    .refine(files => !files || files.every(file => file.size <= MAX_FILE_SIZE), `Chaque fichier ne doit pas dépasser 5MB.`)
    .refine(files => !files || files.every(file => ALLOWED_FILE_TYPES.includes(file.type)), "Un ou plusieurs fichiers ont un type non supporté.")
    .refine(files => !files || files.reduce((acc, file) => acc + file.size, 0) <= MAX_TOTAL_SIZE, `La taille totale des fichiers ne doit pas dépasser 20MB.`),
});

export async function handleContactFormSubmission(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    files: formData.getAll('files').filter(file => (file instanceof File && file.size > 0)),
  };

  const parsed = contactFormSchema.safeParse(rawFormData);

  if (!parsed.success) {
    console.error("Validation errors:", parsed.error.flatten().fieldErrors);
    return { success: false, error: "Validation échouée. Veuillez vérifier les champs.", errors: parsed.error.flatten().fieldErrors };
  }

  const { name, email, message, files } = parsed.data;

  // Nodemailer transporter setup using Gmail with OAuth2
  // IMPORTANT: Store these in environment variables (e.g., .env.local)
  // GMAIL_EMAIL: Your Gmail address (e.g., oberraies@gmail.com)
  // GMAIL_CLIENT_ID: Your Google Cloud OAuth2 Client ID
  // GMAIL_CLIENT_SECRET: Your Google Cloud OAuth2 Client Secret
  // GMAIL_REFRESH_TOKEN: Your OAuth2 Refresh Token for Gmail API
  // OAUTH_ACCESS_TOKEN: (Optional) Nodemailer can fetch this using the refresh token

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_EMAIL, // Your Gmail email address
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      // accessToken: process.env.OAUTH_ACCESS_TOKEN, // Optional: Nodemailer can auto-generate this
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: `"${name}" <${email}>`, // Sender address (appears as "Your Name" <user@example.com>)
    to: 'oberraies@gmail.com', // Your personal email address where you want to receive messages
    replyTo: email, // So you can reply directly to the sender
    subject: `Nouveau message de ${name} via Portfolio Pro`,
    html: `
      <h1>Nouveau message via Portfolio Pro</h1>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      ${files && files.length > 0 ? `<p><strong>Pièces jointes (${files.length}):</strong></p>` : ''}
    `,
    attachments: [],
  };

  if (files && files.length > 0) {
    mailOptions.attachments = await Promise.all(
        files.map(async (file) => {
        const buffer = await file.arrayBuffer();
        return {
          filename: file.name,
          content: Buffer.from(buffer),
          contentType: file.type,
        };
      })
    );
  }

  try {
    // Verify transporter configuration (optional, good for debugging)
    // await transporter.verify(); 
    // console.log("Nodemailer transporter is ready");

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return { success: true, message: "Message envoyé avec succès !" };

  } catch (error) {
    console.error("Error sending email:", error);
    // Log the specific error for better debugging
    if (error instanceof Error) {
        console.error("Error message:", error.message);
        if ((error as any).response) {
            console.error("Error response:", (error as any).response);
        }
    }
    return { success: false, error: "Une erreur est survenue lors de l'envoi du message. Veuillez vérifier la configuration du serveur d'e-mail." };
  }
}
