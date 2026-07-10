import React from 'react';

export type ButtonAdapterProps = React.ComponentPropsWithoutRef<'button'> & {
  as?: 'a' | 'button';
  href?: string;
  variant?: string;
  children?: React.ReactNode;
};

/**
 * ButtonAdapter
 * Lightweight adapter to emulate a Button API until a canonical Button exists.
 * Does not implement visual styles — consumers apply styles via className.
 */
const ButtonAdapter = React.forwardRef<any, ButtonAdapterProps>(({ as, href, variant, children, ...rest }, ref) => {
  const tag = as ?? (href ? 'a' : 'button');
  if (tag === 'a') {
    return (
      <a ref={ref as any} href={href} {...(rest as any)}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref as any} type={(rest as any).type ?? 'button'} {...(rest as any)}>
      {children}
    </button>
  );
});

ButtonAdapter.displayName = 'ButtonAdapter';

export default ButtonAdapter;
