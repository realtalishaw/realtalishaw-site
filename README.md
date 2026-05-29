# Talisha White Personal Website

Personal website for Talisha White, built from the scope and content brief in `docs/`.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Convex schema, queries, and seed mutation

## Local Development

```bash
pnpm install
pnpm dev
```

The site renders from Convex when `VITE_CONVEX_URL` is configured. Before a Convex deployment exists, it falls back to `src/data/siteContent.ts` so the design and routes can still be previewed locally.

## Convex

Convex files live in `convex/`:

- `schema.ts`
- `site.ts`
- `seed.ts`

After creating/configuring a Convex deployment, run:

```bash
pnpm convex:dev
```

Then use `seed:initialContent` to load the initial website content.

The React app reads the homepage and blog posts from:

- `site:homepage`
- `site:posts`

## Verification

```bash
pnpm build
```
