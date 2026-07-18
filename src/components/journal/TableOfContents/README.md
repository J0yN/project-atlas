Purpose

Render a table of contents for article headings. Accepts a list of heading items (id/title/depth) — typically generated from the article content.

Props

- items?: TocItem[]
- ariaLabel?: string

Accessibility

- nav with aria-label; links point to heading ids inside the article.

CMS Integration

- Generate TOC from content blocks or MDX/HTML headings on the server and pass into this component.
