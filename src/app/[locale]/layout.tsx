
import type { Metadata } from 'next';
import '../globals.css'; // Adjusted path for globals.css
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Locale, i18n } from '@/config/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import ToasterProvider from '@/components/shared/ToasterProvider';


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      ]
    },
  };
}

export default async function LocaleLayout({ // Renamed from RootLayout for clarity
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);

  const navLinksData = {
    home: dict.navLinks.home,
    cv: dict.navLinks.cv,
    projects: dict.navLinks.projects,
    templates: dict.navLinks.templates,
    contact: dict.navLinks.contact,
  };

  return (
    <>
      {/* 
        Le HTML, HEAD, et BODY tags sont maintenant gérés par src/app/layout.tsx.
        Ce layout fournit le contenu POUR le body.
        Les balises <link> pour les polices sont déplacées vers le layout racine (src/app/layout.tsx).
      */}
      <Navbar 
        navLinksLabels={navLinksData} 
        navbarLabels={dict.navbar}
        currentLocale={locale}
        defaultLocale={i18n.defaultLocale}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer footerLabels={dict.footer} />
      <ToasterProvider />
      <SpeedInsights/>
      <Analytics/>
    </>
  );
}
