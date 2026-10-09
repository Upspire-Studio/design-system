# BrandScope

BrandScope sets which product's colors everything inside it uses, by putting `data-brand` on a wrapper.

Wrap each product's app root once: `<BrandScope brand="vsm">`. Components inside read `--primary`, `--primary-hover`, `--primary-tint`, `--accent` and `--on-primary`, which the scope maps to that product's tokens. Without a scope, everything falls back to Upspire's ink and iris.

- **Provide:** `brand` (one of `upspire`, `vsm`, `nbm`, `assessment`, `roles`, `perennial`) and children.
- **Do** use exactly one product scope per screen. A marketing page that compares products nests a scope per product card.
- **Don't** set `--primary` by hand or reach for `--vsm-primary` inside components; go through the scope so one component works in every product.
- Dark mode is independent: set `data-theme="dark"` on `<html>` and the scope keeps working.
