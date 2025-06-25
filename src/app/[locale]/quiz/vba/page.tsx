
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Type, Repeat, PanelTopOpen, FileSpreadsheet, ShieldAlert, Folder, Rocket, ArrowLeft } from 'lucide-react';
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { cn } from '@/lib/utils';
import type { VbaQuizTopic } from '@/dictionaries/fr';
import React from 'react';
import Link from 'next/link';

interface VbaQuizTopicsPageProps {
  params: { locale: Locale };
}

const topicIcons: Record<string, React.ElementType> = {
  variables_types: Type,
  loops_conditions: Repeat,
  userforms: PanelTopOpen,
  interaction_excel: FileSpreadsheet,
  error_handling: ShieldAlert,
  file_handling: Folder,
};

export default async function VbaQuizTopicsPage({ params: { locale } }: VbaQuizTopicsPageProps) {
  const dict = await getDictionary(locale);
  const t = dict.vbaQuizTopicsPage;

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
        {t.topics.map((topic: VbaQuizTopic) => {
          const Icon = topicIcons[topic.id] || ShieldAlert;
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
                <Button disabled className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                  <Rocket className="mr-2 h-5 w-5" />
                  {topic.buttonLabel}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
