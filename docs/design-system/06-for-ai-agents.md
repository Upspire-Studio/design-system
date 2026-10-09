# For AI agents

This system is written to be read by AI coding and design agents as well as people. Follow these steps.

## Loading order

1. Read this README first. Its global rules override everything else.
2. Identify the product: `upspire`, `vsm`, `nbm`, `assessment`, `roles` or `perennial`. If unsure, ask, or check the repo's name and page titles.
3. Read that product's brand profile.
4. Read only the section your task needs:

| Task | Read |
| --- | --- |
| Building or restyling UI | README (Color, Typography, Space), the component guidelines you use, UX patterns |
| Writing copy, emails, error messages | Voice and writing, the brand profile's voice notes |
| Designing or editing a logo, favicon or app icon | Logos and marks |
| Social images, slides, illustrations, photos | Visuals and imagery, Logos and marks |
| Choosing colors for a chart | Visuals and imagery (Data visualization) |
| Adding a new product | Brand architecture, Logos and marks |

## Using the tokens in code

- `tokens/tokens.json` is the source of truth. `styles/tokens.css` is generated from it by `npm run build` and declares every token as a CSS custom property, light on `:root` and dark under `[data-theme="dark"]`.
- In Tailwind v4, import `styles/tokens.css`, `styles/brands.css` and `styles/tailwind-theme.css`, then set `data-brand` on `<html>` or the app root. Utilities like `bg-paper`, `text-ink`, `bg-primary` and `rounded-pill`, `rounded-lg`, `font-display` follow. Shadows change per theme, so use `shadow-(--shadow-card)`.
- Plain CSS (Nonprofit Roles): import `styles/tokens.css` and `styles/brands.css`, and `styles/components.css` if you use the component classes.
- Other formats: `tokens/tokens.dtcg.json` is a W3C Design Tokens export for design tools and other build systems.
- Never hard-code a hex value that exists as a token. Never use Tailwind's default palette (`red-600`, `sky-500`) in product UI.

## Paste this into each product repo's CLAUDE.md

```md
## Design system
This product follows the Upspire Design System: https://github.com/Upspire-Studio/design-system
(local checkout: ~/upspire-design-system; browsable version: https://claude.ai/artifact/7TsXecdeHevtpV8jYZ3dPL)
- Brand key: <vsm | nbm | assessment | roles | perennial | upspire>
- Read docs/design-system/README.md and this product's brand profile in docs/design-system/brands/ before any UI, copy, logo or visual work.
- Use semantic tokens (--paper, --ink, --primary...) under data-brand="<key>"; never hard-code colors or add fonts.
- Fraunces for headings, DM Sans for everything else. Pill buttons, radius-lg cards, Lucide icons.
- Status = color + icon + word. Every screen has loading, empty, error and success states.
- If the system has no answer: closest existing pattern, a TODO(design): comment, and mention it in your summary.
```

## When the system has no answer

Use the closest existing pattern, leave a `TODO(design):` comment where you made the call, and list each gap in your final summary so it can be added here. Never invent new colors, fonts, icon styles, mark shapes or animation curves.

## Checks before you finish

- Text contrast 4.5:1 (3:1 at 24px+) in light and dark.
- Every interactive element is a real `button`, `a` or form control with a visible focus ring.
- No raw hex values, no new font families, no emoji.
- The product's own name and colors only; the endorsement line in footer and sign-in only.
