import clsx from 'clsx';
import Link from 'next/link';
import type { JSX } from 'react';
import {
  getLocaleLabel,
  getLocalizedPath,
  locales,
  type AppLocale
} from '@/i18n/config';
import styles from './LanguageSwitch.module.css';

export type LanguageSwitchProps = {
  readonly currentLocale: AppLocale;
  readonly label: string;
  readonly ariaLabel: string;
  readonly pathname?: `/${string}` | `#${string}` | '/';
  readonly className?: string;
};

export function LanguageSwitch({
  currentLocale,
  label,
  ariaLabel,
  pathname = '/',
  className
}: LanguageSwitchProps): JSX.Element {
  return (
    <nav className={clsx(styles.root, className)} aria-label={ariaLabel}>
      <span className={styles.label}>{label}</span>
      <ul className={styles.list}>
        {locales.map((locale) => {
          const isCurrent = locale === currentLocale;

          return (
            <li key={locale}>
              <Link
                href={getLocalizedPath(locale, pathname)}
                hrefLang={locale}
                lang={locale}
                aria-current={isCurrent ? 'page' : undefined}
                className={clsx(styles.option, isCurrent && styles.optionActive)}
              >
                {getLocaleLabel(locale)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
