'use client';

import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { i18nConfig } from '@/i18n/config';
import type { TranslationKey, TranslationValues, LoadedDictionary } from '@/i18n/dictionaries/types';
import type { AppLocale, LocaleDirection } from '@/i18n/locales';
import { getLocaleDirection } from '@/lib/i18n/rtl';

type LocaleContextValue = {
  locale: AppLocale;
  direction: LocaleDirection;
  messages: LoadedDictionary;
  t: (key: TranslationKey, values?: TranslationValues) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  locale: AppLocale;
  messages: LoadedDictionary;
};

function interpolate(template: string, values?: TranslationValues): string {
  if (!values) {
    return template;
  }

  return template.replace(/\{(\w+)\}/g, (_, token: string) => String(values[token] ?? `{${token}}`));
}

function getTranslationValue(messages: LoadedDictionary, key: TranslationKey): string | null {
  const segments = key.split('.');
  let current: unknown = messages;

  for (const segment of segments) {
    if (!current || typeof current !== 'object' || !(segment in current)) {
      return null;
    }

    current = (current as Record<string, unknown>)[segment];
  }

  return typeof current === 'string' ? current : null;
}

export function LocaleProvider({ children, locale, messages }: LocaleProviderProps) {
  const direction = getLocaleDirection(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    document.cookie = `${i18nConfig.localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [direction, locale]);

  const t = useCallback(
    (key: TranslationKey, values?: TranslationValues) => {
      const translation = getTranslationValue(messages, key);
      return translation ? interpolate(translation, values) : key;
    },
    [messages]
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      direction,
      messages,
      t
    }),
    [direction, locale, messages, t]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider.');
  }

  return context;
}
