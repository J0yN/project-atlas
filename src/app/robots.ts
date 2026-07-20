import type { MetadataRoute } from 'next';
import { i18nConfig } from '@/i18n/config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = new URL(i18nConfig.baseUrl);

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/']
    },
    sitemap: new URL('/sitemap.xml', baseUrl).toString(),
    host: baseUrl.toString()
  };
}
