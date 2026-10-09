# Volunteer Shift Manager

**Role:** free volunteer scheduling for nonprofits.
**Speaks to:** volunteer coordinators, often part-time and juggling several jobs; and the volunteers themselves, mostly on phones.
**Personality:** practical, upbeat, community-minded.

## Color

| Role | Token | Light |
| --- | --- | --- |
| Primary | `vsm-primary` | Forest `#2A5C45` |
| Hover | `vsm-primary-hover` | `#1C3D2E` |
| Tint | `vsm-tint` | Mint `#EBF4EE` |
| Accent | `vsm-accent` | Amber `#E8912A` |
| On primary | `vsm-on-primary` | `#FFFFFF` |

Ratio: 70 paper, 18 ink, 9 forest, 3 amber. Amber marks open or highlighted shifts as a fill, never as text.

## Mark

A schedule grid: header band and six shift tiles, the center tile in amber. It refines the current mark (which already uses this construction) onto the 48 grid.

## Voice

Names the pains coordinators already feel ("The Spreadsheet Shuffle", "The Group Text Spiral", "The Last-Minute Scramble") and solves them plainly. Free is said up front.

## Migration notes

- Retire the `--lp-*` alias layer; use the shared token names.
- Replace Tailwind default status colors (`#dc2626`, `#0ea5e9`) with `danger` and `info`.
- Body text moves from 15px to 17px.
