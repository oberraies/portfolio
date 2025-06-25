
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface QuizPageProps {
  params: { locale: Locale };
}

export default async function QuizPage({ params: { locale } }: QuizPageProps) {
  const dict = await getDictionary(locale);
  const tPageHeader = dict.pageHeaders;
  const tQuizPage = dict.quizPage;

  return (
    <div>
      <PageHeader 
        title={tPageHeader.quizTitle}
        description={tPageHeader.quizDescription}
      />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className={cn("text-xl", "font-headline")}>{tQuizPage.excelQuizTitle}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="font-body">{tQuizPage.excelQuizDescription}</CardDescription>
          </CardContent>
          <div className="p-6 pt-0">
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
              <Link href={`/${locale}/quiz/excel`}>
                {tQuizPage.excelStartButton}
                <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Card>
        <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className={cn("text-xl", "font-headline")}>{tQuizPage.vbaQuizTitle}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="font-body">{tQuizPage.vbaQuizDescription}</CardDescription>
          </CardContent>
          <div className="p-6 pt-0">
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
              <Link href={`/${locale}/quiz/vba`}>
                {tQuizPage.vbaStartButton}
                <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
