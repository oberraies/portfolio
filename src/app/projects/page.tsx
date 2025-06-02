
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Application de gestion pour clubs de football',
    description: "L'objectif est de créer un suivi complet des présences/absences et rendement des élèves et encadrants, permettre la gestion des emplois de temps et de produire des reportings hebdomadaires. L'application offre des outils de visualisation, de calcul des indicateurs de performances.",
    image: 'https://placehold.co/600x400.png',
    tags: ["Excel", "VBA", "Data visualisaton", "Reporting avancé", "Gestion des images"],
    liveLink: '#',
    repoLink: '#',
    imageHint: 'football management',
    period: "09/2024 - 10/2024"
  },
  {
    title: 'Application de Gestion de Tâches Collaboratives',
    description: 'Un outil SaaS permettant aux équipes de gérer leurs projets et tâches de manière efficace, avec des fonctionnalités de suivi en temps réel.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Firebase', 'Node.js', 'Material UI'],
    liveLink: '#',
    repoLink: '#',
    imageHint: 'task manager'
  },
  {
    title: 'Portfolio Personnel V2',
    description: 'Une refonte moderne de mon portfolio personnel, mettant en avant mes compétences et projets récents avec un design épuré.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Gatsby', 'GraphQL', 'Contentful', 'Styled Components'],
    liveLink: '#',
    repoLink: '#',
    imageHint: 'portfolio website'
  },
   {
    title: 'Blog Technique Interactif',
    description: 'Une plateforme de blogging avec des fonctionnalités avancées telles que des snippets de code interactifs et des commentaires en temps réel.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Vue.js', 'Nuxt.js', 'Supabase', 'Markdown'],
    liveLink: '#',
    repoLink: '#',
    imageHint: 'tech blog'
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader 
        title="Mes Projets"
        description="Découvrez une sélection de mes réalisations, illustrant mon expertise et ma passion pour le développement."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="relative w-full h-48">
              <Image
                src={project.image}
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
            <CardContent className="flex-grow pb-4">
              <CardDescription className="font-body">{project.description}</CardDescription>
              {project.period && (
                <div className="flex items-center mt-3 text-sm">
                  <CalendarDays className="mr-2 h-4 w-4 text-primary" />
                  <span className={cn("font-body text-primary")}>{project.period}</span>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {project.repoLink && project.repoLink !== '#' && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
              {project.liveLink && project.liveLink !== '#' && (
                 <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Démo Live
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
