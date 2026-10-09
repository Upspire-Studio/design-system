# Button

Button triggers an action; it is a pill in every product, and its fill comes from the surrounding BrandScope.

- **primary:** the one main action on a screen or in a dialog ("Publish schedule", "Send invites"). One per view.
- **secondary:** alternatives and cancel. Outlined in `rule-strong`, text in `ink`.
- **quiet:** low-emphasis inline actions ("Edit", "View all"). Text in `--primary`, tint on hover.
- **danger:** destructive actions, always after a confirmation step that names what will be lost.
- **sm:** 36px tall, for dense tables and toolbars only. Everywhere else buttons are 44px tall so they meet the touch-target minimum.

Labels are verbs that say exactly what happens, in sentence case: "Save changes", not "Submit" or "OK". Pass `href` when the action navigates; it renders a link styled as a button. An icon-only button needs `ariaLabel`.
