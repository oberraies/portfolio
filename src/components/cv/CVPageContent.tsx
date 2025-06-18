
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Star, FileSpreadsheet, Code, Database, LayoutDashboard, UserCheck, FilePieChart, Filter, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { CVPageDictionaryItems, CVSkillItem as Skill } from '@/dictionaries/fr'; // Use one lang for type

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

interface AnimatedSkillBarProps {
  skill: Skill;
  IconComponent: React.ElementType;
  isVisible: boolean;
}

const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({ skill, IconComponent, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationDuration = 1500; // 1.5 seconds

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true); // Set this early to prevent re-triggering

      let startTime: number | null = null;
      let animationFrameId: number;

      const animate = (timestamp: number) => {
        if (!startTime) {
          startTime = timestamp;
        }
        const progress = timestamp - (startTime as number);
        const percentageComplete = Math.min(progress / animationDuration, 1);
        const currentLevel = Math.floor(percentageComplete * skill.level);

        setAnimatedLevel(currentLevel);

        if (percentageComplete < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [skill.level, skill.name, isVisible, animationDuration]); // Removed hasAnimated from dependencies

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <IconComponent className="h-6 w-6 mr-2 text-primary" />
            <span className={cn("text-base font-medium", "font-body")}>{skill.name}</span>
          </div>
          <span className={cn("text-sm font-semibold", "font-body")} style={{ color: 'hsl(var(--muted-foreground))' }}>
            {animatedLevel}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full" // Removed transition-all, duration-500, ease-out
            style={{ width: `${animatedLevel}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};


interface CVPageContentProps {
  cvDict: CVPageDictionaryItems;
  trainingPdfLinks: string[];
}

export function CVPageContent({ cvDict, trainingPdfLinks }: CVPageContentProps) {
  const [openExperiences, setOpenExperiences] = useState<Record<number, boolean>>({ 0: true });
  const skillsSectionRef = useRef<HTMLElement>(null);
  const [isSkillsSectionVisible, setIsSkillsSectionVisible] = useState(false);

  useEffect(() => {
    const element = skillsSectionRef.current; 
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSkillsSectionVisible(true);
          observer.unobserve(element); 
        }
      },
      {
        threshold: 0.01, // Lowered threshold
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element); 
      }
    };
  }, []); 


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

      <section ref={skillsSectionRef}>
        <h2 className={cn("text-3xl font-bold mb-8 text-primary flex items-center", "font-headline")}>
          <Star className="mr-3 h-8 w-8" /> {cvDict.skillsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvDict.skills.map((skill, index) => {
            const IconComponent = skillIcons[skill.name] || Star; 
            return (
              <AnimatedSkillBar 
                key={index} 
                skill={skill} 
                IconComponent={IconComponent} 
                isVisible={isSkillsSectionVisible}
              />
            );
          })}
        </div>
      </section>

      <section>
        <h2 className={cn("text-3xl font-bold mb-8 text-primary flex items-center", "font-headline")}>
          <BookOpen className="mr-3 h-8 w-8" /> {cvDict.trainingTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvDict.training.map((activity, index) => {
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
    </div>
  );
}

