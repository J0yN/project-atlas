import type { HomeDictionary } from '../types';

const home: HomeDictionary = {
  hero: {
    eyebrow: 'Sprint 15 · Plataforma · Internacionalización',
    title: 'Internacionalización server-first para Project Atlas.',
    description: 'Rutas localizadas, metadatos SEO, diccionarios tipados y utilidades preparadas para RTL ahora comparten una arquitectura segura para producción.',
    primaryCta: 'Revisar arquitectura',
    secondaryCta: 'Explorar utilidades'
  },
  highlights: {
    heading: 'Qué ofrece esta plataforma',
    detectionTitle: 'Detección de idioma confiable',
    detectionBody: 'El servidor resuelve la configuración regional desde la URL, la preferencia en cookie y las cabeceras Accept-Language antes de renderizar.',
    seoTitle: 'SEO localizado',
    seoBody: 'Las URL canónicas, hreflang, OpenGraph, Twitter y JSON-LD se generan por idioma.',
    rtlTitle: 'Base preparada para RTL',
    rtlBody: 'Los helpers de dirección y el CSS lógico preparan la interfaz para futuros idiomas de derecha a izquierda sin reescrituras.'
  },
  metrics: {
    heading: 'Resumen de ejecución',
    activeLocaleLabel: 'Idioma activo',
    namespacesLabel: 'Namespaces cargados',
    directionLabel: 'Dirección del documento'
  },
  utilities: {
    heading: 'Salida localizada de utilidades',
    description: 'Los helpers de formato permanecen en el servidor para cargar e hidratar solo el idioma activo.',
    dateLabel: 'Fecha formateada',
    numberLabel: 'Número formateado',
    currencyLabel: 'Moneda formateada',
    relativeTimeLabel: 'Tiempo relativo',
    pluralLabel: 'Pluralización',
    pluralOne: '{count} diccionario cargado',
    pluralOther: '{count} diccionarios cargados'
  }
};

export default home;
