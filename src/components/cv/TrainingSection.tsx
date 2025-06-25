
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { CVTrainingItem } from '@/dictionaries/fr';

interface TrainingSectionProps {
  title: string;
  trainingItems: CVTrainingItem[];
  trainingPdfLinks: string[];
}

export function TrainingSection({ title, trainingItems, trainingPdfLinks }: TrainingSectionProps) {
  return (
    <section>
      <h2 className={cn("text-3xl font-bold mb-8 text-primary flex items-center", "font-headline")}>
        <BookOpen className="mr-3 h-8 w-8" /> {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trainingItems.map((activity, index) => {
          const linkHref = trainingPdfLinks[index];
          // A link is considered internal navigation if it starts with '/' AND does not end with '.pdf'
          const isInternalNav = linkHref.startsWith('/') && !linkHref.endsWith('.pdf');

          return (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className={cn("text-xl", "font-headline")}>{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                  {isInternalNav ? (
                    <Link href={linkHref}>
                      {activity.buttonLabel}
                    </Link>
                  ) : (
                    <Link href={linkHref} target="_blank" rel="noopener noreferrer">
                      {activity.buttonLabel}
                    </Link>
                  )}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
