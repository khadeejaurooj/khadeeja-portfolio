# Khadeeja Urooj - Portfolio

Next.js (App Router) + TypeScript, plain CSS. Light and dark themes, responsive, reduced-motion aware.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit content

All text, projects, experience and links live in `lib/data.ts`. Styling is in `app/globals.css`.

To show a "Download CV" button, put a reference-free PDF in `public/` and set `cvUrl` in `lib/data.ts`.

## Deploy

Works as-is on Vercel (import the repo) or any Node host with `npm run build && npm start`.
