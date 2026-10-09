# Card

Card groups one object or idea on a raised paper surface: a shift, a board member, a donor, a job board.

- **Provide:** any of `eyebrow`, `title`, `description`, and children for actions or extra content.
- Cards use `paper-raised`, a `rule` border, `radius-lg` and the quiet `shadow-card`. Padding is `space-6` on desktop and `space-5` on phones.
- Set `interactive` only when the whole card is a link or button; it lifts to `shadow-raised` on hover.
- `tone="sunken"` is for wells and secondary groupings inside a page, never for primary content.
- **Don't** add a colored left border or a gradient. Show state with a Badge inside the card instead.
- Cards in a row share the same height, padding and element order.
