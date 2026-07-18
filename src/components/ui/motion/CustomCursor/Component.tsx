'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

/**
 * Tight spring: dot tracks the cursor closely.
 * Loose spring: ring trails slightly behind for a depth effect.
 */
const DOT_SPRING = { stiffness: 500, damping: 40, restDelta: 0.001 };
const RING_SPRING = { stiffness: 200, damping: 30, restDelta: 0.001 };

/**
 * CustomCursor
 *
 * A decorative cursor follower (dot + ring) for fine-pointer (mouse) devices.
 * Rendered with `pointer-events: none` so it never blocks interaction.
 * Automatically skipped on touch/coarse-pointer devices and when
 * `prefers-reduced-motion: reduce` is active.
 *
 * CSS offsets: the dot/ring elements use negative top/left equal to half their
 * size so that `transform: translateX/Y` from the motion values naturally
 * centers them on the cursor coordinate.
 */
export function CustomCursor(): React.JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // rawX/rawY hold the actual cursor position; springs derive from them.
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const dotX = useSpring(rawX, DOT_SPRING);
  const dotY = useSpring(rawY, DOT_SPRING);
  const ringX = useSpring(rawX, RING_SPRING);
  const ringY = useSpring(rawY, RING_SPRING);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const isReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!isFine || isReduced) return;

    setMounted(true);

    const onMouseMove = (e: MouseEvent): void => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onPointerOver = (e: PointerEvent): void => {
      if (!(e.target instanceof Element)) return;
      const hit = e.target.closest(
        'a, button, [role="button"], input, select, textarea, label, [tabindex]'
      );
      setIsPointer(hit !== null);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('pointerover', onPointerOver);

    return (): void => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('pointerover', onPointerOver);
    };
  }, [rawX, rawY]);

  if (!mounted) return null;

  return (
    <>
      {/* Dot — tight spring, sticks close to the cursor */}
      <motion.div
        aria-hidden
        className={styles.dot}
        style={{ x: dotX, y: dotY }}
      />
      {/* Ring — loose spring; scales up over interactive elements */}
      <motion.div
        aria-hidden
        className={styles.ring}
        initial={{ scale: 1, opacity: 0.45 }}
        animate={{
          scale: isPointer ? 1.6 : 1,
          opacity: isPointer ? 0.7 : 0.45,
        }}
        transition={{ duration: 0.18 }}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
