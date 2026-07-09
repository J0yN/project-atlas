# Project Atlas

This repository houses Project Atlas.

## Public Assets

The `public/` directory contains production-ready static assets (images, icons, fonts, logos, favicons, and social preview images) organized for scalability and clarity. See `public/README.md` for a high-level overview and each subfolder's README for specific responsibilities and conventions.

Guidelines (summary)

- Use optimized, web-friendly formats (WebP/AVIF for photos, SVG for vectors).
- Store design source files (Figma, PSD, AI) outside the `public/` directory — `public/` is for ready-to-serve assets only.
- Name files semantically using kebab-case and include size/context when helpful (e.g., `project-atlas-hero-1600x900.webp`).
- Keep font licenses alongside font files or in a DESIGN.md.
- Do not commit large, unoptimized source files or working design assets here.

This repository now includes a canonical public asset structure on branch `chore/public-assets-structure`. Open a PR to merge the structure into the default branch when ready.
