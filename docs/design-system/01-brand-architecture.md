# Brand architecture

Upspire is an **endorsed house of brands**. Each product has its own name, mark, color pair and voice, and leads on its own surfaces. Upspire Studio stands behind them with a small, consistent endorsement.

## The family

| Product | Key | Role | Primary · accent |
| --- | --- | --- | --- |
| Upspire Studio | `upspire` | The parent: strategy and technology studio | Ink `#221E19` · Iris `#6A58A6` |
| Nonprofit Assessment | `assessment` | Free entry point: board and community feedback with benchmarks | Teal `#1E5B62` · Ochre `#C08A2E` |
| Volunteer Shift Manager | `vsm` | Free volunteer scheduling | Forest `#2A5C45` · Amber `#E8912A` |
| Board Manager | `nbm` | Board roster, candidate pipeline, committees, compliance | Navy `#2B3A5C` · Terracotta `#C4603A` |
| Nonprofit Roles | `roles` | Map of 300+ nonprofit job boards, plus hiring tools | Harbor `#0B4A63` · Coral `#D2553C` |
| Perennial Giving | `perennial` | Donor retention | Berry `#5E3350` · Marigold `#D49A2A` |

Nonprofit Assessment is the top of the funnel: it points people to Volunteer Shift Manager, Board Manager and Perennial Giving when their results show a need.

## What is shared and what is owned

**Shared by everyone:** paper and ink neutrals, status colors, Fraunces and DM Sans, spacing, radii, shadows, motion, iconography, components, accessibility rules, and the mark construction grid.

**Owned by each product:** its name, its primary and accent colors, its mark (built on the shared grid), its voice notes, and its imagery subjects.

## Naming

- Write product names in full on first mention: "Volunteer Shift Manager", "Board Manager", "Nonprofit Assessment", "Nonprofit Roles", "Perennial Giving".
- Short forms are for internal use, URLs and code only (VSM, NBM). Never put "VSM" or "NBM" in customer-facing copy.
- The parent is "Upspire Studio" in full, "Upspire" in the endorsement line.
- New products follow the pattern: a plain-language name that says what it does, for whom.

## The endorsement

Every product shows "An Upspire product" with the small Upspire mark (the `Endorsement` component):

- in the site footer, and
- on the sign-in screen, under the product lockup.

It never appears in the product header, in the product's own mark, or larger than `caption` size. The product leads; Upspire endorses.

## When products appear together

Only Upspire Studio pages and cross-product moments (Nonprofit Assessment results, family pages, pitch decks) show more than one product. Then:

- Each product sits in its own card with its own `BrandScope`, mark and primary color.
- The page itself stays in Upspire ink on paper.
- Products are listed in the order of the table above.

## Adding a new product

1. Choose a primary that differs clearly in both hue and lightness from the five in use. Compare it side by side with each of them on `paper` before going further.
2. Check it: `<key>-primary` at 4.5:1 on `paper` and `paper-raised`, white `<key>-on-primary` at 4.5:1 on it.
3. Add the five color tokens, a `[data-brand]` block in `styles/brands.css`, a mark on the shared grid, and a brand profile.
