Purpose

Displays the article hero with title, optional subtitle, date, reading time, categories, and optional cover image.

Props

- title: string (required)
- subtitle?: string
- date?: string (ISO date string)
- readingTime?: string
- categories?: string[]
- cover?: { src, alt?, aspectRatio? }

Usage

<ArticleHero title="..." date="2025-01-01" />

Accessibility

- Title is an H1 — ensure page contains a single H1.
- Provide alt text for meaningful images; use alt="" for decorative images.

CMS Integration

- Map hero fields from CMS: title, subtitle, date, readingTime, categories, cover asset.
