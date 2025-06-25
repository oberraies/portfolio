
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';

interface TemplatesPageProps {
  params: { locale: Locale };
}

// Existing templates data (content remains in French/placeholders for now)
const templatesData = [
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


export default async function TemplatesPage({ params: { locale } }: TemplatesPageProps) {
  const dict = await getDictionary(locale);
  const t = dict.pageHeaders;
  
  const previewButtonLabel = locale === 'fr' ? "Aperçu" : "Preview";
  const downloadButtonLabel = locale === 'fr' ? "Télécharger" : "Download";

  const fullDescription = t.templatesDescription;
  const separator = '→';
  const parts = fullDescription.split(separator);
  const descriptionPart1 = parts[0] + (parts.length > 1 ? separator : '');
  const highlightPart = parts.length > 1 ? parts[1].trim() : '';

  const descriptionJsx = (
    <>
      {descriptionPart1}
      {highlightPart && (
        <span className="font-bold text-destructive">{highlightPart}</span>
      )}
    </>
  );

  return (
    <div>
      <PageHeader 
        title={t.templatesTitle}
        description={descriptionJsx} // Pass the JSX description here
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templatesData.map((template, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
             <div className="relative w-full h-48">
              <Image
                src={template.image}
                alt={template.title} // Alt text should be translated
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
                    <Eye className="mr-2 h-4 w-4" /> {previewButtonLabel}
                  </Link>
                </Button>
              )}
              {template.downloadLink && template.downloadLink !== '#' && (
                <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={template.downloadLink} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> {downloadButtonLabel}
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
