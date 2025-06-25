
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { HomePageDictionaryItems } from '@/dictionaries/fr';
import type { Locale } from '@/config/i18n';

interface AboutSectionProps {
  t: HomePageDictionaryItems;
  locale: Locale;
}

export default function AboutSection({ t, locale }: AboutSectionProps) {
  return (
    <section className="container mx-auto px-4">
      <Card className="shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-4 flex items-center justify-center">
            <Image
              src="/photo-profil.jpg"
              alt="Photo de Oussama Berraies"
              width={200}
              height={200}
              className="object-cover shadow-md"
              data-ai-hint="profile photo"
            />
          </div>
          <div className="md:w-2/3 p-8 md:p-12 md:flex md:flex-col md:justify-center">
            <h2 className={cn("text-3xl md:text-4xl font-bold mb-6 text-primary", "font-headline")}>{t.aboutMeTitle}</h2>
            <p className={cn("text-lg text-foreground mb-4", "font-body")}>
              {t.aboutMeText}
            </p>
            <Button
              asChild
              className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105"
            >
              <Link href={`/${locale}/cv`} className="flex items-center gap-2">
                {t.viewCvButton}
                <Eye className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
