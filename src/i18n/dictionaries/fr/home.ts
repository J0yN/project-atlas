import type { HomeDictionary } from '../types';

const home: HomeDictionary = {
  hero: {
    eyebrow: 'Sprint 15 · Plateforme · Internationalisation',
    title: 'Une internationalisation server-first pour Project Atlas.',
    description: 'Le routage localisé, les métadonnées SEO, les dictionnaires typés et les utilitaires prêts pour le RTL reposent désormais sur une architecture sûre pour la production.',
    primaryCta: 'Voir l’architecture',
    secondaryCta: 'Explorer les utilitaires'
  },
  highlights: {
    heading: 'Ce que livre cette plateforme',
    detectionTitle: 'Détection de langue fiable',
    detectionBody: 'Le serveur résout la langue à partir de l’URL, du cookie de préférence et des en-têtes Accept-Language avant le rendu.',
    seoTitle: 'SEO localisé',
    seoBody: 'Les URL canoniques, hreflang, OpenGraph, Twitter et JSON-LD sont générés pour chaque langue.',
    rtlTitle: 'Fondations prêtes pour le RTL',
    rtlBody: 'Les helpers de direction et le CSS logique préparent l’interface aux futures langues de droite à gauche sans refonte.'
  },
  metrics: {
    heading: 'Vue d’ensemble du runtime',
    activeLocaleLabel: 'Langue active',
    namespacesLabel: 'Espaces de noms chargés',
    directionLabel: 'Direction du document'
  },
  utilities: {
    heading: 'Sortie localisée des utilitaires',
    description: 'Les helpers de formatage restent côté serveur afin de ne charger et hydrater que la langue active.',
    dateLabel: 'Date formatée',
    numberLabel: 'Nombre formaté',
    currencyLabel: 'Devise formatée',
    relativeTimeLabel: 'Temps relatif',
    pluralLabel: 'Pluralisation',
    pluralOne: '{count} dictionnaire chargé',
    pluralOther: '{count} dictionnaires chargés'
  }
};

export default home;
