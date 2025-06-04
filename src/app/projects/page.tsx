
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
    image: '/projet-gestion-club-foot.png',
    tags: ["Excel", "VBA", "Data visualisaton", "Reporting avancé", "Gestion des images"],
    liveLink: '#',
    repoLink: '#',
    imageHint: 'football app dashboard',
    period: "09/2024 - 10/2024",
    logolabel: 'Exceloco',
    logo: '/Logo_Exceloco.png'
  },
  {
    title: 'Application de choix de transporteurs et de tracking',
    description: `Outil complet d'aide à la décision logistique permettant l'import des ventes, 
    leur traitement dynamique selon la période choisie, et l'optimisation du choix du transporteur. Il inclut la validation des commandes,
     un système de suivi (tracking), une visualisation intelligente des produits spécifiques, 
     et la génération automatisée des fichiers d'export adaptés aux plateformes logistiques.`,
    image: '/Slate_Main.png',
    tags: ['Excel', 'VBA', 'Extraction des données', 'Traitement des données'],
    liveLink: '#',
    repoLink: '#',
    imageHint: 'transport manager',
    period : "09/2024",
    logolabel: 'Slate',
    logo: '/Slate_Logo.jpg'
  },
  {
    title: 'Outil d’audit des valeurs énergétiques',
    description: `Outil automatisé de gestion et de reporting de la consommation d'énergie à l'échelle régionale. 
                Il permet l'import des fichiers de saisie et d'intervention, la vérification de la cohérence des données, 
                la génération des dossiers par gouvernorat et commune, ainsi que le calcul de KPI. 
                L'outil exporte les données vers Access et produit des rapports Word détaillés pour chaque entité locale.`,
    image: '/Perfect_Main.png',
    tags: ['Excel', 'Access', 'Word', 'VBA', 'SQL'],
    liveLink: '#',
    repoLink: '#',
    imageHint: 'perfect audit tool',
    period : "06/2024 - 07/2024",
    logolabel : 'Perfect Engineering',
    logo: '/Logo_Perfect.png'
  },
  { title: 'Application de gestion et de vérification des fiches de paie',
  description: `Application de gestion de la paie et du personnel, intégrant des fiches de paie dynamiques selon le régime du collaborateur, 
              la gestion des congés (maladie, maternité, paternité, accidents de travail), 
              et l'automatisation des paramètres légaux tels que le SMIC ou la loi Fillon.`,
  image: '/HL_Main.png',
  tags: ['Excel', 'VBA', 'RH', 'Paie'],
  liveLink: '#',
  repoLink: '#',
  imageHint: 'gestion paie',
  period : "12/2023",
  logolabel : 'Habitat du Littoral',
  logo: '/Logo_HL.png'
  },
  { title: 'Outil d’aide au dimensionnement des pompes à chaleur',
  description: `Interface complète de saisie et gestion des données géographiques et techniques liées à la construction. 
              Elle permet le calcul précis des besoins en chauffage via la sélection des pompes adaptées, 
              l'analyse des déperditions thermiques grâce à des graphiques dynamiques, et génère des devis exportables en PDF. 
              Un système d'administration facilite la gestion des paramètres et valeurs utilisées.`,
  image: '/Wolf_Main.png',
  tags: ['Excel', 'VBA', 'Calculs avancés', 'Courbe dynamique', 'Aide à la décision'],
  liveLink: '#',
  repoLink: '#',
  imageHint: 'Pompe à chaleur',
  period : "05/2023",
  logolabel : 'Wolf France',
  logo: '/Logo_Wolf.png'
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader 
        title="Mes Projets"
        description="Une vitrine de mes réalisations, alliant performance, gain de temps et clarté des données. Chaque projet reflète ma capacité à répondre à des besoins concrets grâce à des outils maîtrisés."
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
            <CardContent className="flex-grow pb-2">
              <CardDescription className="font-body">{project.description}</CardDescription>
            </CardContent>
            
            {/* Période + logo + texte alignés sur une même ligne en bas */}
            <div className="flex justify-between items-center px-4 pb-4 mt-auto text-sm">
              {project.period && (
                <div className="flex items-center text-primary">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span className={cn("font-body")}>{project.period}</span>
                </div>
              )}
              {project.logo && (
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-sm font-body text-muted-foreground">{project.logolabel}</span>
                  <Image
                    src={project.logo}
                    alt={`${project.logolabel} logo`}
                    width={90}
                    height={90}
                    className="ml-2"
                  />
                </div>
              )}
            </div>

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
