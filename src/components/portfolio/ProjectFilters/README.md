Purpose

Client-side multi-select filters for projects. Renders accessible checkbox controls for categories.

Props

- categories?: { id, title }[]
- selected?: string[]
- onChange?: (selected) => void

Usage

<ProjectFilters categories={categories} onChange={(sel) => setFilters(sel)} />

Accessibility

- Uses native checkbox inputs to preserve keyboard and screen-reader behavior.

Future CMS integration

- Category list should be provided by CMS data model.
