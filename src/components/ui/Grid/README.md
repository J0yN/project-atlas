# Grid

Purpose

A flexible CSS Grid primitive that supports fixed column counts, auto-fit/auto-fill patterns, and configurable gaps. It exposes a data-responsive attribute for consumers to wire breakpoint-specific grid templates if required.

Props

- columns: number (base columns)
- gap: spacing token key
- responsive: { base?: number, sm?: number, md?: number, ... } (optional)
- autoFit / autoFill: boolean
- minColumnWidth: spacing key or CSS size string

Examples

```tsx
<Grid columns={3} gap="24"> ... </Grid>

<Grid autoFit minColumnWidth="200px" gap="16"> ... </Grid>
```

Accessibility

- Grid is keyboard neutral and does not impose focus management. Use appropriate ARIA roles in grid items if needed.

Best Practices

- For complex responsive templates, apply CSS media queries that read the data-responsive attribute.

Do & Don't

- Do use spacing token keys for gap.
- Don't hardcode pixel values in components; prefer tokens.

Future Extension

- Provide an optional CSS-in-JS helper to generate media-query styles from the responsive prop.
