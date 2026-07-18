import { notFound } from 'next/navigation';
import { isLocale, type AppLocale } from '@/i18n/config';

export type LocaleParams = Promise<{ locale: string }> | { locale: string };

export async function getRouteLocale(params: LocaleParams): Promise<AppLocale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}
