import type { HomeDictionary } from '../types';

const home: HomeDictionary = {
  hero: {
    eyebrow: 'Sprint 15 · Plattform · Internationalisierung',
    title: 'Server-first-Internationalisierung für Project Atlas.',
    description: 'Lokalisierte Routen, SEO-Metadaten, typisierte Wörterbücher und RTL-fähige Hilfsfunktionen teilen jetzt eine produktionssichere Architektur.',
    primaryCta: 'Architektur prüfen',
    secondaryCta: 'Hilfsfunktionen erkunden'
  },
  highlights: {
    heading: 'Was diese Plattform liefert',
    detectionTitle: 'Zuverlässige Spracherkennung',
    detectionBody: 'Der Server ermittelt die Sprache vor dem Rendern anhand von URL, Cookie-Präferenz und Accept-Language-Headern.',
    seoTitle: 'Lokalisierte SEO-Ausgabe',
    seoBody: 'Kanonische URLs, hreflang-Alternativen, OpenGraph, Twitter und JSON-LD werden pro Sprache erzeugt.',
    rtlTitle: 'RTL-fähige Grundlagen',
    rtlBody: 'Richtungs-Helper und logisches CSS bereiten die Oberfläche auf zukünftige Rechts-nach-Links-Sprachen ohne Neuschreibung vor.'
  },
  metrics: {
    heading: 'Laufzeitübersicht',
    activeLocaleLabel: 'Aktive Sprache',
    namespacesLabel: 'Geladene Namespaces',
    directionLabel: 'Dokumentrichtung'
  },
  utilities: {
    heading: 'Lokalisierte Hilfsfunktionen',
    description: 'Formatierungs-Helper bleiben auf dem Server, damit nur die aktive Sprache geladen und hydratisiert wird.',
    dateLabel: 'Formatiertes Datum',
    numberLabel: 'Formatierte Zahl',
    currencyLabel: 'Formatierte Währung',
    relativeTimeLabel: 'Relative Zeit',
    pluralLabel: 'Pluralisierung',
    pluralOne: '{count} Wörterbuch geladen',
    pluralOther: '{count} Wörterbücher geladen'
  }
};

export default home;
