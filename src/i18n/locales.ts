export const locales = ['en', 'es', 'fr', 'de'] as const;

export type AppLocale = (typeof locales)[number];
export type LocaleDirection = 'ltr' | 'rtl';

export type LocaleDefinition = {
  code: AppLocale;
  label: string;
  nativeLabel: string;
  languageTag: string;
  ogLocale: string;
  direction: LocaleDirection;
  currency: string;
};

export const localeDefinitions: Record<AppLocale, LocaleDefinition> = {
  en: {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    languageTag: 'en-US',
    ogLocale: 'en_US',
    direction: 'ltr',
    currency: 'USD'
  },
  es: {
    code: 'es',
    label: 'Spanish',
    nativeLabel: 'Español',
    languageTag: 'es-ES',
    ogLocale: 'es_ES',
    direction: 'ltr',
    currency: 'EUR'
  },
  fr: {
    code: 'fr',
    label: 'French',
    nativeLabel: 'Français',
    languageTag: 'fr-FR',
    ogLocale: 'fr_FR',
    direction: 'ltr',
    currency: 'EUR'
  },
  de: {
    code: 'de',
    label: 'German',
    nativeLabel: 'Deutsch',
    languageTag: 'de-DE',
    ogLocale: 'de_DE',
    direction: 'ltr',
    currency: 'EUR'
  }
};

export function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}
