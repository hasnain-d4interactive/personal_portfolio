# Ahmed Hasnain Portfolio

A multi-page personal portfolio built with Next.js, TypeScript, and Tailwind CSS for Ahmed Hasnain, a full-stack software developer focused on SaaS product development.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static local content modules
- Generated SEO assets including sitemap, robots, and Open Graph image

## Pages

- `/` home
- `/about`
- `/experience`
- `/projects`
- `/projects/replug`
- `/projects/contentpen`
- `/contact`

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`

## Scripts

- `npm run dev` starts the local dev server
- `npm run build` creates the production build
- `npm run start` serves the production build
- `npm run lint` runs ESLint
- `npm run typecheck` runs TypeScript without emitting files

## Project Structure

- `src/app` route files, metadata routes, and global layout
- `src/components` reusable UI building blocks
- `src/content/site.ts` typed portfolio content and case-study data
- `src/lib/site.ts` site URL helpers for metadata, robots, and sitemap
- `public` static assets including the downloadable resume and portfolio visuals
- `docs/setup.md` setup and content maintenance guide

## Content Notes

- Portfolio copy is intentionally written with safe public-facing wording.
- Product case studies focus on contribution areas and technical context rather than confidential metrics.
- GitHub is treated as a supporting profile link instead of the main proof point.

## Deployment

This project is ready for Vercel-style deployment and remains host-agnostic.

For best metadata and sitemap output in production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

More setup details live in [docs/setup.md](./docs/setup.md).
