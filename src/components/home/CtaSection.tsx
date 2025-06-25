
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { HomePageDictionaryItems } from '@/dictionaries/fr';
import type { Locale } from '@/config/i18n';

interface CtaSectionProps {
  t: HomePageDictionaryItems;
  locale: Locale;
}

export default function CtaSection({ t, locale }: CtaSectionProps) {
  return (
    <section className="container mx-auto px-4 text-center py-16">
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-6 text-primary", "font-headline")}>{t.ctaTitle}</h2>
      <p className={cn("text-lg text-muted-foreground mb-8 max-w-xl mx-auto", "font-body")}>
        {t.ctaText}
      </p>
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
        <Link href={`/${locale}/contact`}>{t.ctaButton}</Link>
      </Button>
    </section>
  );
}
