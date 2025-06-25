
'server-only';

import { cache } from 'react'; // Import cache
import type { Locale } from '@/config/i18n';
import type { Dictionary } from '@/dictionaries/fr'; // Base Dictionary type from one lang
import { i18n } from '@/config/i18n';

// We enumerate all dictionaries here for better linting and typescript support
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import('@/dictionaries/fr').then((module) => module.default),
  en: () => import('@/dictionaries/en').then((module) => module.default),
};

export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  // console.log(`Attempting to load dictionary for locale: ${locale}`);
  const loadLocale = dictionaries[locale] || dictionaries[i18n.defaultLocale];
  try {
    const dict = await loadLocale();
    // console.log(`Successfully loaded dictionary for locale: ${locale}`);
    return dict;
  } catch (error) {
    console.error(`Error loading dictionary for locale "${locale}":`, error);
    // Fallback to default locale if the requested one fails to load
    // console.log(`Falling back to default dictionary for locale: ${i18n.defaultLocale}`);
    const loadDefaultLocale = dictionaries[i18n.defaultLocale];
    try {
      const defaultDict = await loadDefaultLocale();
      // console.log(`Successfully loaded default dictionary for locale: ${i18n.defaultLocale}`);
      return defaultDict;
    } catch (defaultLoadError) {
      console.error(`Error loading default dictionary for locale "${i18n.defaultLocale}":`, defaultLoadError);
      // As a last resort, return a minimal dictionary or throw
      // For now, throwing an error might be better to signal a critical issue
      throw new Error(`Failed to load dictionary for locale "${locale}" and default locale "${i18n.defaultLocale}".`);
    }
  }
});

