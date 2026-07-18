import type { MouseEvent } from 'react';

export type ActionItem = {
  id?: string;
  label: string;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  variant?: 'primary' | 'secondary' | string;
  as?: 'a' | 'button';
};
