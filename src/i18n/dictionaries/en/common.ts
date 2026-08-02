import type { CommonDictionary } from '../types';

const common: CommonDictionary = {
  languageSwitcher: {
    label: 'Language',
    hint: 'Choose the language used across the experience.',
    options: {
      en: 'English',
      es: 'Spanish',
      fr: 'French',
      de: 'German'
    }
  },
  navigation: {
    getStarted: 'View architecture',
    architecture: 'Architecture',
    utilities: 'Utilities'
  },
  locale: {
    current: 'Current locale',
    direction: 'Text direction'
  },
  seo: {
    siteTitle: 'Project Atlas',
    siteDescription: 'Production-ready internationalization architecture for a scalable Next.js App Router application.',
    siteName: 'Project Atlas'
  }
};

export default common;
