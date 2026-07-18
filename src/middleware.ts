import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  defaultLocale,
  detectLocale,
  getLocalizedPath,
  isLocale,
  localeCookieName
} from '@/i18n/config';

const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function persistLocale(response: NextResponse, locale: string): NextResponse {
  response.cookies.set({
    name: localeCookieName,
    value: locale,
    maxAge: LOCALE_COOKIE_MAX_AGE,
    path: '/',
    sameSite: 'lax'
  });

  return response;
}

export function middleware(request: NextRequest): NextResponse {
  const { pathname, search } = request.nextUrl;
  const pathnameSegments = pathname.split('/');
  const pathnameLocale = pathnameSegments[1];

  if (pathnameLocale && isLocale(pathnameLocale)) {
    return persistLocale(NextResponse.next(), pathnameLocale);
  }

  const preferredLocale = detectLocale(
    request.cookies.get(localeCookieName)?.value,
    request.headers.get('accept-language')
  );
  const redirectUrl = request.nextUrl.clone();
  const targetPath =
    pathname === '/'
      ? getLocalizedPath(preferredLocale)
      : getLocalizedPath(
          preferredLocale,
          pathname as `/${string}` | '/'
        );

  redirectUrl.pathname = targetPath;
  redirectUrl.search = search;

  return persistLocale(NextResponse.redirect(redirectUrl), preferredLocale);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
