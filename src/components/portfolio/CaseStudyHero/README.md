Purpose

Hero area for a case study page: kicker, prominent title, subtitle and optional cover media.

Props

- title (string) - required
- subtitle (string)
- kicker (string)
- cover: { src, alt?, aspectRatio? }

Usage

<CaseStudyHero title="Project X" subtitle="A deep dive" cover={{src:'/img.jpg'}} />

Accessibility

- Title is H1 for SEO; ensure page has only one H1.
- Cover image uses alt text when meaningful; otherwise alt="" for decorative media.

CMS Integration

- Map hero fields from CMS (title, subtitle, kicker, media asset).
