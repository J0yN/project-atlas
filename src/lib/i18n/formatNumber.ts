import { localeDefinitions, type AppLocale } from '@/i18n/locales';

export function formatNumber(locale: AppLocale, value: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(localeDefinitions[locale].languageTag, options).format(value);
}
