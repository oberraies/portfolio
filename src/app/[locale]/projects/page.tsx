
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
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-card">
            <div className="relative group">
              <div className="overflow-hidden h-48">
                <Image
                  src={project.image || 'https://placehold.co/600x400.png'}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  {project.liveLink && project.liveLink !== '#' && (
                    <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> {tProjectsPage.liveDemoButton}
                      </Link>
                    </Button>
                  )}
                  {project.repoLink && project.repoLink !== '#' && (
                    <Button variant="secondary" size="sm" asChild>
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> {tProjectsPage.githubButton}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <CardHeader>
              <CardTitle className={cn("text-xl", "font-headline")}>{project.title}</CardTitle>
              <div className="flex justify-between items-center pt-2 text-sm text-muted-foreground">
                {project.period && (
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span className={cn("font-body")}>{project.period}</span>
                  </div>
                )}
                {project.logo && (
                  <div className="flex items-center gap-2 ml-auto h-10">
                    {project.logolabel && <span className="text-xs font-body">{project.logolabel}</span>}
                    <div
                      className={cn(
                        "flex items-center justify-center h-full",
                        project.logoNeedsLightBg && "bg-white p-1 rounded-md"
                      )}
                    >
                      <Image
                        src={project.logo}
                        alt={`${project.logolabel || project.title} logo`}
                        width={90}
                        height={90}
                        className="object-contain h-full w-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow pb-2">
              <CardDescription className="font-body">{project.description}</CardDescription>
            </CardContent>
            
            <CardFooter>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-body">{tag}</span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
