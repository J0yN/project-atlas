import 'server-only';

import { cookies, headers } from 'next/headers';
import { i18nConfig } from '@/i18n/config';
import { isLocale, type AppLocale } from '@/i18n/locales';
import { getLocaleFromPathname } from './routing';

export type LocaleDetectionInput = {
  pathname?: string;
  cookieLocale?: string | null;
  acceptLanguage?: string | null;
  fallbackLocale?: AppLocale;
};

function parseAcceptLanguage(headerValue: string): string[] {
  return headerValue
    .split(',')
    .map((part) => {
      const [tag, quality = 'q=1'] = part.trim().split(';');
      const numericQuality = Number(quality.replace('q=', ''));
      return {
        tag: tag.toLowerCase(),
        quality: Number.isNaN(numericQuality) ? 0 : numericQuality
      };
    })
    .sort((left, right) => right.quality - left.quality)
    .map((item) => item.tag);
}

function matchPreferredLocale(candidates: readonly string[]): AppLocale | null {
  for (const candidate of candidates) {
    if (isLocale(candidate)) {
      return candidate;
    }

    const baseLanguage = candidate.split('-')[0] ?? '';
    if (isLocale(baseLanguage)) {
      return baseLanguage;
    }
  }

  return null;
}

export function detectLocaleFromRequest({
  pathname,
  cookieLocale,
  acceptLanguage,
  fallbackLocale = i18nConfig.fallbackLocale
}: LocaleDetectionInput): AppLocale {
  const pathLocale = pathname ? getLocaleFromPathname(pathname) : null;
  if (pathLocale) {
    return pathLocale;
  }

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  if (acceptLanguage) {
    const matchedLocale = matchPreferredLocale(parseAcceptLanguage(acceptLanguage));
    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return fallbackLocale;
}

export async function detectLocale(): Promise<AppLocale> {
  const cookieStore = await cookies();
  const headerStore = await headers();

  return detectLocaleFromRequest({
    cookieLocale: cookieStore.get(i18nConfig.localeCookieName)?.value,
    acceptLanguage: headerStore.get('accept-language'),
    fallbackLocale: i18nConfig.fallbackLocale
  });
}
