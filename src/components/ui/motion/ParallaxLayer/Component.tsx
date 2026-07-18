'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export type ParallaxLayerProps = {
  children: React.ReactNode;
  /**
   * Parallax intensity. 0 = no effect, 1 = element moves at full scroll speed.
   * Positive values move the element upward on scroll (standard parallax).
   * Defaults to 0.3.
   */
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * ParallaxLayer
 *
 * Wraps children in a scroll-driven parallax container. Uses Framer Motion's
 * `useScroll` with `target` to track the element's visibility in the viewport,
 * then maps scroll progress to a vertical offset via a spring for smoothness.
 *
 * Respects `prefers-reduced-motion` by rendering a plain `div` with no
 * transform when motion is reduced.
 *
 * @example
 * <ParallaxLayer speed={0.2}>
 *   <HeroImage />
 * </ParallaxLayer>
 */
export function ParallaxLayer({
  children,
  speed = 0.3,
  className,
  style,
}: ParallaxLayerProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress [0→1] to y offset [+range → -range] (moves opposite scroll)
  const yRange = speed * 80;
  const rawY = useTransform(scrollYProgress, [0, 1], [yRange / 2, -yRange / 2]);
  const springY = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      ref={ref}
      style={reduced ? style : { y: springY, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
