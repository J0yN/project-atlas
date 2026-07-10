# Section

Purpose

Semantic <section> wrapper with spacing variants and an optional constrained layout mode.

Props

- spacing: 'none' | 'sm' | 'md' | 'lg' | 'xl' (default 'md')
- constrained: boolean (wraps content in a constrained max-width, without importing Container)
- supports className, id, style, data-*, aria-*

Examples

```tsx
<Section spacing="lg" constrained>
  <Hero />
</Section>
```

Accessibility

- Uses native <section> element; provide aria-labelledby where appropriate for better semantics.

Best Practices

- Use constrained when you want centered content without extra wrappers.
- Use Section for vertical rhythm; prefer Stack for smaller spacing between inline elements.

Do & Don't

- Do use spacing tokens.
- Don't use Section to implement complex grid behavior; use Grid.
