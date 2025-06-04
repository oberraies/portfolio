import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const templates = [
  {
    title: 'Template de Landing Page Moderne',
    description: 'Un template épuré et responsive pour présenter un produit ou service, optimisé pour la conversion.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    previewLink: '#',
    downloadLink: '#',
    imageHint: 'landing page'
  },
  {
    title: 'Composant Tableau de Bord Admin',
    description: 'Une collection de composants UI pour construire rapidement des interfaces d\'administration intuitives et fonctionnelles.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Vue.js', 'Chart.js', 'Composants UI'],
    previewLink: '#',
    downloadLink: '#',
    imageHint: 'dashboard ui'
  },
  {
    title: 'Starter Kit Blog Minimaliste',
    description: 'Un point de départ simple et élégant pour créer un blog personnel, avec support Markdown et SEO.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Markdown', 'SEO Friendly'],
    previewLink: '#',
    downloadLink: '#',
    imageHint: 'blog template'
  },
];

export default function TemplatesPage() {
  return (
    <div>
      <PageHeader 
        title="Mes Templates"
        description="Explorez une sélection de templates et composants réutilisables pour accélérer vos projets. → En cours de développement, revenez bientôt !"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
             <div className="relative w-full h-48">
              <Image
                src={template.image}
                alt={template.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={template.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className={cn("text-xl", "font-headline")}>{template.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {template.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-body">{tag}</span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="font-body">{template.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {template.previewLink && template.previewLink !== '#' && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={template.previewLink} target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" /> Aperçu
                  </Link>
                </Button>
              )}
              {template.downloadLink && template.downloadLink !== '#' && (
                <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={template.downloadLink} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Télécharger
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
