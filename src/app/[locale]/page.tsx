
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Locale } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';
import dynamic from 'next/dynamic';

// Dynamically import components that are below the fold.
// This code-splits the JavaScript, reducing the initial bundle size.
// ssr: true is the default and is good for SEO.
const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const SkillsSection = dynamic(() => import('@/components/home/SkillsSection'));
const CtaSection = dynamic(() => import('@/components/home/CtaSection'));


interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const dict = await getDictionary(locale);
  const t = dict.homePage;

  return (
    <div className="space-y-16">
      {/* This is the "Above the Fold" content. It loads instantly. */}
      <section className="text-center py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className={cn("text-3xl md:text-4xl font-bold tracking-tight mb-6", "font-headline")}>
            <span className="text-foreground">{t.greeting} </span><span className="text-primary">{t.name}</span>
          </h1>
          <p className={cn("text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8", "font-body")}>
            {t.role} {t.intro}
          </p>
          <div className="space-x-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
              <Link
                href={`/${locale}/projects`}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  "w-4/5 sm:w-2/3 md:w-auto shadow-md transition-transform hover:scale-105"
                )}
              >
                {t.myProjectsButton}
              </Link>
            
              <Link
                href={`/${locale}/contact`}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  "w-4/5 sm:w-2/3 md:w-auto border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105"
                )}
              >
                {t.contactMeButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* These sections are lazy-loaded. Their JavaScript will not be included
          in the initial page load, improving performance. */}
      <AboutSection t={t} locale={locale} />
      <SkillsSection t={t} />
      <CtaSection t={t} locale={locale} />
    </div>
  );
}
