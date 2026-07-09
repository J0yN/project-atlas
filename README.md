# Project Atlas

Project Atlas is a production-ready portfolio and content platform built with Next.js, TypeScript, Tailwind CSS, next-themes, Framer Motion, and Lucide React.

## Project Overview

A modern Next.js application using the App Router and a src-first architecture.

### Technology Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next-themes
- Framer Motion
- Lucide React
- ESLint
- Prettier

## Architecture

Application source code lives inside the `src/` directory.

Static assets are stored in the `public/` directory.

Documentation is maintained in the `docs/` directory.

## Public Assets

The `public/` directory contains production-ready static assets.

```
public/
├── images/
├── icons/
├── fonts/
├── logos/
├── favicon/
└── social/
```

Guidelines:

- Use optimized formats such as WebP, AVIF and SVG.
- Do not commit design source files (PSD, AI, Figma).
- Use semantic kebab-case filenames.
- Keep font licenses with font files when applicable.

## Folder Structure

See `src/README.md` for the complete application structure.

## Local Development

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Development Workflow

- Create one feature branch per sprint.
- Open a Pull Request into `main`.
- Run lint, typecheck and build before merging.

## Documentation

Additional documentation is available in the `docs/` directory:

- Architecture
- Coding Standards
- Design System
- Deployment
- Roadmap

## Roadmap

- Foundation ✅
- Design System
- Component Library
- Hero
- Homepage
- Navigation
- Portfolio
- Journal
- Workspace
- Search
- Theme Engine
- Motion System
- Internationalization
- Dashboard
- Optimization
- Production Release

## Contributing

Please create feature branches from `main` and submit Pull Requests for review.