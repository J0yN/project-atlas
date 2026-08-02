import type { AppLocale } from '../locales';

export type CommonDictionary = {
  languageSwitcher: {
    label: string;
    hint: string;
    options: Record<AppLocale, string>;
  };
  navigation: {
    getStarted: string;
    architecture: string;
    utilities: string;
  };
  locale: {
    current: string;
    direction: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    siteName: string;
  };
};

export type HomeDictionary = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  highlights: {
    heading: string;
    detectionTitle: string;
    detectionBody: string;
    seoTitle: string;
    seoBody: string;
    rtlTitle: string;
    rtlBody: string;
  };
  metrics: {
    heading: string;
    activeLocaleLabel: string;
    namespacesLabel: string;
    directionLabel: string;
  };
  utilities: {
    heading: string;
    description: string;
    dateLabel: string;
    numberLabel: string;
    currencyLabel: string;
    relativeTimeLabel: string;
    pluralLabel: string;
    pluralOne: string;
    pluralOther: string;
  };
};

export type DictionarySchema = {
  common: CommonDictionary;
  home: HomeDictionary;
};

type Join<Key extends string, Suffix extends string> = `${Key}.${Suffix}`;

export type NestedKeyOf<T> = {
  [Key in keyof T & string]: T[Key] extends string
    ? Key
    : T[Key] extends Record<string, unknown>
      ? Join<Key, NestedKeyOf<T[Key]>>
      : never;
}[keyof T & string];

export type TranslationKey = {
  [Namespace in keyof DictionarySchema & string]: Join<Namespace, NestedKeyOf<DictionarySchema[Namespace]>>;
}[keyof DictionarySchema & string];

export type TranslationValues = Record<string, number | string>;
export type LoadedDictionary = Partial<DictionarySchema>;
