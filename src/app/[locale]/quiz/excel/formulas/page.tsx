
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { PageHeader } from '@/components/shared/PageHeader';
import { QuizClient } from '@/components/quiz/QuizClient';

interface FormulasQuizPageProps {
  params: { locale: Locale };
}

export default async function FormulasQuizPage({ params: { locale } }: FormulasQuizPageProps) {
  const dict = await getDictionary(locale);
  const t = dict.quizFormulasPage;
  const quizData = dict.excelFormulasQuiz;

  // The title and description are now coming from the quiz data itself for better context
  return (
    <div>
      <PageHeader 
        title={quizData.title}
        description={quizData.description}
      />
      <QuizClient key={JSON.stringify(quizData.questions)} questions={quizData.questions} t={t} topic={quizData.title}/>
    </div>
  );
}
