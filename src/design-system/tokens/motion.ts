/**
 * Motion tokens: durations (ms), easing curves, spring presets, and standard timings.
 */
export const motion = {
  durations: {
    fastest: 75,
    fast: 150,
    normal: 250,
    slow: 400,
    slower: 600
  },
  easing: {
    standard: 'cubic-bezier(.2,.9,.2,1)',
    decelerate: 'cubic-bezier(.0,.0,.2,1)',
    accelerate: 'cubic-bezier(.4,0,1,1)'
  },
  springs: {
    soft: { stiffness: 120, damping: 14 },
    medium: { stiffness: 180, damping: 20 },
    snappy: { stiffness: 280, damping: 28 }
  },
  page: { enter: 300, exit: 200 },
  hover: { hover: 120 }
} as const;

export type MotionTokens = typeof motion;
