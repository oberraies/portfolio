
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CVExperienceItem } from '@/dictionaries/fr';

interface ExperienceSectionProps {
  title: string;
  experienceItems: CVExperienceItem[];
}

export function ExperienceSection({ title, experienceItems }: ExperienceSectionProps) {
  const [openExperiences, setOpenExperiences] = useState<Record<number, boolean>>({ 0: true });

  const toggleExperience = (index: number) => {
    setOpenExperiences(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section>
      <h2 className={cn("text-3xl font-bold mb-6 text-primary flex items-center", "font-headline")}>
        <Briefcase className="mr-3 h-8 w-8" /> {title}
      </h2>
      <div className="space-y-6">
        {experienceItems.map((exp, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleExperience(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExperience(index)}
              aria-expanded={!!openExperiences[index]}
              aria-controls={`experience-content-${index}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className={cn("text-xl", "font-headline")}>{exp.role}</CardTitle>
                  <CardDescription className={cn("text-md", "font-body")}>
                    <span className="text-primary">{exp.company}</span> | <span className="text-primary">{exp.period}</span>
                  </CardDescription>
                </div>
                {openExperiences[index] ? <ChevronUp className="h-6 w-6 text-primary" /> : <ChevronDown className="h-6 w-6 text-primary" />}
              </div>
            </CardHeader>
            {openExperiences[index] && (
              <CardContent id={`experience-content-${index}`}>
                <ul className="list-disc list-outside pl-5 space-y-1 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="font-body">{resp}</li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
