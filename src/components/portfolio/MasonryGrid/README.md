Purpose

Responsive masonry-style grid for project cards. Uses CSS Grid to provide a responsive layout with variable card heights.

Props

- items?: ProjectItem[]

Usage

<MasonryGrid items={projects} />

Accessibility

- Cards are articles with tabIndex=0 and quoted titles linked via aria-labelledby.

Future CMS integration

- items should be provided by CMS queries and include safe text-only fields.
