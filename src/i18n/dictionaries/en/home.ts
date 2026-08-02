import type { HomeDictionary } from '../types';

const home: HomeDictionary = {
  hero: {
    eyebrow: 'Sprint 15 · Platform · Internationalization',
    title: 'Server-first internationalization for Project Atlas.',
    description: 'Localized routing, SEO metadata, typed dictionaries, and RTL-ready utilities now share one production-safe architecture.',
    primaryCta: 'Review architecture',
    secondaryCta: 'Explore utilities'
  },
  highlights: {
    heading: 'What this platform delivers',
    detectionTitle: 'Reliable locale detection',
    detectionBody: 'The server resolves locale from the URL, cookie preference, and Accept-Language headers before rendering.',
    seoTitle: 'Localized SEO output',
    seoBody: 'Canonical URLs, hreflang alternates, OpenGraph metadata, Twitter metadata, and JSON-LD are generated per locale.',
    rtlTitle: 'RTL-ready foundations',
    rtlBody: 'Direction helpers and logical CSS keep the interface prepared for future right-to-left languages without rewrites.'
  },
  metrics: {
    heading: 'Runtime overview',
    activeLocaleLabel: 'Active locale',
    namespacesLabel: 'Loaded namespaces',
    directionLabel: 'Document direction'
  },
  utilities: {
    heading: 'Localized utility output',
    description: 'Formatting helpers stay on the server so only the active locale is loaded and hydrated.',
    dateLabel: 'Formatted date',
    numberLabel: 'Formatted number',
    currencyLabel: 'Formatted currency',
    relativeTimeLabel: 'Relative time',
    pluralLabel: 'Pluralization',
    pluralOne: '{count} dictionary loaded',
    pluralOther: '{count} dictionaries loaded'
  }
};

export default home;
