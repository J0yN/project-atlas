'use client';
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './MobileNavigation.module.css';
import ButtonAdapter from '@/components/ui/ButtonAdapter';
import { Container } from '@/components/ui';

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type MobileNavigationProps = React.ComponentPropsWithoutRef<'div'> & {
  items?: readonly NavItem[];
  open?: boolean;
  onClose?: () => void;
};

export const MobileNavigation = React.forwardRef<HTMLDivElement, MobileNavigationProps>(
  ({ items = [], open = false, onClose, className, ...rest }, ref) => {
    const panelRef = useRef<HTMLDivElement | null>(null);
    const lastActiveRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (open) {
        lastActiveRef.current = document.activeElement as HTMLElement | null;
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        setTimeout(() => {
          panelRef.current?.querySelector<HTMLElement>('a,button,input,select,textarea')?.focus();
        }, 0);
        return () => {
          document.documentElement.style.overflow = prev || '';
          lastActiveRef.current?.focus();
        };
      }
      return undefined;
    }, [open]);

    useEffect(() => {
      function onKey(e: KeyboardEvent) {
        if (e.key === 'Escape' && open) {
          e.preventDefault();
          onClose?.();
        }
      }
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
      <div
        ref={ref}
        className={clsx(styles.overlay, className)}
        role="dialog"
        aria-modal="true"
        {...rest}
      >
        <Container>
          <div className={clsx(styles.panel)} ref={panelRef}>
            <div className={styles.header}>
              <ButtonAdapter as="button" onClick={() => onClose?.()} aria-label="Close navigation">
                Close
              </ButtonAdapter>
            </div>
            <nav className={styles.nav} aria-label="Mobile Navigation">
              <ul>
                {items.map((i) => (
                  <li key={i.id}>
                    <a href={i.href} className={styles.link}>
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    );
  }
);

MobileNavigation.displayName = 'MobileNavigation';
export default MobileNavigation;
