# ProductMark

ProductMark draws a product's mark from its tokens, so it follows the theme and never drifts from the palette.

- **Provide:** `product`, optional `size` (default 48, minimum 16) and `withName` for a horizontal lockup with the name in Fraunces.
- Use this component in UI. Use the SVG files in `brand/marks/` where a component can't run (favicons, emails, social images, slides).
- Clear space around the mark is a quarter of its size on every side.
- **Don't** recolor, outline, rotate, add shadows, or place the light mark on a product color. On dark grounds the component switches automatically; for files, use the `-reversed` SVG.
- Status: these marks are the proposed family construction (flat two-color, 48 grid, one accent element). They replace the current product logos once approved.
