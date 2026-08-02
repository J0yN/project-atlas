import type { CommonDictionary } from '../types';

const common: CommonDictionary = {
  languageSwitcher: {
    label: 'Langue',
    hint: 'Choisissez la langue utilisée dans toute l’expérience.',
    options: {
      en: 'Anglais',
      es: 'Espagnol',
      fr: 'Français',
      de: 'Allemand'
    }
  },
  navigation: {
    getStarted: 'Voir l’architecture',
    architecture: 'Architecture',
    utilities: 'Utilitaires'
  },
  locale: {
    current: 'Langue active',
    direction: 'Direction du texte'
  },
  seo: {
    siteTitle: 'Project Atlas',
    siteDescription: 'Architecture d’internationalisation prête pour la production pour une application Next.js App Router évolutive.',
    siteName: 'Project Atlas'
  }
};

export default common;
