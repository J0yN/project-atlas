import { cache } from 'react';
import { i18nConfig, type DictionaryNamespace } from './config';
import type { AppLocale } from './locales';
import type { DictionarySchema, LoadedDictionary } from './dictionaries/types';

const dictionaryLoaders: {
  [Locale in AppLocale]: {
    [Namespace in DictionaryNamespace]: () => Promise<{ default: DictionarySchema[Namespace] }>;
  };
} = {
  en: {
    common: () => import('./dictionaries/en/common'),
    home: () => import('./dictionaries/en/home')
  },
  es: {
    common: () => import('./dictionaries/es/common'),
    home: () => import('./dictionaries/es/home')
  },
  fr: {
    common: () => import('./dictionaries/fr/common'),
    home: () => import('./dictionaries/fr/home')
  },
  de: {
    common: () => import('./dictionaries/de/common'),
    home: () => import('./dictionaries/de/home')
  }
};

function normalizeNamespaces(namespaces: readonly DictionaryNamespace[]): readonly DictionaryNamespace[] {
  return [...new Set(namespaces)].sort() as DictionaryNamespace[];
}

function parseNamespaces(namespacesKey: string): DictionaryNamespace[] {
  return namespacesKey.split(',').filter((namespace): namespace is DictionaryNamespace =>
    i18nConfig.namespaces.includes(namespace as DictionaryNamespace)
  );
}

const loadCachedDictionary = cache(async (locale: AppLocale, namespacesKey: string): Promise<LoadedDictionary> => {
  const namespaces = parseNamespaces(namespacesKey);
  const entries = await Promise.all(
    namespaces.map(async (namespace) => [namespace, (await dictionaryLoaders[locale][namespace]()).default] as const)
  );

  return entries.reduce<LoadedDictionary>((accumulator, [namespace, dictionary]) => {
    accumulator[namespace] = dictionary;
    return accumulator;
  }, {});
});

export async function loadDictionary(
  locale: AppLocale,
  namespaces: readonly DictionaryNamespace[] = i18nConfig.namespaces
): Promise<LoadedDictionary> {
  const normalizedNamespaces = normalizeNamespaces(namespaces);
  return loadCachedDictionary(locale, normalizedNamespaces.join(','));
}
