import React from 'react';

export type ButtonAdapterProps = (React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>) & {
  as?: 'a' | 'button';
  href?: string;
  variant?: string;
  children?: React.ReactNode;
};

const ButtonAdapter = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonAdapterProps>(({ as, href, children, ...rest }, ref) => {
  const tag = as ?? (href ? 'a' : 'button');
  if (tag === 'a') {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} type={(rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
});

ButtonAdapter.displayName = 'ButtonAdapter';

export default ButtonAdapter;
