import { defineRouting } from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'fr', 'es', 'de', 'it', 'nl', 'pt', 'ja'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: true,
});