Purpose

Base Project Card component composing media, content, meta, tags and actions. Server-first, variant-driven.

Props

- project: Project (id, title, description, image, category, tags, client, year, readingTime, featured)
- variant?: 'small'|'medium'|'large'|'featured'

Usage

<ProjectCard project={p} variant="medium" />

Accessibility

- Renders as an <article> with semantic heading inside the content subcomponent.
- Focusable interactive elements are inside ProjectCardActions; card hover/focus styles are CSS only and respect reduced-motion.

CMS Integration

- Consume project data from CMS: id, slug, title, excerpt, media, metadata.
