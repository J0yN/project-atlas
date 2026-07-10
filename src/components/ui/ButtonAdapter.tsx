'use client';
import React, { forwardRef } from 'react';

export type ButtonAdapterProps = (React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>) & {
  as?: 'a' | 'button';
  href?: string;
  variant?: string;
  children?: React.ReactNode;
};

const ButtonAdapter = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonAdapterProps>((props, ref) => {
  const { as, href, children, ...rest } = props;
  const isAnchor = as === 'a' || Boolean(href);

  if (isAnchor) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  const type = (buttonProps.type as React.ButtonHTMLAttributes<HTMLButtonElement>['type']) ?? 'button';
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} type={type} {...buttonProps}>
      {children}
    </button>
  );
});

ButtonAdapter.displayName = 'ButtonAdapter';
export default ButtonAdapter;
