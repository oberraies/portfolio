
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Lightbulb, Briefcase, Users } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PiEyes } from "react-icons/pi";
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const dict = await getDictionary(locale);
  const t = dict.homePage;

  const skills = [
    { key: 'skillVbaDev', icon: Code, name: t.skillVbaDev.name, description: t.skillVbaDev.description },
    { key: 'skillDataAnalysis', icon: Lightbulb, name: t.skillDataAnalysis.name, description: t.skillDataAnalysis.description },
    { key: 'skillProjectManagement', icon: Briefcase, name: t.skillProjectManagement.name, description: t.skillProjectManagement.description },
    { key: 'skillCollaboration', icon: Users, name: t.skillCollaboration.name, description: t.skillCollaboration.description },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className={cn("text-3xl md:text-4xl font-bold tracking-tight mb-6", "font-headline")}>
            <span className="text-foreground">{t.greeting} </span><span className="text-primary">{t.name}</span>
          </h1>
          <p className={cn("text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8", "font-body")}>
            {t.role} {t.intro}
          </p>
          <div className="space-x-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
              <Button
                asChild
                size="lg"
                className="w-4/5 sm:w-2/3 md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                <Link href={`/${locale}/projects`}>{t.myProjectsButton}</Link>
              </Button>
            
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-4/5 sm:w-2/3 md:w-auto border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105"
              >
                <Link href={`/${locale}/contact`}>{t.contactMeButton}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
         <Card className="shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-4 flex items-center justify-center"> 
              <Image
                src="/photo-profil.jpg"
                alt="Photo de Oussama Berraies"
                width={200}
                height={200}
                className="object-cover shadow-md"
                data-ai-hint="profile photo"
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12 md:flex md:flex-col md:justify-center">
              <h2 className={cn("text-3xl md:text-4xl font-bold mb-6 text-primary", "font-headline")}>{t.aboutMeTitle}</h2>
              <p className={cn("text-lg text-foreground mb-4", "font-body")}>
                {t.aboutMeText}
              </p>
              <Button 
                asChild
                className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                <Link href={`/${locale}/cv`} className="flex items-center gap-2">
                  {t.viewCvButton}
                  <PiEyes className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

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

      <section className="container mx-auto px-4 text-center py-16">
        <h2 className={cn("text-3xl md:text-4xl font-bold mb-6 text-primary", "font-headline")}>{t.ctaTitle}</h2>
        <p className={cn("text-lg text-muted-foreground mb-8 max-w-xl mx-auto", "font-body")}>
          {t.ctaText}
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
          <Link href={`/${locale}/contact`}>{t.ctaButton}</Link>
        </Button>
      </section>
    </div>
  );
}
