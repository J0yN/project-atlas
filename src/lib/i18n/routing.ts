import { i18nConfig } from '@/i18n/config';
import { isLocale, type AppLocale } from '@/i18n/locales';

const ABSOLUTE_URL_PATTERN = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;

function splitHref(href: string): { pathname: string; search: string; hash: string } {
  const [pathnameWithSearch = '', hash = ''] = href.split('#', 2);
  const [pathname = '', search = ''] = pathnameWithSearch.split('?', 2);

  return {
    pathname,
    search: search ? `?${search}` : '',
    hash: hash ? `#${hash}` : ''
  };
}

export function isExternalHref(href: string): boolean {
  return ABSOLUTE_URL_PATTERN.test(href) || href.startsWith('//');
}

export function getLocaleFromPathname(pathname: string): AppLocale | null {
  const [, firstSegment] = pathname.split('/');
  return firstSegment && isLocale(firstSegment) ? firstSegment : null;
}

export function stripLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);

  if (!locale) {
    return pathname.startsWith('/') ? pathname : `/${pathname}`;
  }

  const stripped = pathname.replace(new RegExp(`^/${locale}`), '');
  return stripped.length > 0 ? stripped : '/';
}

export function localizeHref(locale: AppLocale, href: string): string {
  if (!href || href.startsWith('#') || isExternalHref(href)) {
    return href;
  }

  const { pathname, search, hash } = splitHref(href);
  const normalizedPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const localizedPathname = stripLocaleFromPathname(normalizedPathname);

  if (localizedPathname === '/') {
    return `/${locale}${search}${hash}`;
  }

  return `/${locale}${localizedPathname}${search}${hash}`;
}

export function switchLocaleInPathname(pathname: string, locale: AppLocale): string {
  const { pathname: purePathname, search, hash } = splitHref(pathname);
  const normalizedPathname = purePathname.startsWith('/') ? purePathname : `/${purePathname}`;
  const strippedPathname = stripLocaleFromPathname(normalizedPathname);
  const nextPathname = strippedPathname === '/' ? `/${locale}` : `/${locale}${strippedPathname}`;

  return `${nextPathname}${search}${hash}`;
}

export function getLocaleCookieValue(locale: AppLocale): string {
  return `${i18nConfig.localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
