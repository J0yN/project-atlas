# Container

Purpose

Responsive, centered container that constrains content width and provides horizontal padding. It is a semantic structural wrapper and intentionally light-weight.

Props

- size: 'sm' | 'md' | 'lg' | 'xl' | 'full' (default 'lg')
- px: spacing token key for horizontal padding
- py: spacing token key for vertical padding
- supports className, id, style, data-*, aria-*, and ref

Examples

```tsx
<Container size="md" px="24" py="16">...content...</Container>
```

Accessibility

- Container is a neutral structural element. Use semantic elements inside (header, main, footer) for role semantics.

Best Practices

- Prefer semantic HTML children inside Container (main, article).
- Do not use Container for spacing-heavy layout responsibilities; use Stack or Section when appropriate.

Do & Don't

- Do use design-system spacing keys for px/py.
- Don't hardcode pixel values in components that consume Container.

Future Extension

- Optionally allow maxWidth overrides or custom breakpoint mapping if required.
