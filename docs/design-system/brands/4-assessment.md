# Nonprofit Assessment

**Role:** a free board and community feedback tool with benchmarks; the family's entry point.
**Speaks to:** executive directors and board members taking stock of their organization.
**Personality:** quiet, even-handed, research-minded.

## Color

| Role | Token | Light |
| --- | --- | --- |
| Primary | `assessment-primary` | Teal `#1E5B62` |
| Hover | `assessment-primary-hover` | `#17474D` |
| Tint | `assessment-tint` | `#E3EEEE` |
| Accent | `assessment-accent` | Ochre `#C08A2E` |
| On primary | `assessment-on-primary` | `#FFFFFF` |

Ratio: 75 paper, 18 ink, 5 teal, 2 ochre. The most editorial product: hairline rules, few shadows.

## Mark

Diverging bars above and below a baseline: teal above, ochre below. The current mark already uses this idea; the new one aligns its colors exactly to the tokens (the current file uses `#1d6269` and `#c2795d`).

## Voice

A good facilitator: neutral about scores, specific about next steps. "It's free, and there's no account to set up." Recommends sibling products only where the results show a need.

## Migration notes

- Rename `--ground`, `--accent`, `--ochre` to the shared token names.
- The ochre accent shifts from `#9C5F1C` to `#C08A2E` for fills; text that used ochre moves to `ink-soft` or `assessment-primary`.
