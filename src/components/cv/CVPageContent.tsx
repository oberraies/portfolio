
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Star, FileSpreadsheet, Code, Database, LayoutDashboard, UserCheck, FilePieChart, Filter, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { CVPageDictionaryItems } from '@/dictionaries/fr'; // Use one lang for type

// Mapping skill names (or IDs if you prefer) to icons
const skillIcons: Record<string, React.ElementType> = {
  'Excel (formules avancées, tableaux croisés)': FileSpreadsheet,
  'Excel (advanced formulas, pivot tables)': FileSpreadsheet,
  'VBA (automatisations, ADO, formulaires)': Code,
  'VBA (automations, ADO, forms)': Code,
  'Access (requêtes SQL, formulaires)': Database,
  'Access (SQL queries, forms)': Database,
  'SQL (requêtes, jointures, filtrage, bases Access/SQL Server)': Database,
  'SQL (queries, joins, filtering, Access/SQL Server databases)': Database,
  'Tableaux de bord dynamiques': LayoutDashboard,
  'Dynamic dashboards': LayoutDashboard,
  'Expérience utilisateur': UserCheck,
  'User experience': UserCheck,
  'Automatisation de rapports / reporting': FilePieChart,
  'Report automation / reporting': FilePieChart,
  'Nettoyage et transformation des données': Filter,
  'Data cleaning and transformation': Filter,
};


interface CVPageContentProps {
  cvDict: CVPageDictionaryItems;
  trainingPdfLinks: string[];
}

export function CVPageContent({ cvDict, trainingPdfLinks }: CVPageContentProps) {
  const [openExperiences, setOpenExperiences] = useState<Record<number, boolean>>({ 0: true });

  const toggleExperience = (index: number) => {
    setOpenExperiences(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="space-y-12">
      <section>
        <h2 className={cn("text-3xl font-bold mb-6 text-primary flex items-center", "font-headline")}>
          <GraduationCap className="mr-3 h-8 w-8" /> {cvDict.educationTitle}
        </h2>
        <div className="space-y-6">
          {cvDict.education.map((edu, index) => (
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

      <section>
        <h2 className={cn("text-3xl font-bold mb-6 text-primary flex items-center", "font-headline")}>
          <Briefcase className="mr-3 h-8 w-8" /> {cvDict.experienceTitle}
        </h2>
        <div className="space-y-6">
          {cvDict.experience.map((exp, index) => (
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

      <section>
        <h2 className={cn("text-3xl font-bold mb-8 text-primary flex items-center", "font-headline")}>
          <Star className="mr-3 h-8 w-8" /> {cvDict.skillsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvDict.skills.map((skill, index) => {
            const IconComponent = skillIcons[skill.name] || Star; // Fallback to Star icon
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <IconComponent className="h-6 w-6 mr-2 text-primary" />
                      <span className={cn("text-base font-medium", "font-body")}>{skill.name}</span>
                    </div>
                    <span className={cn("text-sm font-semibold", "font-body")} style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className={cn("text-3xl font-bold mb-8 text-primary flex items-center", "font-headline")}>
          <BookOpen className="mr-3 h-8 w-8" /> {cvDict.trainingTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvDict.training.map((activity, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className={cn("text-xl", "font-headline")}>{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                  <Link href={trainingPdfLinks[index]} target="_blank" rel="noopener noreferrer">
                    {activity.buttonLabel}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
