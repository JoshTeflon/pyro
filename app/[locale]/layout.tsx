import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/next';

import { routing } from '@/i18n/routing';

import { GeistMono } from 'geist/font/mono';

import './globals.css';

export const metadata: Metadata = {
  title: 'ii6 pyro',
  description: 'Official website of ii6 pyro',
  keywords: ['ii6 pyro', 'ii6', 'pyro', 'music', 'artist', 'official', 'website', 'afrobeats', 'R&B/Soul', 'alternative', 'nigeria', 'next.js', 'react', 'typescript', 'tailwindcss'],
  applicationName: 'ii6 pyro official website',
  creator: 'JoshTeflon and ii6 pyro',
  authors: [
    { name: 'JoshTeflon', url: 'https://joshteflon.xyz' },
    { name: 'ii6 pyro', url: 'https://ii6pyro.africa' },
  ],
  category: 'Music',
  other: {
    'google': 'notranslate',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({ children, params }: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    redirect(`/${routing.defaultLocale}`);
  };

  setRequestLocale(locale);

  return (
    <html lang={locale} translate='no'>
      <body className={`${GeistMono.className} ${GeistMono.variable}`}>
        <NextIntlClientProvider locale={locale} >
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}