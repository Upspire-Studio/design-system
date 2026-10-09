# UX patterns

The products serve busy, part-time, often non-technical people. Every screen should be usable on a phone by someone in a hurry.

## Layout

- App screens: a top bar with the product lockup and account menu; a left nav on desktop that becomes a bottom sheet menu on phones. Content max width 72rem; reading pages 42rem.
- One `h1` per screen, naming the place ("Upcoming shifts"), not the product.
- One primary button per view, at the end of a form or the top right of a list.
- Mobile first: everything works at 360px wide with `space-4` gutters, and nothing scrolls sideways except wide tables inside their own scroll box.

## Forms

- One column. Labels above fields. Group related fields under an `h3`.
- Ask only what's needed now; defer the rest.
- Validate on blur and on submit, not on every keystroke. Put the error under the field and summarize at the top in an `Alert` when there are several.
- Never disable the submit button to signal errors; let people press it and show what to fix.

## The four states

Design all four for every screen and component that loads data:

- **Loading:** skeleton blocks in `paper-sunken` matching the final layout. A spinner only for actions under 2 seconds.
- **Empty:** a sunken `Card` that says what will appear and offers the first action ("No shifts yet. Create your first shift.").
- **Error:** an `Alert` with tone `danger` that says what happened and what to do, with a retry.
- **Success:** an `Alert` with tone `success`, or a short inline confirmation next to the action.

## Navigation and wayfinding

- At most seven top-level nav items. Label them with nouns people use ("Shifts", "Volunteers", "Reports").
- Selected nav items use `--primary-tint` background and `--primary` text.
- Breadcrumbs only when a screen is three or more levels deep.

## Tables and lists

- Table headers use the `label` style on `paper-sunken`. Rows are separated by `rule` hairlines, not stripes.
- Numbers right-aligned with tabular figures. Actions on the right, as quiet `sm` buttons.
- On phones, tables of people or items become stacked cards.

## Confirmation and undo

- Prefer undo over confirmation for reversible actions (an `Alert` with an "Undo" quiet button for 8 seconds).
- Confirm destructive, irreversible actions in a dialog that names exactly what will be lost; the confirm button uses the `danger` variant and repeats the verb ("Delete 3 shifts").

## Help and onboarding

- First-run: a short checklist card (three to five steps), dismissible.
- Inline help in `hint` text before tooltips. Tooltips never hold information that's required to finish a task.
