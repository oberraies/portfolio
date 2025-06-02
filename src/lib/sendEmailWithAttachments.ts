import nodemailer from 'nodemailer';

type SendEmailParams = {
  name: string;
  email: string;
  message: string;
  files?: File[];
};

export async function sendEmailWithAttachments({ name, email, message, files }: SendEmailParams) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const attachments = files
    ? await Promise.all(
        Array.from(files).map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        }))
      )
    : [];

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
    subject: `Nouveau message de contact - ${name}`,
    text: message,
    html: `
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
    attachments,
  });
}
