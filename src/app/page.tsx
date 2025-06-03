
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, Code, Coffee, Lightbulb, Users } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const skills = [
    { name: 'Développement VBA', icon: Code, description: 'Création de scripts et applications sur mesure avec une expérience utilisateur optimale' },
    { name: 'Analyse de données', icon: Lightbulb, description: 'Transformer les données brutes en informations claires, utiles et exploitables.' },
    { name: 'Gestion de Projet', icon: Briefcase, description: 'Planification, exécution et suivi de projets digitaux.' },
    { name: 'Collaboration', icon: Users, description: 'Travail en équipe efficace et communication transparente.' },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className={cn("text-3xl md:text-4xl font-bold tracking-tight mb-6", "font-headline")}>
            <span className="text-foreground">Bonjour, je suis </span><span className="text-primary">Oussama Berraies</span>
          </h1>
          <p className={cn("text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8", "font-body")}>
            Data Analyst, Développeur Excel VBA et Formateur. J’automatise les processus, conçois des applications sur mesure et transforme les données en tableaux de bord interactifs pour une prise de décision rapide et efficace.
          </p>
          <div className="space-x-4">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                <Link href="/projects">Mes Projets</Link>
              </Button>
            
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105"
              >
                <Link href="/contact">Contactez-moi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="container mx-auto px-4">
         <Card className="shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-4 flex items-center justify-center"> {/* Ajout de position relative pour le conteneur de l'image si besoin pour object-fit */}
              <Image
                src="/photo-profil.jpg" // Assurez-vous que public/photo-profil.jpg existe !
                alt="Photo de Oussama Berraies"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-md" // w-full et h-auto pour la responsivité, md:h-full pour remplir la hauteur sur md+
                data-ai-hint="profile photo"
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12 md:flex md:flex-col md:justify-center">
              <h2 className={cn("text-3xl md:text-4xl font-bold mb-6 text-primary", "font-headline")}>À propos de moi</h2>
              <p className={cn("text-lg text-foreground mb-4", "font-body")}>
                Data Analyst et Développeur Excel VBA avec plus de 14 ans d'expérience en automatisation de processus et analyse de données. Expert en tableaux de bord interactifs, optimisation des flux et extraction de données complexes. Maîtrise de VBA, SQL et Excel pour transformer les données en insights exploitables, facilitant des décisions rapides et efficaces. Innovant, rigoureux et orienté résultats, je crée des solutions sur mesure pour optimiser la performance des équipes et entreprises.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                <Link href="/cv">Voir mon CV</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4">
        <h2 className={cn("text-3xl md:text-4xl font-bold text-center mb-12 text-primary", "font-headline")}>Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <Card key={skill.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
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

      {/* Call to Action */}
      <section className="container mx-auto px-4 text-center py-16">
        <h2 className={cn("text-3xl md:text-4xl font-bold mb-6 text-primary", "font-headline")}>Prêt à collaborer ?</h2>
        <p className={cn("text-lg text-muted-foreground mb-8 max-w-xl mx-auto", "font-body")}>
          Discutons de votre projet et voyons comment nous pouvons créer quelque chose d'exceptionnel ensemble.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
          <Link href="/contact">Parlons-en !</Link>
        </Button>
      </section>
    </div>
  );
}
