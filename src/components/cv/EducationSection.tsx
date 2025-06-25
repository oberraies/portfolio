
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CVEducationItem } from '@/dictionaries/fr';

interface EducationSectionProps {
  title: string;
  educationItems: CVEducationItem[];
}

export function EducationSection({ title, educationItems }: EducationSectionProps) {
  return (
    <section>
      <h2 className={cn("text-3xl font-bold mb-6 text-primary flex items-center", "font-headline")}>
        <GraduationCap className="mr-3 h-8 w-8" /> {title}
      </h2>
      <div className="space-y-6">
        {educationItems.map((edu, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className={cn("text-xl", "font-headline")}>{edu.degree}</CardTitle>
              <CardDescription className={cn("text-md", "font-body")}>
                <span className="text-primary">{edu.institution}</span> {edu.period && `| ${edu.period}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={cn("text-muted-foreground", "font-body")}>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
