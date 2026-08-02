import { localeDefinitions, type AppLocale } from '@/i18n/locales';

export function formatRelativeTime(
  locale: AppLocale,
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  options?: Intl.RelativeTimeFormatOptions
): string {
  return new Intl.RelativeTimeFormat(localeDefinitions[locale].languageTag, options).format(value, unit);
}
