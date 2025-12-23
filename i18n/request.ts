import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
 
export default getRequestConfig(async (requestLocale) => {
  const store = await cookies();
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : store.get('NEXT_LOCALE')?.value ?? routing.defaultLocale;
 
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});