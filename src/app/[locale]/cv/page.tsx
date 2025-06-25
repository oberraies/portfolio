
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { EducationSection } from '@/components/cv/EducationSection';
import { ExperienceSection } from '@/components/cv/ExperienceSection';
import { SkillsSection } from '@/components/cv/SkillsSection';
import { TrainingSection } from '@/components/cv/TrainingSection';

interface CVPageProps {
  params: { locale: Locale };
}

export default async function CVPage({ params: { locale } }: CVPageProps) {
  const dict = await getDictionary(locale);
  const cvDict = dict.cvPage;
  const pageHeaderDict = dict.pageHeaders;

  const staticData = {
    cvPdfLink: "/Oussama_Berraies.pdf", // This path is handled by middleware
    trainingPdfLinks: [
      '/plan_de_formation_excel_initiation.pdf',
      '/plan_de_formation_excel_avance.pdf',
      '/plan_de_formation_excel_expert.pdf',
      '/plan_de_formation_excel_vba.pdf',
      `/${locale}/contact`, // Link for "Formation sur mesure" / "Custom Training"
    ]
  };

  return (
    <div>
      <PageHeader 
        title={pageHeaderDict.cvTitle}
        description={pageHeaderDict.cvDescription}
      >
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
          <a href={staticData.cvPdfLink} download={staticData.cvPdfLink.split('/').pop()}>
            <Download className="mr-2 h-5 w-5" />
            {pageHeaderDict.downloadCvButton}
          </a>
        </Button>
      </PageHeader>
      
      <div className="space-y-12">
        <ExperienceSection 
          title={cvDict.experienceTitle}
          experienceItems={cvDict.experience}
        />
        <SkillsSection 
          title={cvDict.skillsTitle}
          skills={cvDict.skills}
        />
        <EducationSection
          title={cvDict.educationTitle}
          educationItems={cvDict.education}
        />
        <TrainingSection
          title={cvDict.trainingTitle}
          trainingItems={cvDict.training}
          trainingPdfLinks={staticData.trainingPdfLinks}
        />
      </div>
    </div>
  );
}
