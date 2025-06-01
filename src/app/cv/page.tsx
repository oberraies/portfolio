
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Download, GraduationCap, Star, FileSpreadsheet, Code, Database, LayoutDashboard, UserCheck, FilePieChart, Filter, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const education = [
  {
    degree: 'Licence fondamentale en informatique de gestion',
    institution: 'Faculté des Sciences économique et de Gestion de Tunis',
    period: '',
    description: 'Conception et développement d’applications informatiques orientées vers la gestion des entreprises.',
  },
];

const experience = [
  {
    role: 'Chef de service - Développeur Excel VBA Sénior',
    company: "Caisse Nationale d'Assurance Maladie",
    period: "2021 - Aujourd'hui",
    responsibilities: [
      'Développement d’applications sous Excel, analyse, extraction et transformation des données.',
      'Création de codes favorisant les automatisations des tâches et process.',
      'Reporting, statistiques et apurements.',
      'Technologies : Excel VBA – Oracle forms – PL/SQL – SQL Developer – Mysql',
    ],
  },
  {
    role: 'Technicien support applicatif',
    company: 'Quanta',
    period: '2022 - 2023',
    responsibilities: [
      'Suivi des tickets (Notion, ClickUp, Hubspot), support client, rédaction des rapports.',
      'Réponses aux mails, meeting clients pour fournir des réponses et guider les utilisateurs sur la plateforme.',
      'Connexion avec les développeurs afin de proposer des améliorations ou demander des détails.',
      'Élaboration de rapports et HealthChecks pour les différents utilisateurs.',
    ],
  },
  {
    role: 'Sous-chef de service',
    company: 'Caisse Nationale d’Assurance Maladie (CNAM)',
    period: '06/2008 – 12/2019',
    responsibilities: [
      'Gestion des demandes d’accord préalable.',
      'Gestion des demandes d’admission pour les affection prises en charge intégralement.',
      'Développement d’applications sous Excel / VBA (Suivi des présences, heures supplémentaires, congés…, gestion des demandes et édition des décisions de prises en charge pour dialyse péritonéale…)',
      'Formulaires et interfaces Oracle forms',
    ],
  },
  {
    role: 'Data analyst et chargé de reporting',
    company: 'LaSer Contact',
    period: '08/2007 – 05/2008',
    responsibilities: [
      'Collecte, analyse et présentation des données.',
      'Statistiques - rapports journaliers, hebdomadaires, mensuels…',
      'Comité de pilotage et analyse décisionnelle.',
      'Planifications des équipes d’assistance et gestion des ressources humaines.',
      'Technologies : Access VBA – Excel VBA – SQL.',
    ],
  },
  {
    role: 'Technicien support applicatif N2',
    company: 'LaSer Contact',
    period: '06/2007 – 08/2007',
    responsibilities: [
      'Réception d’appels clients.',
      'Dépannage des caisses enregistreuses et des appareils de paiement à distance.',
      'Contact, tri et mise en relation avec les équipes N3 et maintenance.',
    ],
  },
];

const skills = [
  { name: 'Excel (formules avancées, tableaux croisés)', level: 95, icon: FileSpreadsheet },
  { name: 'VBA (automatisations, ADO, formulaires)', level: 95, icon: Code },
  { name: 'Access (requêtes SQL, formulaires)', level: 95, icon: Database },
  { name: 'SQL (requêtes, jointures, filtrage, bases Access/SQL Server)', level: 90, icon: Database },
  { name: 'Tableaux de bord dynamiques', level: 90, icon: LayoutDashboard },
  { name: 'Expérience utilisateur', level: 90, icon: UserCheck },
  { name: 'Automatisation de rapports / reporting', level: 90, icon: FilePieChart },
  { name: 'Nettoyage et transformation des données', level: 90, icon: Filter },
];

const trainingActivities = [
  {
    title: 'Formation Excel initiation',
    buttonLabel: 'Voir le programme',
  },
  {
    title: 'Formation Excel avancé',
    buttonLabel: 'Voir le programme',
  },
  {
    title: 'Formation Excel expert',
    buttonLabel: 'Voir le programme',
  },
  {
    title: 'Formation Excel VBA',
    buttonLabel: 'Voir le programme',
  },
];

export default function CVPage() {
  return (
    <div>
      <PageHeader 
        title="Mon Curriculum Vitae"
        description="Un aperçu de mon parcours professionnel, de mes formations et de mes compétences."
      />

      <div className="text-center mb-12">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
          <a href="/Oussama_Berraies.pdf" download="Oussama_Berraies.pdf">
            <Download className="mr-2 h-5 w-5" />
            Télécharger mon CV (PDF)
          </a>
        </Button>
      </div>

      <div className="space-y-12">
        {/* Education Section */}
        <section>
          <h2 className={cn("text-3xl font-bold mb-6 text-primary flex items-center", "font-headline")}>
            <GraduationCap className="mr-3 h-8 w-8" /> Parcours et formation
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className={cn("text-xl", "font-headline")}>{edu.degree}</CardTitle>
                  <CardDescription className={cn("text-md text-accent", "font-body")}>
                    {edu.institution} {edu.period && `| ${edu.period}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={cn("text-muted-foreground", "font-body")}>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className={cn("text-3xl font-bold mb-6 text-primary flex items-center", "font-headline")}>
            <Briefcase className="mr-3 h-8 w-8" /> Expérience Professionnelle
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className={cn("text-xl", "font-headline")}>{exp.role}</CardTitle>
                  <CardDescription className={cn("text-md text-accent", "font-body")}>
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-muted-foreground">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="font-body">{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className={cn("text-3xl font-bold mb-8 text-primary flex items-center", "font-headline")}>
            <Star className="mr-3 h-8 w-8" /> Compétences Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <skill.icon className="h-6 w-6 mr-2 text-primary" />
                      <span className={cn("text-lg font-medium", "font-body")}>{skill.name}</span>
                    </div>
                    <span className={cn("text-sm text-accent font-semibold", "font-body")}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div 
                      className="bg-accent h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Training Activities Section */}
        <section>
          <h2 className={cn("text-3xl font-bold mb-8 text-primary flex items-center", "font-headline")}>
            <BookOpen className="mr-3 h-8 w-8" /> Activités de formation professionnelle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingActivities.map((activity, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <CardTitle className={cn("text-xl", "font-headline")}>{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Vous pouvez ajouter une brève description ici si nécessaire */}
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-accent-lighter hover:bg-accent-lighter/90 text-accent-foreground">
                    {activity.buttonLabel}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
