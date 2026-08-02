import type { CommonDictionary } from '../types';

const common: CommonDictionary = {
  languageSwitcher: {
    label: 'Sprache',
    hint: 'Wähle die Sprache für das gesamte Erlebnis aus.',
    options: {
      en: 'Englisch',
      es: 'Spanisch',
      fr: 'Französisch',
      de: 'Deutsch'
    }
  },
  navigation: {
    getStarted: 'Architektur ansehen',
    architecture: 'Architektur',
    utilities: 'Hilfsfunktionen'
  },
  locale: {
    current: 'Aktuelle Sprache',
    direction: 'Textrichtung'
  },
  seo: {
    siteTitle: 'Project Atlas',
    siteDescription: 'Produktionsreife Internationalisierungsarchitektur für eine skalierbare Next.js-App-Router-Anwendung.',
    siteName: 'Project Atlas'
  }
};

export default common;
