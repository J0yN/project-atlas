'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  reducedFadeIn,
} from '@/lib/motion/variants';
import type { Variants } from 'framer-motion';

export type RevealVariant =
  | 'fadeUp'
  | 'fade'
  | 'scale'
  | 'slideLeft'
  | 'slideRight';

export type RevealProps = {
  children: React.ReactNode;
  /** Animation variant to use. Defaults to 'fadeUp'. */
  variant?: RevealVariant;
  /** Additional delay in seconds before the animation starts. */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Whether to only animate once. Defaults to true. */
  once?: boolean;
  /**
   * How much of the element must be visible to trigger the animation.
   * Defaults to 0.15 (15 %).
   */
  amount?: number;
};

const VARIANT_MAP: Record<RevealVariant, Variants> = {
  fadeUp: fadeInUp,
  fade: fadeIn,
  scale: scaleIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
};

/**
 * Reveal
 *
 * A scroll-triggered reveal wrapper. Animates children into view using Framer
 * Motion's `useInView` hook. Respects `prefers-reduced-motion` by falling back
 * to a simple short fade.
 *
 * @example
 * <Reveal variant="fadeUp" delay={0.1}>
 *   <SomeComponent />
 * </Reveal>
 */
export function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className,
  style,
  once = true,
  amount = 0.15,
}: RevealProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const reduced = useReducedMotion();

  const selectedVariants = reduced ? reducedFadeIn : VARIANT_MAP[variant];

  return (
    <motion.div
      ref={ref}
      variants={selectedVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
