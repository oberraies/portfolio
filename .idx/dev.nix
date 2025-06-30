
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sigma, Table, BarChart3, DatabaseZap, Database, Layers, Rocket, ArrowLeft } from 'lucide-react';
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { cn } from '@/lib/utils';
import type { ExcelQuizTopic } from '@/dictionaries/fr';
import React from 'react';
import Link from 'next/link';

interface ExcelQuizTopicsPageProps {
  params: { locale: Locale };
}

const topicIcons: Record<string, React.ElementType> = {
  formulas: Sigma,
  pivot_tables: Table,
  charts: BarChart3,
  power_query: DatabaseZap,
  data_management: Database,
  power_pivot: Layers,
};

export default async function ExcelQuizTopicsPage({ params: { locale } }: ExcelQuizTopicsPageProps) {
  const dict = await getDictionary(locale);
  const t = dict.excelQuizTopicsPage;

  return (
    <div>
      <PageHeader 
        title={t.title}
        description={t.description}
      />

      <div className="mb-8 flex">
        <Button asChild variant="ghost" className="text-foreground hover:bg-buttonCustom hover:text-buttonCustom-foreground">
          <Link href={`/${locale}/quiz`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.goBackButtonLabel}
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.topics.map((topic: ExcelQuizTopic) => {
          const Icon = topicIcons[topic.id] || Sigma;
          // Updated link logic
          let quizLink = `/${locale}/quiz/excel/formulas`; // Default fallback
          let isEnabled = true;

          if (topic.id === 'pivot_tables') {
            quizLink = `/${locale}/quiz/excel/pivot-tables`;
          } else if (topic.id === 'charts') {
            quizLink = `/${locale}/quiz/excel/charts`;
          } else if (topic.id === 'data_management') {
            quizLink = `/${locale}/quiz/excel/data-management`;
          } else if (topic.id === 'power_pivot') {
            quizLink = `/${locale}/quiz/excel/power-pivot`;
          } else if (topic.id === 'power_query') {
            quizLink = `/${locale}/quiz/excel/power-query`;
            isEnabled = true; // Enable Power Query
          }


          return (
            <Card key={topic.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className={cn("text-xl text-center", "font-headline")}>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="font-body text-center">{topic.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild={isEnabled} disabled={!isEnabled} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                  {isEnabled ? (
                    <Link href={quizLink}>
                      <Rocket className="mr-2 h-5 w-5" />
                      {topic.buttonLabel}
                    </Link>
                  ) : (
                    <span>
                      <Rocket className="mr-2 h-5 w-5" />
                      {topic.buttonLabel}
                    </span>
                  )}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
