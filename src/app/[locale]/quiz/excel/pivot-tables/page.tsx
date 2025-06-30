
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { PageHeader } from '@/components/shared/PageHeader';
import { QuizClient } from '@/components/quiz/QuizClient';

interface PivotTablesQuizPageProps {
  params: { locale: Locale };
}

export default async function PivotTablesQuizPage({ params: { locale } }: PivotTablesQuizPageProps) {
  const dict = await getDictionary(locale);
  const t = dict.quizFormulasPage; // Can reuse the same translations for buttons, results, etc.
  const quizData = dict.excelPivotTablesQuiz;

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
