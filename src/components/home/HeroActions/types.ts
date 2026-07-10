import React from 'react';
import clsx from 'clsx';

export type ActionItem = {
  id?: string;
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | string;
  as?: 'a' | 'button';
};

// Export types for use by Hero component props
export type { ActionItem };
