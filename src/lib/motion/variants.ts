/**
 * Motion System – shared Framer Motion animation variants.
 *
 * All durations and easings are derived from design-system motion tokens to
 * keep the motion vocabulary consistent across the application.
 *
 * Import these variants in Client Components instead of writing inline
 * animation objects.
 */
import type { Variants, Transition } from 'framer-motion';
import { motion as motionTokens } from '@/design-system/tokens';

const STANDARD_EASE: [number, number, number, number] = [0.2, 0.9, 0.2, 1];
const FAST_EASE: [number, number, number, number] = [0.2, 0.9, 0.2, 1];

export const standardTransition: Transition = {
  duration: motionTokens.durations.normal / 1000,
  ease: STANDARD_EASE,
};

export const fastTransition: Transition = {
  duration: motionTokens.durations.fast / 1000,
  ease: FAST_EASE,
};

/** Fade in from slightly below – default scroll reveal. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: standardTransition },
};

/** Plain opacity fade. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: standardTransition },
};

/** Scale up from 95 %. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: standardTransition },
};

/** Slide in from the left. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: standardTransition },
};

/** Slide in from the right. */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: standardTransition },
};

/**
 * Stagger wrapper – applies staggerChildren to child variants.
 * Pair with a child variant (e.g. fadeInUp) on each child.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/**
 * Reduced-motion safe: only a short fade, no spatial changes.
 * Use instead of spatial variants when prefers-reduced-motion is active.
 */
export const reducedFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

/**
 * Hover + tap scale props. Spread directly onto a `motion.*` element.
 * Example: `<motion.div {...hoverScaleProps} />`
 */
export const hoverScaleProps = {
  whileHover: { scale: 1.04, transition: fastTransition },
  whileTap: { scale: 0.97, transition: fastTransition },
};

/**
 * Press-only micro-interaction scale. Spread onto `motion.*` buttons/cards.
 * Example: `<motion.button {...pressScaleProps} />`
 */
export const pressScaleProps = {
  whileTap: { scale: 0.95, transition: fastTransition },
};
