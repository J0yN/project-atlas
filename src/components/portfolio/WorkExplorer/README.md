Purpose

Server-first Work Explorer section that composes search, filters, sorting, category tabs, masonry grid and infinite loading.

Props

- title?: string
- description?: string
- initialItems?: ProjectItem[] (server-rendered items)
- categories?: { id, title }[]
- pageSize?: number

Usage

<WorkExplorer initialItems={projects} categories={[{id:'design',title:'Design'}]} />

Accessibility

- Uses semantic section and header elements.
- Controls are keyboard accessible. Interactive parts are client components and include ARIA attributes.

Future CMS integration

- initialItems, categories and other props should be provided by a CMS query in the parent page.
