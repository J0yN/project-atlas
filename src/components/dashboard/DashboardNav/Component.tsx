'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import type { NavItem } from '@/types/dashboard';
import styles from './DashboardNav.module.css';

export type DashboardNavProps = {
  items: readonly NavItem[];
  locale: string;
  className?: string;
};

function buildHref(locale: string, href: string): string {
  return `/${locale}${href}`;
}

function isActive(pathname: string, locale: string, href: string): boolean {
  const localized = buildHref(locale, href);
  if (href === '/dashboard') {
    return pathname === localized;
  }
  return pathname.startsWith(localized);
}

export const DashboardNav: React.FC<DashboardNavProps> = ({ items, locale, className }) => {
  const pathname = usePathname();

  return (
    <nav className={clsx(styles.nav, className)} aria-label="Dashboard navigation">
      <ul className={styles.list} role="list">
        {items.map((item) => {
          const active = isActive(pathname, locale, item.href);
          return (
            <li key={item.id}>
              <Link
                href={buildHref(locale, item.href)}
                className={clsx(styles.link, { [styles.active]: active })}
                aria-current={active ? 'page' : undefined}
              >
                <span className={styles.iconSlot} aria-hidden>
                  <NavIcon name={item.icon} />
                </span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

type NavIconProps = { name: string };

function NavIcon({ name }: NavIconProps) {
  switch (name) {
    case 'grid':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
          <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
          <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
          <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
        </svg>
      );
    case 'folder':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M1.5 4C1.5 3.17 2.17 2.5 3 2.5H6.17c.33 0 .65.13.88.37L8.12 4H13c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H3c-.83 0-1.5-.67-1.5-1.5V4z"
            stroke="currentColor"
            strokeWidth="1.25"
            fill="none"
          />
        </svg>
      );
    case 'file-text':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M9.5 1.5H4A1.5 1.5 0 0 0 2.5 3v10A1.5 1.5 0 0 0 4 14.5h8A1.5 1.5 0 0 0 13.5 13V5.5l-4-4z"
            stroke="currentColor"
            strokeWidth="1.25"
            fill="none"
          />
          <path d="M9.5 1.5V5.5H13.5" stroke="currentColor" strokeWidth="1.25" />
          <path d="M5.5 8.5h5M5.5 11h3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      );
    case 'bar-chart-2':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <rect x="2" y="9" width="3" height="5" rx="0.75" fill="currentColor" />
          <rect x="6.5" y="5" width="3" height="9" rx="0.75" fill="currentColor" />
          <rect x="11" y="2" width="3" height="12" rx="0.75" fill="currentColor" />
        </svg>
      );
    case 'settings':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.25" fill="none" />
          <path
            d="M8 1.5a.75.75 0 0 1 .75.75v1.1a5.25 5.25 0 0 1 1.68.7l.77-.78a.75.75 0 1 1 1.06 1.06l-.77.77c.3.52.52 1.1.7 1.68h1.1a.75.75 0 0 1 0 1.5h-1.1a5.25 5.25 0 0 1-.7 1.68l.78.77a.75.75 0 1 1-1.06 1.06l-.77-.77a5.25 5.25 0 0 1-1.68.7v1.1a.75.75 0 0 1-1.5 0v-1.1a5.25 5.25 0 0 1-1.68-.7l-.77.78a.75.75 0 0 1-1.06-1.06l.77-.77A5.25 5.25 0 0 1 3.8 9.34H2.7a.75.75 0 0 1 0-1.5h1.1c.18-.58.4-1.16.7-1.68l-.78-.77a.75.75 0 0 1 1.06-1.06l.77.78A5.25 5.25 0 0 1 7.25 3.34V2.25A.75.75 0 0 1 8 1.5z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default DashboardNav;
