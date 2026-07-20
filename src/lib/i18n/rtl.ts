import { localeDefinitions, type AppLocale, type LocaleDirection } from '@/i18n/locales';

const rtlLanguageCodes = new Set(['ar', 'fa', 'he', 'ur']);

export function isRtlLocale(locale: AppLocale | string): boolean {
  if (typeof locale === 'string' && locale in localeDefinitions) {
    return localeDefinitions[locale as AppLocale].direction === 'rtl';
  }

  const baseLanguage = locale.split('-')[0]?.toLowerCase() ?? '';
  return rtlLanguageCodes.has(baseLanguage);
}

export function getLocaleDirection(locale: AppLocale | string): LocaleDirection {
  return isRtlLocale(locale) ? 'rtl' : 'ltr';
}
