
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { getDictionary } from './dictionaries';

// Define Schemas and Types here to avoid circular dependency
const QuestionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  correctAnswerIndex: z.number(),
  explanation: z.string(),
});

export const QuizResultSchema = z.object({
  email: z.string().email(),
  score: z.number(),
  level: z.string(),
  topic: z.string(),
  locale: z.enum(['fr', 'en']),
  questions: z.array(QuestionSchema),
  answers: z.array(z.number()),
});

export type QuizResultData = z.infer<typeof QuizResultSchema>;

function generateScoreBar(score: number): string {
    const progressColor = '#29331c';

    return `
      <table width="100" border="0" cellpadding="0" cellspacing="0" style="border: 1px solid #cccccc; border-radius: 4px; background-color: #e0e0e0; width: 100px;">
        <tr>
          <td width="${score}%" style="background-color: ${progressColor}; height: 10px; border-radius: 4px 0 0 4px; mso-border-radius-alt: 4px 0 0 4px;">&nbsp;</td>
          <td width="${100 - score}%">&nbsp;</td>
        </tr>
      </table>
    `;
}


export async function sendQuizResultEmail({ email, score, level, topic, locale, questions, answers }: QuizResultData) {
  const dict = await getDictionary(locale);
  const t = dict.quizEmail;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = `${t.subject}: ${topic}`;

  const questionDetailsHtml = questions.map((q, index) => {
    const userAnswerIndex = answers[index];
    const isCorrect = userAnswerIndex === q.correctAnswerIndex;
    const userAnswer = q.options[userAnswerIndex] || "N/A";
    const correctAnswer = q.options[q.correctAnswerIndex];

    return `
      <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #eee; border-radius: 8px; background-color: #f9f9f9;">
        <p style="font-weight: bold; color: #333; margin-top: 0;">${t.question(index + 1)}: ${q.question}</p>
        
        <div style="background-color: ${isCorrect ? '#e8f5e9' : '#ffebee'}; border-left: 4px solid ${isCorrect ? '#4caf50' : '#f44336'}; padding: 10px; margin-top: 10px; border-radius: 4px;">
          <strong style="color: ${isCorrect ? '#2e7d32' : '#c62828'};">${t.yourAnswer}:</strong> ${userAnswer}
        </div>
        
        ${!isCorrect ? `
        <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 10px; margin-top: 5px; border-radius: 4px;">
          <strong style="color: #2e7d32;">${t.correctAnswer}:</strong> ${correctAnswer}
        </div>
        ` : ''}

        <p style="font-size: 0.9em; color: #666; margin-top: 10px; padding-left: 10px; border-left: 2px solid #ddd; font-style: italic;">
          <strong>${t.explanation}:</strong> ${q.explanation}
        </p>
      </div>
    `;
  }).join('');

  const userEmailHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 680px; margin: auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #1a237e; color: white; padding: 25px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">${t.subject}</h1>
      </div>
      <div style="padding: 25px 30px;">
        <p style="font-size: 18px;">${t.greeting}</p>
        <p>${t.intro(topic)}</p>
        
        <h2 style="color: #1a237e; border-bottom: 2px solid #3949ab; padding-bottom: 5px;">${t.summaryTitle}</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f1f3f6; border-radius: 8px;">
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 12px 15px;"><strong>${t.score}</strong></td>
            <td style="padding: 12px 15px;">
              <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                <tr>
                  <td style="font-weight: bold; font-size: 1.2em; color: #1a237e; vertical-align: middle; width: 60px;">
                    ${score.toFixed(0)}%
                  </td>
                  <td style="vertical-align: middle;">
                    ${generateScoreBar(score)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 15px;"><strong>${t.level}</strong></td>
            <td style="padding: 12px 15px; font-weight: bold; font-size: 1.2em; color: #1a237e;">${level}</td>
          </tr>
        </table>
        
        <h2 style="color: #1a237e; border-bottom: 2px solid #3949ab; padding-bottom: 5px;">${t.detailsTitle}</h2>
        ${questionDetailsHtml}
        
        <p style="margin-top: 30px;">${t.outro}</p>
        <p style="margin-top: 20px;">Cordialement,<br><strong>${t.signature}</strong></p>
      </div>
       <div style="background-color: #f5f5f5; color: #777; padding: 15px; text-align: center; font-size: 12px;">
        <p>&copy; ${new Date().getFullYear()} ${t.signature}. Tous droits réservés.</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Oussama Berraies" <${process.env.SMTP_USER}>`,
    to: email,
    subject: subject,
    html: userEmailHtml,
  });

  // Also send a notification to self
  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 680px; margin: auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #333; color: white; padding: 25px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Nouveau Résultat de Quiz</h1>
      </div>
      <div style="padding: 25px 30px;">
        <p style="font-size: 18px;">L'utilisateur <strong>${email}</strong> a terminé un quiz.</p>
        
        <h2 style="color: #333; border-bottom: 2px solid #ccc; padding-bottom: 5px;">Résumé</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f9f9f9; border-radius: 8px;">
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 12px 15px;"><strong>Sujet du Quiz</strong></td>
            <td style="padding: 12px 15px;">${topic}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e0e0e0;">
            <td style="padding: 12px 15px;"><strong>Score Obtenu</strong></td>
            <td style="padding: 12px 15px;">
              <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                <tr>
                  <td style="font-weight: bold; font-size: 1.2em; color: #333; vertical-align: middle; width: 60px;">
                    ${score.toFixed(0)}%
                  </td>
                  <td style="vertical-align: middle;">
                    ${generateScoreBar(score)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 15px;"><strong>Niveau Estimé</strong></td>
            <td style="padding: 12px 15px; font-weight: bold; font-size: 1.2em; color: #333;">${level}</td>
          </tr>
        </table>
        
        <h2 style="color: #333; border-bottom: 2px solid #ccc; padding-bottom: 5px;">Détail des Réponses</h2>
        ${questionDetailsHtml}
      </div>
       <div style="background-color: #f5f5f5; color: #777; padding: 15px; text-align: center; font-size: 12px;">
        <p>Notification du Portfolio d'Oussama Berraies</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Quiz Bot" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
    subject: `Nouveau résultat de quiz: ${email} sur ${topic}`,
    html: adminEmailHtml,
  });
}
