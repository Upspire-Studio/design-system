# Upspire Design System: agent instructions

This repo is the design system itself. The system's rules are imported below; follow them in everything you change here.

@docs/design-system/README.md

## Working in this repo

- `tokens/tokens.json` is the source of truth. After editing it, run `npm run build`. Never hand-edit `styles/tokens.css`, `styles/tailwind-theme.css` or `tokens/tokens.dtcg.json`.
- Run `npm run check` before finishing. It must pass: text contrast 4.5:1 in both themes, every product has all five color tokens, a `data-brand` scope and both mark files, and no undefined `var(--token)` in styles or components.
- Product color tokens are named `<key>-primary`, `<key>-primary-hover`, `<key>-tint`, `<key>-accent`, `<key>-on-primary`. Components read only the semantic `--primary` family that `styles/brands.css` maps.
- Marks in `brand/marks/` are plain SVG: hex fills, no `<image>`, `<style>`, `<script>` or `<text>`. Keep the light and `-reversed` files in step with `components/upspire.js` (ProductMark) and `docs/design-system/02-logos-and-marks.md`.
- Docs are Markdown. Usage rules name tokens. Keep the file map and changelog in `docs/design-system/README.md` current.
- Changing a token's name or removing one is a breaking change: bump the major version in `package.json` and add a changelog line.
- The browsable copy at https://claude.ai/artifact/7TsXecdeHevtpV8jYZ3dPL mirrors this repo; tell the user when a change here should be republished there.
