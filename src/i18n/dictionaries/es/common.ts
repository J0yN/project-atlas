import type { CommonDictionary } from '../types';

const common: CommonDictionary = {
  languageSwitcher: {
    label: 'Idioma',
    hint: 'Elige el idioma utilizado en toda la experiencia.',
    options: {
      en: 'Inglés',
      es: 'Español',
      fr: 'Francés',
      de: 'Alemán'
    }
  },
  navigation: {
    getStarted: 'Ver arquitectura',
    architecture: 'Arquitectura',
    utilities: 'Utilidades'
  },
  locale: {
    current: 'Configuración regional actual',
    direction: 'Dirección del texto'
  },
  seo: {
    siteTitle: 'Project Atlas',
    siteDescription: 'Arquitectura de internacionalización lista para producción para una aplicación escalable con Next.js App Router.',
    siteName: 'Project Atlas'
  }
};

export default common;
