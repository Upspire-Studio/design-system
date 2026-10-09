# Logos and marks

Every mark in the family is built the same way, so a new one looks like it belongs without copying the others.

## Construction

- **Grid:** a 48 × 48 artboard with a 6px inset. The live area is 36 × 36, centered.
- **Style:** flat vector shapes. No gradients, no outlines around shapes, no drop shadows, no textures, no text inside the mark.
- **Color:** exactly two colors, the product's primary and accent. Tints of the primary are made with opacity (0.25, 0.4, 0.55, 0.7), never with new colors.
- **One accent element:** each mark has exactly one highlighted element in the accent color. It shows the one thing the product cares about most (the filled shift, the open board seat, the feedback below the line, the person being placed, the leaf that grows back, the spark of an idea).
- **Corners:** rounded. Rectangles use rx 1.5–2.5 at 48px; strokes use round caps and joins.
- **Strokes,** when used, are 3.5–6 units at 48px so they survive 16px favicons.
- **Motif:** a simple object from the product's world, reduced to a few shapes. A person should be able to describe it in five words.

## The marks

| Product | Motif | Accent element |
| --- | --- | --- |
| Upspire Studio | An upward chevron with a spark above it | The spark |
| Volunteer Shift Manager | A schedule grid of shift tiles under a header band | The center tile: a filled shift |
| Board Manager | A round table with six seats | The head seat |
| Nonprofit Assessment | Diverging bars above and below a baseline | The bars below the line |
| Nonprofit Roles | Three overlapping circles: people coming together | The lower-left person |
| Perennial Giving | A two-leaf sprout over a ground line | The upper leaf |

These are drawn as true SVG in `brand/marks/`, in a light version (for paper) and a `-reversed` version (for dark grounds), and as the `ProductMark` component, which draws them from tokens.

**Status:** proposed. The current logos are kept in `brand/logos-current/` for reference until each product adopts its new mark. Volunteer Shift Manager and Nonprofit Assessment already follow this construction closely; Board Manager, Nonprofit Roles, Perennial Giving and Upspire Studio change the most.

## Lockups

- **Horizontal (default):** mark, then the product name in Fraunces 600, with a gap of a quarter of the mark size. The name's cap height is about half the mark's height.
- **Stacked:** mark centered above the name, for square placements such as social avatars.
- **Endorsed:** either lockup with "An Upspire product" in DM Sans `caption` underneath, left-aligned with the name.

## Usage

- Minimum size: 16px for the mark, 120px wide for a horizontal lockup.
- Clear space: a quarter of the mark size on every side.
- On `paper` or `paper-raised`, use the light mark. On `ink` or dark theme surfaces, use the reversed mark. Never place a mark on a product color fill or on a photo without a solid paper or ink plate behind it.
- Don't recolor, stretch, rotate, outline, add effects, swap the accent element, or pair a mark with another product's name.

## Designing a new mark (for people and AI)

1. Write one sentence: what the product does and for whom.
2. Pick one concrete object from that world, and the one part of it that matters most.
3. Draw the object in 3–7 flat shapes on the 48 grid, primary color. Make the part that matters the accent element.
4. Test at 16px, 32px and 96px, on paper and on ink. If it blurs at 16px, remove a shape.
5. Compare it beside the other five marks. It should share their weight and simplicity and differ clearly in silhouette.
6. Deliver an SVG with no embedded images, no `<style>`, no text, hex fills only, in light and reversed versions.
