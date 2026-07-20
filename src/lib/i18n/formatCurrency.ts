import { localeDefinitions, type AppLocale } from '@/i18n/locales';

export function formatCurrency(
  locale: AppLocale,
  value: number,
  currency: string = localeDefinitions[locale].currency,
  options?: Omit<Intl.NumberFormatOptions, 'currency' | 'style'>
): string {
  return new Intl.NumberFormat(localeDefinitions[locale].languageTag, {
    style: 'currency',
    currency,
    ...options
  }).format(value);
}
