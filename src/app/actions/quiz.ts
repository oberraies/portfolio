'use server';

import { sendQuizResultEmail, QuizResultSchema, type QuizResultData } from '@/lib/sendQuizResultEmail';

export type { QuizResultData };

export async function saveAndEmailResult(data: QuizResultData) {
  const validation = QuizResultSchema.safeParse(data);

  if (!validation.success) {
    console.error('Invalid data provided:', validation.error.errors);
    throw new Error('Invalid data provided.');
  }

  const { email, score, level, topic, locale, questions, answers } = validation.data;

  // Log to server console
  console.log('Received Quiz Result:');
  console.log(`  Email: ${email}`);
  console.log(`  Topic: ${topic}`);
  console.log(`  Score: ${score}%`);
  console.log(`  Level: ${level}`);
  console.log(`  Locale: ${locale}`);
  console.log('--------------------');
  
  // Send the detailed result email to the user
  await sendQuizResultEmail({ email, score, level, topic, locale, questions, answers });

  return { success: true, message: 'Result saved and email sent.' };
}
