
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Download, GraduationCap, Star, FileSpreadsheet, Code, Database, LayoutDashboard, UserCheck, FilePieChart, Filter, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const education = [
  {
    degree: 'Licence fondamentale en informatique de gestion',
    institution: 'Faculté des Sciences économique et de Gestion de Tunis',
    period: '',
    description: 'Conception et développement d’applications informatiques orientées vers la gestion des entreprises.',
  },
];

const experienceData = [ 
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
    pdfLink: '/plan_de_formation_excel_initiation.pdf',
  },
  {
    title: 'Formation Excel avancé',
    buttonLabel: 'Voir le programme',
    pdfLink: '/plan_de_formation_excel_avance.pdf',
  },
  {
    title: 'Formation Excel expert',
    buttonLabel: 'Voir le programme',
    pdfLink: '/plan_de_formation_excel_expert.pdf',
  },
  {
    title: 'Formation Excel VBA',
    buttonLabel: 'Voir le programme',
    pdfLink: '/plan_de_formation_excel_vba.pdf',
  },
];

export default function CVPage() {
  const [openExperiences, setOpenExperiences] = useState<Record<number, boolean>>({ 0: true });

  const toggleExperience = (index: number) => {
    setOpenExperiences(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div>
      <PageHeader 
        title="Mon Curriculum Vitae"
        description="Un aperçu de mon parcours professionnel, de mes formations et de mes compétences."
      />

      <div className="text-center mb-12">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
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
                  <CardDescription className={cn("text-md", "font-body")}>
                    <span className="text-primary">{edu.institution}</span> {edu.period && `| ${edu.period}`}
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
            {experienceData.map((exp, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader 
                  className="cursor-pointer" 
                  onClick={() => toggleExperience(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleExperience(index)}
                  aria-expanded={!!openExperiences[index]}
                  aria-controls={`experience-content-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className={cn("text-xl", "font-headline")}>{exp.role}</CardTitle>
                      <CardDescription className={cn("text-md", "font-body")}>
                        <span className="text-primary">{exp.company}</span> | <span className="text-primary">{exp.period}</span>
                      </CardDescription>
                    </div>
                    {openExperiences[index] ? <ChevronUp className="h-6 w-6 text-primary" /> : <ChevronDown className="h-6 w-6 text-primary" />}
                  </div>
                </CardHeader>
                {openExperiences[index] && (
                  <CardContent id={`experience-content-${index}`}>
                    <ul className="list-disc list-outside pl-5 space-y-1 text-muted-foreground">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="font-body">{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
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
                      <span className={cn("text-base font-medium", "font-body")}>{skill.name}</span>
                    </div>
                    <span className={cn("text-sm font-semibold", "font-body")} style={{ color: '#d3d0c5' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div 
                      className="bg-buttonCustom h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` , backgroundColor: '#d3d0c5' }}
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
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                    <Link href={activity.pdfLink} target="_blank" rel="noopener noreferrer">
                      {activity.buttonLabel}
                    </Link>
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

    
