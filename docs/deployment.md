# Deployment Runbook

## Purpose

This runbook defines the production deployment process for Project Atlas v1.0.0.

## Platform assumptions

- Node.js 20
- `npm install`
- Next.js production build via `npm run build`
- Locale-aware App Router deployment

## Required environment variables

- `NEXT_PUBLIC_SITE_URL`: canonical production URL used for metadata generation

## Pre-deployment checklist

1. Pull the release branch or tag.
2. Run `npm install`.
3. Run `npm run typecheck`.
4. Run `npm run lint`.
5. Run `npm run build`.
6. Confirm the localized routes render for `en`, `es`, `fr`, and `de`.
7. Confirm middleware redirects `/` to the detected locale.

## Deployment steps

1. Set `NEXT_PUBLIC_SITE_URL` to the production origin.
2. Install dependencies with `npm install`.
3. Build with `npm run build`.
4. Start the application with `npm run start` or deploy the generated Next.js artifact to the platform runtime.
5. Validate the homepage, dashboard overview, dashboard settings, `robots.txt`, and `sitemap.xml`.

## Post-deployment smoke test

- Home route redirects to a locale-prefixed URL.
- Locale pages render without hydration warnings.
- Theme switching works in dashboard settings.
- Dashboard navigation works across Overview, Projects, Articles, Analytics, and Settings.
- Metadata uses the production site URL.

## Rollback

1. Re-deploy the previous stable release tag.
2. Re-run the smoke test.
3. Confirm `NEXT_PUBLIC_SITE_URL` matches the restored environment.
