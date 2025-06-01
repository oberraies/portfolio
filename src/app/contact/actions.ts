'use server';

import * as z from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB total
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

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
    files: formData.getAll('files').filter(file => (file as File).size > 0), // Filter out empty file inputs if any
  };

  const parsed = contactFormSchema.safeParse(rawFormData);

  if (!parsed.success) {
    console.error("Validation errors:", parsed.error.flatten().fieldErrors);
    return { success: false, error: "Validation échouée. Veuillez vérifier les champs.", errors: parsed.error.flatten().fieldErrors };
  }

  const { name, email, message, files } = parsed.data;

  try {
    // Placeholder for actual email sending logic
    console.log("Form data received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    if (files && files.length > 0) {
      console.log("Files:", files.map(file => ({ name: file.name, size: file.size, type: file.type })));
      // Here you would typically:
      // 1. Upload files to a storage service (e.g., Firebase Storage, AWS S3)
      // 2. Get the download URLs of the uploaded files
      // 3. Send an email using a service like Nodemailer (with Gmail API/OAuth2 or an App Password - less secure for Gmail)
      //    or a transactional email service (SendGrid, Mailgun, Resend).
      //    Include the form data and file URLs in the email body.
      // Example:
      // await sendEmail({
      //   to: 'your.portfolio.email@gmail.com',
      //   subject: `Nouveau message de ${name} via Portfolio Pro`,
      //   html: `
      //     <p><strong>Nom:</strong> ${name}</p>
      //     <p><strong>Email:</strong> ${email}</p>
      //     <p><strong>Message:</strong></p>
      //     <p>${message}</p>
      //     ${files.length > 0 ? `<p><strong>Fichiers joints:</strong></p><ul>${files.map(f => `<li>${f.name} (URL: ${/* file URL from storage */''})</li>`).join('')}</ul>` : ''}
      //   `
      // });
    } else {
      console.log("No files attached.");
      // Send email without attachments
    }
    
    // Simulate a delay for network request
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Message envoyé avec succès !" };

  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Une erreur interne est survenue." };
  }
}
