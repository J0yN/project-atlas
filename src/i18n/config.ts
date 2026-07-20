import { localeDefinitions, locales, type AppLocale } from './locales';

export const i18nConfig = {
  defaultLocale: 'en' as AppLocale,
  fallbackLocale: 'en' as AppLocale,
  localeCookieName: 'NEXT_LOCALE',
  localeHeaderName: 'x-atlas-locale',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://project-atlas.example',
  namespaces: ['common', 'home'] as const,
  localeDefinitions,
  locales
} as const;

export type DictionaryNamespace = (typeof i18nConfig.namespaces)[number];
