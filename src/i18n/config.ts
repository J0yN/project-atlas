export const locales = ['en', 'ar'] as const;

export type AppLocale = (typeof locales)[number];

export type LocaleDirection = 'ltr' | 'rtl';

export const defaultLocale: AppLocale = 'en';
export const localeCookieName = 'atlas-locale';

const localeLabels: Record<AppLocale, string> = {
  en: 'English',
  ar: 'العربية'
};

export function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export function getLocaleDirection(locale: AppLocale): LocaleDirection {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function getLocaleLabel(locale: AppLocale): string {
  return localeLabels[locale];
}

export function getLocalizedPath(
  locale: AppLocale,
  pathname: `/${string}` | `#${string}` | '/' = '/'
): string {
  if (pathname === '/') {
    return `/${locale}`;
  }

  if (pathname.startsWith('#')) {
    return `/${locale}${pathname}`;
  }

  return `/${locale}${pathname}`;
}

export function detectLocale(
  cookieLocale: string | undefined,
  acceptLanguageHeader: string | null
): AppLocale {
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  if (!acceptLanguageHeader) {
    return defaultLocale;
  }

  const languagePreferences = acceptLanguageHeader
    .split(',')
    .map((entry) => {
      const [tagPart, qualityPart] = entry.trim().split(';q=');
      const normalizedTag = tagPart.toLowerCase().split('-')[0] ?? '';
      const quality = qualityPart ? Number(qualityPart) : 1;

      return {
        tag: normalizedTag,
        quality: Number.isFinite(quality) ? quality : 0
      };
    })
    .sort((left, right) => right.quality - left.quality);

  for (const language of languagePreferences) {
    if (isLocale(language.tag)) {
      return language.tag;
    }
  }

  return defaultLocale;
}
