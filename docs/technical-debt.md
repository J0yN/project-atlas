# Technical Debt & Future Improvements

This document captures deferred work and deliberate trade-offs made during Sprint 2 (Design System). Each item below is intentionally postponed so the team can move quickly on the token architecture; they should be scheduled and implemented in follow-up sprints.

This file does NOT modify the current design-system implementation — it is a roadmap for future engineering and accessibility improvements.

---

## 1. Automated WCAG contrast tests

- Purpose: Programmatically verify that foreground/background and important token pairs meet WCAG AA (or higher) contrast ratios across themes.
- Why deferred: Manual visual checks were used during token selection to iterate quickly.
- Suggested approach: Add a CI job or test script using a color-contrast library (e.g., `@microsoft/color-contrast`, `axe-core`, `wcag-contrast`) that asserts contrast ratios for semantic pairs (background/foreground, primary/primaryForeground, card/foreground, etc.).
- Priority: High
- Estimated effort: 1–2 days

## 2. Theme consistency unit tests

- Purpose: Ensure every theme exports the full set of semantic color keys and that token types remain stable.
- Why deferred: Initial rollout prioritized shaping tokens and themes; automated coverage is pending.
- Suggested approach: Add unit tests that import `semanticColorKeys` and validate each theme object contains all keys and that tokens are of expected shape (string, number, etc.).
- Priority: High
- Estimated effort: 0.5–1 day

## 3. CSS variable build generation

- Purpose: Emit CSS custom properties from design tokens at build time, producing a lightweight artifact (e.g., `dist/tokens.css`) to be consumed by Tailwind or vanilla CSS.
- Why deferred: Runtime `tokensToCssVariables` helper exists, but build-time artifacts yield zero runtime allocation and simpler integration.
- Suggested approach: Create a small Node script that imports token/theme objects and writes CSS custom properties per theme. Integrate into build pipeline (npm script) and optionally commit artifacts or publish to a CDN.
- Priority: High
- Estimated effort: 1–2 days

## 4. Tailwind token plugin

- Purpose: Integrate design tokens with Tailwind (map semantic tokens to Tailwind variables) to enable utility classes that respect the design system.
- Why deferred: Prefer to stabilize the token API first and avoid premature coupling.
- Suggested approach: Implement a plugin that reads emitted CSS variables (from the build step) or directly uses tokens to extend Tailwind `theme.extend` with derived values.
- Priority: Medium
- Estimated effort: 2–3 days

## 5. Design token documentation site

- Purpose: Provide an interactive catalog for tokens, theme previews, contrast checks, and usage snippets for engineers and designers.
- Why deferred: Documentation exists in README but a dedicated site is a higher-effort, high-value follow-up.
- Suggested approach: Use a static site generator (Next.js, Storybook Docs, Docusaurus) to render tokens with interactive controls and copyable CSS/JS snippets. Prefer a story-driven tokens explorer that links to usage examples.
- Priority: Medium
- Estimated effort: 3–5 days

## 6. Storybook integration (tokens + components)

- Purpose: Visualize tokens and components in isolation, enable developer QA, and support designers.
- Why deferred: Sprint focus was tokens & themes first; Storybook requires component examples and CI integration.
- Suggested approach: Add Storybook, configure to read CSS variables (or tokens), and create token stories (color palettes, typography scale, spacing). Later add component stories that reference tokens.
- Priority: Medium
- Estimated effort: 3–5 days

## 7. Visual regression testing

- Purpose: Catch unintended visual changes across tokens, themes, and components.
- Why deferred: No component library yet; better applied once components exist.
- Suggested approach: Integrate with Chromatic, Percy, or Playwright-based snapshot tests once Storybook or a component demo exists.
- Priority: Low (for now)
- Estimated effort: 2–4 days (after Storybook)

## 8. Design token versioning

- Purpose: Version tokens/tokens schema to safely roll out breaking token changes across consumers.
- Why deferred: Current tokens are early-phase; versioning strategy should be established before breaking changes.
- Suggested approach: Use semantic versioning for the design-system package (or a mono-repo package), maintain a changelog, and consider automated migration scripts for renamed/removed tokens.
- Priority: Medium
- Estimated effort: 1–2 days planning, ongoing execution

## 9. Multi-brand theme support

- Purpose: Support multiple brand palettes and theme variants (brand-specific colors, logos, tone). Enables white-labeling and product family theming.
- Why deferred: Foundational architecture supports adding themes, but multi-brand needs design and governance.
- Suggested approach: Provide templated palette and theme generator tooling; add a documented process for brand onboarding.
- Priority: Medium
- Estimated effort: 3–7 days (tooling + documentation)

## 10. High-contrast accessibility theme

- Purpose: Provide a theme that meets strict accessibility (WCAG AAA) for users requiring high contrast.
- Why deferred: Requires design approvals and additional testing.
- Suggested approach: Create a specialized palette and theme file, include it in contrast tests and the docs site.
- Priority: High (accessibility focus)
- Estimated effort: 1–2 days to create + test

## 11. User-defined themes

- Purpose: Allow runtime registration of user-provided themes with validation against token schema.
- Why deferred: Runtime API and validation are additional surface area; core tokens should be stable first.
- Suggested approach: Provide an API for theme registration that validates shape (SemanticColors) and optionally persists choices to user preferences/local storage.
- Priority: Low–Medium
- Estimated effort: 2–4 days

## 12. Token build pipeline

- Purpose: Formalize token transformations, tests, and artifact generation (JSON → CSS → Tailwind → docs). Provide consistent build outputs for production and downstream consumers.
- Why deferred: Initial focus was on authoring tokens and themes; build pipeline will enable consumption by multiple platforms.
- Suggested approach: Build a small toolchain (Node scripts or use an existing token tool like Style Dictionary) to output artifacts, and wire it into CI.
- Priority: High
- Estimated effort: 3–7 days

---

## Recommended near-term plan (priority order)
1. Add Theme consistency unit tests (ensure full semantic coverage) — small, quick wins.
2. Add automated WCAG contrast tests in CI — ensures accessibility baseline.
3. Add token→CSS build generation script and integrate into the build pipeline.
4. Add Tailwind token plugin (consumes generated CSS variables).
5. Add docs site / Storybook and visual regression testing as the component library grows.
6. Implement token versioning and multi-brand support as the system scales.

---

## Notes
- All items above are intentionally postponed to keep Sprint 2 focused on token architecture and semantics.
- Implementing the high-priority items above before wide adoption will reduce refactor costs and help enforce accessibility and consistency across the app.

