/** Product keys. Each maps to a token family: `<key>-primary`, `<key>-primary-hover`, `<key>-tint`, `<key>-accent`, `<key>-on-primary`. */
export type Product = "upspire" | "vsm" | "nbm" | "assessment" | "roles" | "perennial";
export type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "brand";

export interface BrandScopeProps {
  /** Which product's colors the subtree uses. Default "upspire". */
  brand?: Product;
  /** Element to render. Default "div". */
  as?: string;
  className?: string;
  style?: object;
  children?: any;
}
export interface ButtonProps {
  /** primary: the one main action. secondary: alternatives. quiet: low-emphasis inline actions. danger: destructive. */
  variant?: "primary" | "secondary" | "quiet" | "danger";
  /** "sm" for dense toolbars and table rows. */
  size?: "md" | "sm";
  /** Renders an <a> instead of a <button> when the action navigates. */
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: any) => void;
  /** Required when the button holds only an icon. */
  ariaLabel?: string;
  className?: string;
  children?: any;
}
export interface FieldProps {
  /** Visible label. Always required: never rely on placeholder alone. */
  label: string;
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: any) => void;
  required?: boolean;
  /** Helper text under the input. */
  hint?: string;
  /** Error message. Replaces the hint and marks the input invalid. */
  error?: string;
  className?: string;
}
export interface CardProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Lifts on hover. Use only when the whole card is a link or button. */
  interactive?: boolean;
  /** "sunken" for wells and secondary groupings. */
  tone?: "raised" | "sunken";
  as?: string;
  className?: string;
  style?: object;
  children?: any;
}
export interface BadgeProps {
  /** Status tones carry an icon automatically. "brand" uses the scoped product color. */
  tone?: Tone;
  /** Set false to hide the status icon (only when the word alone is unambiguous). */
  icon?: boolean;
  className?: string;
  children?: any;
}
export interface AlertProps {
  tone?: "success" | "warning" | "danger" | "info";
  title?: string;
  className?: string;
  children?: any;
}
export interface ProductMarkProps {
  product: Product;
  /** Pixel size of the square mark. Minimum 16. Default 48. */
  size?: number;
  /** Adds the product name in the display face beside the mark. */
  withName?: boolean;
}
export interface EndorsementProps {
  /** Link target for "Upspire". Default https://upspire.studio */
  href?: string;
  className?: string;
}
