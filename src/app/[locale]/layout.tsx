import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { getSearchIndex } from '@/data/searchIndex';
import { getWorkspaceContent } from '@/data/workspace';
import {
  getLocaleDirection,
  getLocalizedPath,
  locales
} from '@/i18n/config';
import { getUiMessages } from '@/i18n/messages';
import { getRouteLocale, type LocaleParams } from '@/i18n/server';
import Providers from '@/providers/providers';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

type LocaleLayoutProps = {
  children: ReactNode;
  params: LocaleParams;
};

export function generateStaticParams(): Array<{ locale: string }> {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const locale = await getRouteLocale(params);
  const content = getWorkspaceContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: getLocalizedPath(locale),
      languages: Object.fromEntries(
        locales.map((entry) => [entry, getLocalizedPath(entry)])
      )
    },
    openGraph: {
      title: content.metadata.title,
      description: content.metadata.description,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locales
        .filter((entry) => entry !== locale)
        .map((entry) => (entry === 'ar' ? 'ar_SA' : 'en_US'))
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const locale = await getRouteLocale(params);
  const direction = getLocaleDirection(locale);
  const ui = getUiMessages(locale);

  return (
    <html lang={locale} dir={direction}>
      <body suppressHydrationWarning>
        <Providers
          searchIndex={getSearchIndex(locale)}
          commandPalette={ui.commandPalette}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
