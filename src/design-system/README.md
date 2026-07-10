# Design System — Project Atlas

## Purpose
The Design System is the single source of truth for Project Atlas' visual language. It provides strongly-typed tokens, theme objects, and small pure utilities so UI libraries, CSS-in-JS tools, and build tooling can consume consistent values.

## Architecture
- tokens/: Primitive tokens (spacing, typography, radius, motion, etc). These are framework-agnostic and immutable (as const).
- themes/: Theme objects that map semantic token keys to concrete palette values. Themes import raw palettes from palette.ts to avoid duplicated color literals.
- types/: Shared TypeScript types describing the combined design system shape.
- utils/: Pure helpers for token formatting and runtime conversions.
- constants.ts: Small runtime constants used by the design system.

## Folder structure
```
src/design-system/
  tokens/
  themes/
  types/
  utils/
  palette.ts
  constants.ts
  index.ts
```

## Token philosophy
- Tokens are semantic: components should consume names like `background`, `primary`, or `muted`.
- Tokens are immutable and strongly-typed to enable safer refactors and editor auto-completion.
- Raw palette colors are centralized in palette.ts and are not meant for direct consumption by components.

## Theme system
- Themes are simple objects mapping semantic token names to strings (colors).
- `tokensToCssVariables` helper converts a theme into CSS custom properties for runtime or build-time usage.
- Adding a new theme is a matter of creating a palette and a theme object that adheres to the `SemanticColors` shape.

## Usage examples
```ts
import { lightTheme, tokensToCssVariables } from '@/design-system';

const cssVars = tokensToCssVariables(lightTheme.colors);
// cssVars['--ds-color-background'] -> '#ffffff'
```

## Best practices
- Use semantic tokens in components; avoid importing palettes directly.
- Keep token files small and focused. Avoid logic in tokens — transformations belong in utils/.
- Export new tokens via tokens/index.ts and then update src/design-system/index.ts barrel.

## Future extension guide
- Add `high-contrast` or `brand` palettes in palette.ts and corresponding theme files.
- Add a build step to emit CSS variables or a Tailwind plugin to inject variables.

