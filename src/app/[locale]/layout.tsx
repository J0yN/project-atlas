import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '@/components/i18n';
import { loadDictionary } from '@/i18n/loader';
import { isLocale, locales } from '@/i18n/locales';
import Providers from '@/providers/providers';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = await loadDictionary(locale, ['common']);

  return (
    <Providers>
      <LocaleProvider locale={locale} messages={messages}>
        {children}
      </LocaleProvider>
    </Providers>
  );
}
