# QA Checklist

## Production release QA

### Functional

- [ ] Homepage loads for every supported locale.
- [ ] Locale redirect from `/` works as expected.
- [ ] Dashboard overview renders metrics, projects, and articles.
- [ ] Dashboard navigation links resolve correctly.
- [ ] Dashboard settings render release metadata and theme controls.
- [ ] Theme switching works for light, dark, and system modes.

### Accessibility

- [ ] Page headings remain hierarchical.
- [ ] Interactive controls are keyboard reachable.
- [ ] Theme selector exposes a radio-group experience to assistive technology.
- [ ] Color contrast remains acceptable in light and dark themes.

### Performance

- [ ] Production build completes without warnings that block release.
- [ ] Locale middleware does not redirect in a loop.
- [ ] No unnecessary client-only rendering was introduced for server-first routes.

### Localization

- [ ] `en`, `es`, `fr`, and `de` routes render.
- [ ] Locale-specific metadata and content load successfully.
- [ ] The locale cookie persists user choice after navigation.

### Release operations

- [ ] `npm install` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] GitHub release is created from tag `v1.0.0`.
