# Alert

Alert is an inline banner that reports the result of an action or a condition that needs attention.

- **Provide:** `tone`, an optional bold `title`, and one or two sentences as children.
- `danger` announces itself to screen readers immediately (`role="alert"`); other tones are polite (`role="status"`).
- Place it at the top of the region it describes, not floating over content.
- Say what happened and what to do next: "3 volunteers didn't get the reminder. Check their email addresses and resend."
- Every screen has designed loading, empty, error and success states; Alert covers error and success, Card with `tone="sunken"` covers empty.
