import type { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import type { AppLocale } from '@/i18n/locales';
import { localizeHref } from '@/lib/i18n/routing';
import styles from './Component.module.css';

export type LocaleLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  locale: AppLocale;
};

export function LocaleLink({ href, locale, className, children, ...rest }: LocaleLinkProps) {
  return (
    <Link className={clsx(styles.link, className)} href={localizeHref(locale, href)} {...rest}>
      {children}
    </Link>
  );
}
