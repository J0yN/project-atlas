import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/locales';
import { getLocalizedUrl } from '@/lib/i18n/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: getLocalizedUrl(locale, '/'),
    lastModified,
    alternates: {
      languages: Object.fromEntries(locales.map((supportedLocale) => [supportedLocale, getLocalizedUrl(supportedLocale, '/')])),
    }
  }));
}
