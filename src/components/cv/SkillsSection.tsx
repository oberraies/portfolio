
'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, FileSpreadsheet, Code, Database, LayoutDashboard, UserCheck, FilePieChart, Filter, FormInput } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CVSkillItem as Skill } from '@/dictionaries/fr';

const skillIcons: Record<string, React.ElementType> = {
  'Excel (formules avancées, tableaux croisés)': FileSpreadsheet,
  'Excel (advanced formulas, pivot tables)': FileSpreadsheet,
  'VBA (automatisations, ADO, formulaires)': Code,
  'VBA (automations, ADO, forms)': Code,
  'Access (requêtes SQL, formulaires)': FormInput,
  'Access (SQL queries, forms)': FormInput,
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
  'Gestion de bases de données relationnelles': Database,
};

interface AnimatedSkillBarProps {
  skill: Skill;
  IconComponent: React.ElementType;
  isVisible: boolean;
}

const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({ skill, IconComponent, isVisible }) => {
  const isSqlSkill = skill.name.toLowerCase().startsWith('sql');
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = skill.level;
      if (start === end) {
        setDisplayLevel(end);
        return;
      };

      const duration = 2000; // 2 seconds
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setDisplayLevel(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <IconComponent className={cn("mr-2 text-primary", isSqlSkill ? "h-8 w-8" : "h-6 w-6")} />
            <span className={cn("text-base font-medium", "font-body")}>{skill.name}</span>
          </div>
          <span className={cn("text-sm font-semibold", "font-body")} style={{ color: 'hsl(var(--muted-foreground))' }}>
            {displayLevel}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full"
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transition: 'width 2s ease-in-out',
            }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};


interface SkillsSectionProps {
  title: string;
  skills: Skill[];
}

export function SkillsSection({ title, skills }: SkillsSectionProps) {
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
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section ref={skillsSectionRef}>
      <h2 className={cn("text-3xl font-bold mb-8 text-primary flex items-center", "font-headline")}>
        <Star className="mr-3 h-8 w-8" /> {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
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
  );
}
