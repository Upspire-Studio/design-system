# Nonprofit Roles

**Role:** a map of 300+ nonprofit job boards, plus hiring tools for boards and organizations (nonprofitroles.org).
**Speaks to:** people looking for nonprofit work, and boards hiring, including for executive directors.
**Personality:** friendly, bright, encouraging.

## Color

| Role | Token | Light |
| --- | --- | --- |
| Primary | `roles-primary` | Harbor `#0B4A63` |
| Hover | `roles-primary-hover` | `#073649` |
| Tint | `roles-tint` | `#DDE9EE` |
| Accent | `roles-accent` | Coral `#D2553C` |
| On primary | `roles-on-primary` | `#FFFFFF` |

Ratio: 68 paper, 18 ink, 10 harbor, 4 coral. The brightest product: coral may appear more often, still never as text on paper. The current mustard (`#fda026`) is retired as a brand color.

## Mark

Three overlapping circles: people coming together, one in coral. It simplifies the current raster lotus of three figures into a vector on the shared grid.

## Voice

"Find where the right nonprofit jobs get posted." Encouraging for seekers; for boards hiring an executive director, clear and step by step: "It's the biggest decision a board makes. Here's how to do it well."

## Migration notes

- The only product on plain CSS: import `tokens.css` and the brand block rather than moving to Tailwind.
- Replace the PNG logos with the SVG mark; the logo's geometric sans is replaced by Fraunces in the lockup.
