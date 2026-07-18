'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { pressScaleProps, hoverScaleProps, fastTransition } from '@/lib/motion/variants';

export type PressScaleVariant = 'press' | 'hover' | 'both';

export type PressScaleProps = {
  children: React.ReactNode;
  /** Which interactions trigger the scale animation. Defaults to 'both'. */
  variant?: PressScaleVariant;
  className?: string;
  style?: React.CSSProperties;
  /** Pass-through onClick for the wrapper element. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

/**
 * PressScale
 *
 * A micro-interaction wrapper that scales its children on hover and/or press.
 * Uses Framer Motion's `whileHover` and `whileTap` gestures with design-system
 * timing tokens. Respects `prefers-reduced-motion`.
 *
 * @example
 * <PressScale variant="hover">
 *   <Card />
 * </PressScale>
 *
 * <PressScale variant="press">
 *   <button>Click me</button>
 * </PressScale>
 */
export function PressScale({
  children,
  variant = 'both',
  className,
  style,
  onClick,
}: PressScaleProps): React.JSX.Element {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} style={style} onClick={onClick}>
        {children}
      </div>
    );
  }

  const gestureProps = (() => {
    if (variant === 'press') return pressScaleProps;
    if (variant === 'hover') return hoverScaleProps;
    return { ...pressScaleProps, ...hoverScaleProps };
  })();

  return (
    <motion.div
      {...gestureProps}
      transition={fastTransition}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
