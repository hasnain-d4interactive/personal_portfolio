# Portfolio Setup Guide

## Prerequisites

- Node.js 24 or newer recommended
- npm 11 or newer recommended

## Install And Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production Checks

Before deployment, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Content Editing Workflow

Most portfolio content is stored in:

`src/content/site.ts`

Update this file to edit:

- profile summary
- navigation
- strengths
- skills
- achievements
- work experience
- featured projects
- contact details

## Images And Assets

- Resume file: `public/ahmed-hasnain-resume.pdf`
- Portfolio graphics: `public/images`
- App icon: `src/app/icon.svg`
- Open Graph image: `src/app/opengraph-image.tsx`

If you replace graphics, keep filenames stable unless you also update the references in content and route files.

## Deployment Notes

For correct canonical-style metadata, sitemap, and share URLs, set this environment variable in production:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The app also supports Vercel URL fallbacks automatically if that variable is not set.

## Route Overview

- `src/app/page.tsx` homepage
- `src/app/about/page.tsx` about page
- `src/app/experience/page.tsx` experience page
- `src/app/projects/page.tsx` projects overview
- `src/app/projects/[slug]/page.tsx` project case-study pages
- `src/app/contact/page.tsx` contact page

## Design Direction

The site uses a modern SaaS visual language:

- dark editorial background
- bright cyan and blue accents
- strong typography
- rounded panels
- product-style illustrations

When extending the design, keep the same visual direction rather than switching to a generic template aesthetic.
