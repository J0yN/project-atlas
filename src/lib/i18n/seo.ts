import type { Metadata } from 'next';
import { i18nConfig } from '@/i18n/config';
import { localeDefinitions, locales, type AppLocale } from '@/i18n/locales';
import { localizeHref } from './routing';

function getSiteOrigin(): string {
  return i18nConfig.baseUrl.endsWith('/') ? i18nConfig.baseUrl.slice(0, -1) : i18nConfig.baseUrl;
}

export function getLocalizedUrl(locale: AppLocale, pathname: string = '/'): string {
  return new URL(localizeHref(locale, pathname), `${getSiteOrigin()}/`).toString();
}

export function buildLocalizedMetadata({
  locale,
  title,
  description,
  pathname = '/'
}: {
  locale: AppLocale;
  title: string;
  description: string;
  pathname?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: getLocalizedUrl(locale, pathname),
      languages: {
        'x-default': getLocalizedUrl(i18nConfig.defaultLocale, pathname),
        ...Object.fromEntries(
          locales.map((supportedLocale) => [
            localeDefinitions[supportedLocale].languageTag,
            getLocalizedUrl(supportedLocale, pathname)
          ])
        )
      }
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: getLocalizedUrl(locale, pathname),
      siteName: localeDefinitions[locale].nativeLabel,
      locale: localeDefinitions[locale].ogLocale,
      alternateLocale: locales
        .filter((supportedLocale) => supportedLocale !== locale)
        .map((supportedLocale) => localeDefinitions[supportedLocale].ogLocale)
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export function buildLocalizedJsonLd({
  locale,
  title,
  description,
  pathname = '/'
}: {
  locale: AppLocale;
  title: string;
  description: string;
  pathname?: string;
}): Record<string, string> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    inLanguage: localeDefinitions[locale].languageTag,
    name: title,
    description,
    url: getLocalizedUrl(locale, pathname)
  };
}
