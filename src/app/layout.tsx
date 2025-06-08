
// This file is the true root layout.
// Next.js requires a root layout.
import './globals.css';
import type { Metadata } from 'next';
import type { Locale } from '@/config/i18n'; // Import Locale if needed for lang

// Metadata for the root layout can be generic or updated if locale is available.
// For now, it's generic as locale isn't directly passed to the *absolute* root layout's params.
// Next.js merges metadata from child layouts.
export const metadata: Metadata = {
  title: 'Oussama Berraies - Portfolio', 
  description: 'Professional portfolio website.',
};

export default function RootLayout({
  children,
  params, // params might not contain locale here, as [locale] is a child segment
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
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Font links moved from [locale]/layout.tsx */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
