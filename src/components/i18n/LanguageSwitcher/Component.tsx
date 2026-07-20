'use client';

import { useId, useTransition } from 'react';
import type { ComponentPropsWithoutRef, ChangeEvent } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { localeDefinitions, locales, type AppLocale } from '@/i18n/locales';
import { switchLocaleInPathname } from '@/lib/i18n/routing';
import { useLocale } from '../LocaleProvider';
import styles from './Component.module.css';

export type LanguageSwitcherProps = ComponentPropsWithoutRef<'div'>;

export function LanguageSwitcher({ className, ...rest }: LanguageSwitcherProps) {
  const id = useId();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const { locale, t } = useLocale();

  function onLocaleChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as AppLocale;
    const queryString = searchParams.toString();
    const nextPathname = switchLocaleInPathname(
      queryString ? `${pathname}?${queryString}` : pathname,
      nextLocale
    );

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;

    startTransition(() => {
      router.replace(nextPathname);
    });
  }

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <label className={styles.label} htmlFor={id}>
        {t('common.languageSwitcher.label')}
      </label>
      <div className={styles.field}>
        <select
          id={id}
          className={styles.select}
          value={locale}
          onChange={onLocaleChange}
          disabled={isPending}
          aria-describedby={`${id}-hint`}
        >
          {locales.map((supportedLocale) => (
            <option key={supportedLocale} value={supportedLocale}>
              {localeDefinitions[supportedLocale].nativeLabel}
            </option>
          ))}
        </select>
        <span className={styles.icon} aria-hidden>
          ▾
        </span>
      </div>
      <p id={`${id}-hint`} className={styles.hint}>
        {t('common.languageSwitcher.hint')}
      </p>
    </div>
  );
}
