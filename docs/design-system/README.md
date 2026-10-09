# Upspire Design System

Version 1.0.0 · October 2026

One shared system for the Upspire family: Volunteer Shift Manager, Board Manager, Nonprofit Assessment, Nonprofit Roles, Perennial Giving and Upspire Studio itself. The products look like siblings, never twins. They share paper, ink, type, shape and behavior; each owns a color pair, a mark and a voice.

The family's personality is **professional, friendly, simple and intuitive**: a well-made field guide for people who run small nonprofits. Warm paper, an editorial serif, plain words, generous space.

## Global rules

These win over anything else in this system, in this order.

1. **Accessibility wins every conflict.** Text meets 4.5:1 on its ground (3:1 at 24px and up), controls and focus rings meet 3:1, touch targets are at least 44px.
2. **One product per surface.** Wrap each app in `BrandScope` with its product key. Never mix two products' signature colors in one layout, except on Upspire pages that present the family.
3. **Components use semantic tokens.** Use `--primary`, `--primary-hover`, `--primary-tint`, `--accent` and `--on-primary`. Use product tokens such as `--vsm-primary` only when defining a scope.
4. **Status is color, icon and word together.** Never color alone.
5. **Every screen has four designed states:** loading, empty, error and success.
6. **Accents are never text.** `<product>-accent` colors are for fills, illustration and the one highlighted element of a mark. Text uses `ink`, `ink-soft` or `<product>-primary`.
7. **Don't invent.** If this system has no answer, use the closest existing pattern, leave a `TODO(design):` comment, and say so in your summary. Never invent colors, fonts, icon styles or logos.

## Color

The ground is shared; the signature is per product.

- Page background is `paper`. Cards, inputs and dialogs sit on `paper-raised`. Wells and table headers use `paper-sunken`.
- Body text is `ink`, secondary text `ink-soft`, captions and placeholders `ink-faint`.
- Hairlines and card borders use `rule`. Input and control borders use `rule-strong`.
- Each product has five tokens: `<key>-primary`, `<key>-primary-hover`, `<key>-tint`, `<key>-accent`, `<key>-on-primary`. Keys: `upspire`, `vsm`, `nbm`, `assessment`, `roles`, `perennial`.
- Proportion on any screen: roughly 70% paper, 20% ink, 8% primary, 2% accent. The accent is a spark, not a field.
- Status colors (`success`, `warning`, `danger`, `info`, each with a `-bg`) are shared by all products and never re-tinted per brand.
- Focus: a solid 2px `focus` outline, offset 2px, on every interactive element.

Both themes are defined. Light is the default; dark keeps the same warmth (brown-black, not blue-black) and lightens each primary so it stays text-safe. Set `data-theme="dark"` on `<html>`.

## Typography

Two families, used by every product and the parent brand.

- **Fraunces** (`--font-display`) for headlines: `display-xl`, `display-l`, `h1`, `h2`, `h3`. Weight 600. Use it for titles only, never for UI controls or paragraphs.
- **DM Sans** (`--font-sans`) for everything else: `body-l`, `body`, `ui`, `ui-strong`, `label`, `caption`.
- Body copy is 17px (`body`) in every product. UI controls are 15px (`ui`). Inputs are 16px so phones don't zoom.
- Keep running text under about 68 characters per line. Headings use `text-wrap: balance`.
- `label` is the only uppercase style; it is letter-spaced 0.1em and used for eyebrows and table column headers.
- Load both from Google Fonts: `family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Fraunces:opsz,wght@9..144,500;9..144,600`. In Next.js use `next/font/google` with the same weights.

## Space, shape and depth

- Spacing steps from `space-1` (4px) to `space-9` (112px). Phone gutters are `space-4`; card padding is `space-6` (`space-5` on phones); page sections are `space-7` apart in apps and `space-8` on marketing pages.
- Buttons, badges and segmented controls are pills (`radius-pill`): the family's signature shape. Inputs and menus use `radius-md`. Cards and dialogs use `radius-lg`. Chips and mark tiles use `radius-sm`.
- Borders do most of the work. Cards rest on `shadow-card`; only hovered interactive cards, menus and dialogs use `shadow-raised`.
- Content max widths: 42rem for reading, 72rem for app layouts.

## Motion

Quiet and quick. Hover and press transitions are 140ms ease; cards lift 2px over 180ms. Nothing bounces, nothing loops, and nothing animates on page load except a skeleton shimmer. Under `prefers-reduced-motion: reduce`, transitions are off.

## Iconography

- Use **Lucide** icons: 24px grid, 2px stroke, round caps and joins, no fills. Size 18px in buttons, 20px in alerts, 16px inline with caption text.
- Icons take `currentColor`. Status icons: check (success), triangle-alert (warning), circle-alert (danger), info (info).
- No emoji in UI or marketing copy.
- An icon-only button always has an accessible name.

## Components

Eight components in the `Upspire` namespace: `BrandScope`, `Button`, `Field`, `Card`, `Badge`, `Alert`, `ProductMark`, `Endorsement`. Each has a guideline page in `docs/design-system/components/` with what to provide, when to use it, and the do's and don'ts. For anything else (tables, tabs, dialogs, menus), follow the same tokens and shapes and mark it `TODO(design):` until it is added here.

## File map

Read a file when the task calls for it. Paths are from the repo root.

| File | Read it when |
| --- | --- |
| `docs/design-system/01-brand-architecture.md` | Naming products, showing several products together, adding a product |
| `docs/design-system/02-logos-and-marks.md` | Any logo, mark, favicon, app icon or lockup work |
| `docs/design-system/03-voice.md` | Writing any copy: UI text, errors, emails, marketing |
| `docs/design-system/04-ux-patterns.md` | Designing screens, forms, navigation, tables, states |
| `docs/design-system/05-visuals.md` | Photography, illustration, charts, social images, slides |
| `docs/design-system/06-for-ai-agents.md` | Setting up a product repo to use this system |
| `docs/design-system/brands/<n>-<key>.md` | Before any work on that product |
| `docs/design-system/components/<Name>.md` | Before using that component |
| `tokens/tokens.json` | Source of truth for every token. Edit here, then `npm run build` |
| `styles/tokens.css` | Generated CSS custom properties, light and dark |
| `styles/brands.css` | The `data-brand` scopes that map product tokens to `--primary` and friends |
| `styles/components.css`, `components/upspire.js` | Component styles and the React components (`window.Upspire`) |
| `styles/tailwind-theme.css` | Tailwind v4 `@theme inline` mapping |
| `brand/marks/` | Proposed product marks, light and `-reversed` |
| `brand/logos-current/` | The logos products ship today, for reference only |

## Changelog

- **1.0.0 (2026-10-09):** First version. Field Guide direction with the Upspire endorsement. Perennial Giving moves to berry and marigold; Board Manager moves to Fraunces and DM Sans; body text is 17px in every product; proposed marks for all six brands.

Renaming or removing a token is a breaking change and bumps the major version.
