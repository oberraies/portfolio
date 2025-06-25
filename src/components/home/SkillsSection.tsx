
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Lightbulb, Briefcase, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { HomePageDictionaryItems } from '@/dictionaries/fr';

interface SkillsSectionProps {
  t: HomePageDictionaryItems;
}

export default function SkillsSection({ t }: SkillsSectionProps) {
  const skills = [
    { key: 'skillVbaDev', icon: Code, name: t.skillVbaDev.name, description: t.skillVbaDev.description },
    { key: 'skillDataAnalysis', icon: Lightbulb, name: t.skillDataAnalysis.name, description: t.skillDataAnalysis.description },
    { key: 'skillProjectManagement', icon: Briefcase, name: t.skillProjectManagement.name, description: t.skillProjectManagement.description },
    { key: 'skillCollaboration', icon: Users, name: t.skillCollaboration.name, description: t.skillCollaboration.description },
  ];

  return (
    <section className="container mx-auto px-4">
      <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12 text-primary", "font-headline")}>{t.mySkillsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <Card key={skill.key} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <skill.icon className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className={cn("text-xl", "font-headline")}>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={cn("text-muted-foreground", "font-body")}>{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
