# Stack

Purpose

A small, focused flexbox helper for consistent spacing between children.

Props

- direction: 'vertical' | 'horizontal'
- gap: spacing token key
- align: 'start' | 'center' | 'end' | 'stretch'
- justify: 'start' | 'center' | 'end' | 'between' | 'around'
- wrap: boolean

Examples

```tsx
<Stack gap="16" direction="horizontal" align="center">
  <A />
  <B />
</Stack>
```

Accessibility

- Stack is purely presentational and neutral with respect to keyboard focus.

Best Practices

- Use Stack for local layout (rows/columns) and Section for vertical rhythm.

Do & Don't

- Do use spacing tokens for gap.
- Don't use Stack for complex grid or responsive layouts; use Grid.
