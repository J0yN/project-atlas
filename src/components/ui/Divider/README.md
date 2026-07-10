# Divider

Purpose

Accessible separator component supporting horizontal and vertical orientations.

Props

- orientation: 'horizontal' | 'vertical' (default 'horizontal')
- thickness: number | string (px or CSS size)
- colorToken: semantic color key from design-system (default 'border')
- decorative: boolean — if true, hidden from assistive tech

Examples

```tsx
<Divider />
<Divider orientation="vertical" thickness={16} />
<Divider colorToken="muted" />
```

Accessibility

- Divider uses role="separator" when not decorative.
- For vertical dividers, aria-orientation="vertical" can be provided by consumers if needed.

Best Practices

- Prefer global CSS variables (via token→CSS build) to set --ds-color-<token> across themes.
- Use Section and Stack for spacing around Divider rather than Divider's spacing prop.

Do & Don't

- Do provide decorative when the divider is purely visual.
- Don't rely on Divider for complex layout behavior.
