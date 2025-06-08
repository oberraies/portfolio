
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';

interface ProjectsPageProps {
  params: { locale: Locale };
}

// Static data for images and logos - paths relative to /public
const projectAssets: Record<string, { image: string; logo: string }> = {
  'gestion-club-foot': { image: '/projet-gestion-club-foot.png', logo: '/Logo_Exceloco.png' },
  'choix-transporteurs': { image: '/Slate_Main.png', logo: '/Slate_Logo.jpg' },
  'audit-energetique': { image: '/Perfect_Main.png', logo: '/Logo_Perfect.png' },
  'gestion-paie': { image: '/HL_Main.png', logo: '/Logo_HL.png' },
  'dimensionnement-pac': { image: '/Wolf_Main.png', logo: '/Logo_Wolf.png' },
  'calcul-recyclabilite': { image: '/Refashion_Main.png', logo: '/Logo_Refashion.jpg' },
  'planning-retroplanning': { image: '/CM_Main.png', logo: '/Logo_CM.png' },
  'gestion-planification': { image: '/Planification_Main.png', logo: '/Logo_Exceloco.png' },
};


export default async function ProjectsPage({ params: { locale } }: ProjectsPageProps) {
  const dict = await getDictionary(locale);
  const tPageHeader = dict.pageHeaders;
  const tProjectsPage = dict.projectsPage;

  return (
    <div>
      <PageHeader 
        title={tPageHeader.projectsTitle}
        description={tPageHeader.projectsDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tProjectsPage.projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="relative w-full h-48">
              <Image
                src={projectAssets[project.id]?.image || 'https://placehold.co/600x400.png'}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className={cn("text-xl", "font-headline")}>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-body">{tag}</span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow pb-2">
              <CardDescription className="font-body">{project.description}</CardDescription>
            </CardContent>
            
            <div className="flex justify-between items-center px-4 pb-4 mt-auto text-sm">
              {project.period && (
                <div className="flex items-center text-primary">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span className={cn("font-body")}>{project.period}</span>
                </div>
              )}
              {projectAssets[project.id]?.logo && (
                <div className="flex items-center gap-2 ml-auto">
                  {project.logolabel && <span className="text-sm font-body text-muted-foreground">{project.logolabel}</span>}
                  <Image
                    src={projectAssets[project.id]?.logo}
                    alt={`${project.logolabel || project.title} logo`}
                    width={90}
                    height={90}
                    className="ml-2 object-contain"
                  />
                </div>
              )}
            </div>

            <CardFooter className="flex justify-end space-x-2">
              {project.repoLink && project.repoLink !== '#' && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> {tProjectsPage.githubButton}
                  </Link>
                </Button>
              )}
              {project.liveLink && project.liveLink !== '#' && (
                <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> {tProjectsPage.liveDemoButton}
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

    