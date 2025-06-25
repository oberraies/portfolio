// This file is the true root layout.
// Next.js requires a root layout.
import './globals.css';
import type { Metadata } from 'next';
import type { Locale } from '@/config/i18n'; // Import Locale if needed for lang
import { Belleza, Alegreya } from 'next/font/google';
import { cn } from '@/lib/utils';

// Font configuration using next/font
const belleza = Belleza({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-belleza',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-alegreya',
});

// Metadata for the root layout can be generic or updated if locale is available.
// Next.js merges metadata from child layouts.
export const metadata: Metadata = {
  title: 'Oussama Berraies - Portfolio', 
  description: 'Professional portfolio website.',
};

export default function RootLayout({
  children,
  params, // params might not contain locale here, as [locale] is a child dynamic segment
}: Readonly<{
  children: React.ReactNode;
  params?: { locale?: Locale }; // Making params optional and locale optional
}>) {
  // The lang attribute should ideally be dynamic.
  // If params.locale is available here (depends on exact Next.js version behavior for root with child dynamic segments), use it.
  // Otherwise, Next.js might set it based on child route's generateMetadata.
  // For now, keeping 'en' as a fallback, but `suppressHydrationWarning` is key.
  const lang = params?.locale || 'en';

  return (
    <html lang={lang} className={cn(belleza.variable, alegreya.variable)} suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
