# Field

Field is a labeled text input with optional helper text or an error message, wired for screen readers.

- **Provide:** `label` (always), plus any of `name`, `type`, `placeholder`, `defaultValue` or `value`/`onChange`, `required`, `hint`, `error`.
- The label sits above the input in `ui-strong`. Placeholders show an example ("e.g. Saturday food bank"), never the label.
- `hint` explains format or purpose in `caption` size and `ink-soft`.
- `error` replaces the hint, turns the border `danger`, and shows an icon with the message. Write errors that say what to do: "Enter an email like name@org.org", not "Invalid input".
- Inputs use 16px text so phones don't zoom on focus.
- Stack fields with `space-5` between them; put the primary Button at the end of the form, left-aligned.
