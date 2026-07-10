import React from 'react';
import clsx from 'clsx';
import styles from './HeroActions.module.css';
import ButtonAdapter from '@/components/ui/ButtonAdapter';
import type { ActionItem } from './types';

export type HeroActionsProps = React.ComponentPropsWithoutRef<'div'> & {
  actions?: readonly ActionItem[];
};

export const HeroActions: React.FC<HeroActionsProps> = ({ actions = [], className, style, ...rest }) => {
  if (!actions || actions.length === 0) return null;

  return (
    <div className={clsx(styles.root, className)} style={style} role="group" aria-label="Hero actions" {...rest}>
      {actions.map((a) => {
        const key = a.id ?? a.label;
        return (
          <ButtonAdapter
            key={key}
            as={a.as}
            href={a.href}
            onClick={a.onClick}
            variant={a.variant}
            className={clsx(styles.cta, styles[`variant-${a.variant ?? 'primary'}`])}
          >
            {a.label}
          </ButtonAdapter>
        );
      })}
    </div>
  );
};

export default HeroActions;
