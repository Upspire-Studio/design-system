# Upspire Design System

One shared system for the Upspire product family: Volunteer Shift Manager, Board Manager, Nonprofit Assessment, Nonprofit Roles, Perennial Giving and Upspire Studio. Written for people and for AI agents.

The products are siblings, never twins. They share paper, ink, type, shape and behavior; each owns a color pair, a mark and a voice.

**Start here:** [`docs/design-system/README.md`](docs/design-system/README.md). It holds the global rules, the foundations and a map of every other file.

Browsable version with live component previews: https://claude.ai/artifact/7TsXecdeHevtpV8jYZ3dPL

## What's here

| Path | What |
| --- | --- |
| `docs/design-system/` | The brand book: rules, architecture, logos, voice, UX, visuals, AI guide |
| `docs/design-system/brands/` | One profile per product |
| `docs/design-system/components/` | Guidelines for each component |
| `tokens/tokens.json` | Source of truth for colors (light and dark), type, spacing, radius, shadow |
| `tokens/tokens.dtcg.json` | W3C Design Tokens export (generated) |
| `styles/` | `tokens.css` (generated), `brands.css`, `components.css`, `fonts.css`, `tailwind-theme.css` (generated) |
| `components/upspire.js` | React components as a classic script (`window.Upspire`), with types in `upspire.d.ts` |
| `brand/marks/` | Proposed product marks as SVG, light and reversed |
| `brand/logos-current/` | Logos the products ship today, for reference |
| `scripts/build.mjs` | Builds generated files and checks contrast, tokens and marks |

## Using it in a product

1. Add the CLAUDE.md block from [`docs/design-system/06-for-ai-agents.md`](docs/design-system/06-for-ai-agents.md) to the product repo, with its brand key.
2. Copy or import `styles/tokens.css` and `styles/brands.css`, and set `data-brand="<key>"` on the app root.
3. Tailwind v4 apps also import `styles/tailwind-theme.css`.

## Changing it

```sh
npm run build   # regenerate styles/tokens.css, styles/tailwind-theme.css, tokens/tokens.dtcg.json and run checks
npm run check   # checks only; fails on contrast, missing tokens or marks, or stale generated files
npm run hooks   # once per clone: run the check before every commit
```

Edit `tokens/tokens.json`, never the generated files. Renaming or removing a token is a breaking change: bump the major version in `package.json` and the docs README changelog.
