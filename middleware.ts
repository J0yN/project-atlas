import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18nConfig } from '@/i18n/config';
import { detectLocaleFromRequest, localizeHref } from '@/lib/i18n';
import { getLocaleFromPathname } from '@/lib/i18n/routing';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameLocale = getLocaleFromPathname(pathname);

  if (!pathnameLocale) {
    const locale = detectLocaleFromRequest({
      pathname,
      cookieLocale: request.cookies.get(i18nConfig.localeCookieName)?.value,
      acceptLanguage: request.headers.get('accept-language'),
      fallbackLocale: i18nConfig.fallbackLocale
    });
    const redirectUrl = new URL(localizeHref(locale, `${pathname}${request.nextUrl.search}`), request.url);
    return NextResponse.redirect(redirectUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(i18nConfig.localeHeaderName, pathnameLocale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  response.cookies.set(i18nConfig.localeCookieName, pathnameLocale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)']
};
