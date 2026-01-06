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
    <html lang={locale}>
      <body
        className={`${GeistMono.className} ${GeistMono.variable}`}
      >
        <NextIntlClientProvider locale={locale}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}