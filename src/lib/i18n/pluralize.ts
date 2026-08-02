import { localeDefinitions, type AppLocale } from '@/i18n/locales';
import type { TranslationValues } from '@/i18n/dictionaries/types';

type PluralForms = {
  zero?: string;
  one?: string;
  two?: string;
  few?: string;
  many?: string;
  other: string;
};

function interpolate(template: string, values: TranslationValues): string {
  return template.replace(/\{(\w+)\}/g, (_, token: string) => String(values[token] ?? `{${token}}`));
}

export function pluralize(locale: AppLocale, count: number, forms: PluralForms): string {
  const rule = new Intl.PluralRules(localeDefinitions[locale].languageTag).select(count);
  const template = forms[rule] ?? forms.other;
  return interpolate(template, { count });
}
