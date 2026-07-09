# Project Atlas

Project Atlas — foundation scaffold (App Router + TypeScript + Tailwind + next-themes + Framer Motion + Lucide React).

This branch (sprint-01-foundation) contains the initial, production-minded application foundation. It is intentionally minimal: a strongly typed, accessible landing page and a modular folder structure ready for features.

## Project overview
A modern Next.js application scaffolded to use the App Router and a src-first architecture. Focus areas:
- App Router with server-first layouts and client providers
- TypeScript with strict checks
- Tailwind CSS for utility-first styling
- next-themes for light/dark theming (class strategy)
- Framer Motion and Lucide for animations and icons
- ESLint + Prettier for consistent code quality

## Architecture
Top-level source: `src/` — everything application-specific lives under this directory. Production build and public assets served from `public/` (left intact).

## Folder structure
See `src/README.md` for a detailed breakdown.

## Setup (local)
1. Checkout the branch:

   git checkout sprint-01-foundation

2. Install dependencies:

   npm install

3. Run development server:

   npm run dev

4. Typecheck and lint:

   npm run typecheck
   npm run lint

## Development workflow
- Make feature branches off `main` or `sprint-01-foundation` during early work.
- Keep components modular under `src/components`.
- Add providers to `src/providers`.
- Maintain public assets in `public/`.

## Roadmap
- Add CI for lint/typecheck/build
- Add automated image optimization on upload
- Implement content/modules (portfolio, journal)

## Contributing
- Fork, create a branch, and open a PR targeting `main`.
- Run lint and typecheck before opening PRs.

