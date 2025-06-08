
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { i18n } from '@/config/i18n';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  try {
    return matchLocale(languages, locales, i18n.defaultLocale);
  } catch (e) {
    // Catch error if no locale matched, and default to defaultLocale
    return i18n.defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignore specific paths for Next.js internals, API routes, and static files
  if (
    [
      '/api',
      '/_next/static',
      '/_next/image',
      '/favicon.ico',
      '/icon.svg',
      '/background-image.png',
      '/photo-profil.jpg',
      '/Oussama_Berraies.pdf',
      '/plan_de_formation_excel_initiation.pdf',
      '/plan_de_formation_excel_avance.pdf',
      '/plan_de_formation_excel_expert.pdf',
      '/plan_de_formation_excel_vba.pdf',
      '/projet-gestion-club-foot.png',
      '/Slate_Main.png',
      '/Slate_Logo.jpg',
      '/Perfect_Main.png',
      '/Logo_Perfect.png',
      '/HL_Main.png',
      '/Logo_HL.png',
      '/Wolf_Main.png',
      '/Logo_Wolf.png',
      '/Refashion_Main.png',
      '/Logo_Refashion.jpg',
      '/CM_Main.png',
      '/Logo_CM.png',
      '/Planification_Main.png',
      '/Logo_Exceloco.png',
    ].some((path) => pathname.startsWith(path)) ||
    pathname.includes('.') // Ignore files with extensions
  ) {
    return;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|.*\\..*).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
