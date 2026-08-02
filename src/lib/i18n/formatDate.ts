import { localeDefinitions, type AppLocale } from '@/i18n/locales';

export function formatDate(locale: AppLocale, value: Date | number | string, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(localeDefinitions[locale].languageTag, options).format(new Date(value));
}
