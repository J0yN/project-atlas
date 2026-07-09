# Public assets

Top-level folder for all public-facing static assets (images, icons, fonts, logos, favicons, and social images). This directory is organized for production use: optimized formats, clear naming conventions, and separate folders for different asset types and uses.

Structure

public/
├── images/
│   ├── projects/
│   ├── journal/
│   ├── workspace/
│   ├── avatars/
│   ├── illustrations/
│   └── placeholders/
│
├── icons/

├── fonts/

├── logos/

├── favicon/

└── social/

Asset guidelines (summary)

- Keep assets optimized for web delivery (compressed images, compressed fonts).
- Prefer modern formats: WebP/AVIF for photos, SVG for vector icons & logos when possible.
- Maintain source master files (PSD/Sketch/Figma/AI) outside this folder in a design artifacts location; this folder contains ready-to-serve assets only.
- Use semantic, kebab-case file names: e.g., project-masthead-1200x800.jpg or logo-mark.svg.
- Include multiple sizes / responsive variants when needed (e.g., 1x, 2x) and use descriptive suffixes (e.g., @2x).
- Add proper licensing metadata and keep font licenses with the repo or a linked DESIGN.md.
- Do not commit unoptimized or large master/export files here.

See public/ for per-folder responsibilities and conventions.
