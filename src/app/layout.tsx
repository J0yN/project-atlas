import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { i18nConfig } from '@/i18n/config';
import { isLocale } from '@/i18n/locales';
import { getLocaleDirection } from '@/lib/i18n/rtl';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(i18nConfig.baseUrl),
  title: {
    default: 'Project Atlas',
    template: '%s | Project Atlas'
  },
  description: 'Project Atlas platform foundation with production-ready internationalization support.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerStore = await headers();
  const localeHeader = headerStore.get(i18nConfig.localeHeaderName);
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : i18nConfig.defaultLocale;

  return (
    <html lang={locale} dir={getLocaleDirection(locale)} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
