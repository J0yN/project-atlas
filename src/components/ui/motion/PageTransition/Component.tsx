'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { motion as motionTokens } from '@/design-system/tokens';

export type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * PageTransition
 *
 * Wraps page content with a smooth enter/exit animation keyed to the current
 * pathname. Place this around `{children}` in a layout or in a provider.
 *
 * Respects `prefers-reduced-motion` by removing spatial changes and shortening
 * the duration to near-zero.
 *
 * @example
 * // In a layout or Providers component:
 * <PageTransition>{children}</PageTransition>
 */
export function PageTransition({
  children,
  className,
}: PageTransitionProps): React.JSX.Element {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  const duration = reduced ? 0.01 : motionTokens.page.enter / 1000;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: reduced ? 0 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduced ? 0 : -8 }}
        transition={{ duration, ease: [0.2, 0.9, 0.2, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
