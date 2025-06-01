
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Download, GraduationCap, Award, Code, Star } from 'lucide-react';
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
    company: "Caisse Nationale d'assurance Maladie",
    period: "2021 - Aujourd'hui",
    responsibilities: [
      'Développement d’applications sous Excel, analyse, extraction et transformation des données.',
      'Création de codes favorisant les automatisations des tâches et process.',
      'Reporting, statistiques et apurements.',
      'Technologies : Excel VBA – Oracle forms – PL/SQL – SQL Developer – Mysql',
    ],
  },
  {
    role: 'Développeur Full-Stack',
    company: 'Startup Innovante',
    period: '2020 - 2021',
    responsibilities: [
      'Conception et développement de fonctionnalités clés pour une plateforme SaaS.',
      'Intégration de solutions tierces et maintenance évolutive.',
      'Participation active aux méthodologies Agile (Scrum).',
    ],
  },
];

const skills = [
  { name: 'JavaScript / TypeScript', level: 90, icon: Code },
  { name: 'React / Next.js', level: 95, icon: Code },
  { name: 'Node.js / Express', level: 85, icon: Code },
  { name: 'Python / Django', level: 75, icon: Code },
  { name: 'Bases de données (SQL, NoSQL)', level: 80, icon: Code },
  { name: 'Docker / Kubernetes', level: 70, icon: Code },
  { name: 'Figma / Adobe XD', level: 88, icon: Code },
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
            <GraduationCap className="mr-3 h-8 w-8" /> Formation
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
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
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
      </div>
    </div>
  );
}
