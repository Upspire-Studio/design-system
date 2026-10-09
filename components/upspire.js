/* @ds-bundle: {"format":4,"namespace":"Upspire","components":[{"name":"BrandScope"},{"name":"Button"},{"name":"Field"},{"name":"Card"},{"name":"Badge"},{"name":"Alert"},{"name":"ProductMark"},{"name":"Endorsement"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(" ");
  }

  var PRODUCTS = {
    upspire: "Upspire Studio",
    vsm: "Volunteer Shift Manager",
    nbm: "Board Manager",
    assessment: "Nonprofit Assessment",
    roles: "Nonprofit Roles",
    perennial: "Perennial Giving"
  };

  /* Status icons: 24px grid, 2px stroke, round caps (Lucide geometry). */
  var ICON_PATHS = {
    success: ["M20 6 9 17l-5-5"],
    warning: ["M12 9v4", "M12 17h.01", "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h16.9a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"],
    danger: ["M12 8v4", "M12 16h.01", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"],
    info: ["M12 16v-4", "M12 8h.01", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"]
  };

  function StatusIcon(props) {
    var paths = ICON_PATHS[props.tone];
    if (!paths) return null;
    return h(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
      paths.map(function (d, i) { return h("path", { key: i, d: d }); })
    );
  }

  function BrandScope(props) {
    var brand = props.brand || "upspire";
    return h(props.as || "div", { "data-brand": brand, className: cx("ups-scope", props.className), style: props.style }, props.children);
  }

  function Button(props) {
    var variant = props.variant || "primary";
    var cls = cx("ups-btn", "ups-btn--" + variant, props.size === "sm" && "ups-btn--sm", props.className);
    if (props.href) {
      return h("a", { href: props.href, className: cls }, props.children);
    }
    return h(
      "button",
      { type: props.type || "button", className: cls, disabled: props.disabled, onClick: props.onClick, "aria-label": props.ariaLabel },
      props.children
    );
  }

  var fieldCount = 0;
  function Field(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = props.id || "ups-field-" + ++fieldCount;
    var id = idRef.current;
    var describedBy = props.error ? id + "-error" : props.hint ? id + "-hint" : undefined;
    return h(
      "div",
      { className: cx("ups-field", props.className) },
      h("label", { className: "ups-field__label", htmlFor: id }, props.label),
      h("input", {
        id: id,
        className: "ups-field__input",
        type: props.type || "text",
        name: props.name,
        placeholder: props.placeholder,
        defaultValue: props.defaultValue,
        value: props.value,
        onChange: props.onChange,
        required: props.required,
        "aria-invalid": props.error ? "true" : undefined,
        "aria-describedby": describedBy
      }),
      props.error
        ? h("div", { className: "ups-field__error", id: id + "-error" }, h(StatusIcon, { tone: "danger" }), props.error)
        : props.hint
        ? h("div", { className: "ups-field__hint", id: id + "-hint" }, props.hint)
        : null
    );
  }

  function Card(props) {
    var cls = cx("ups-card", props.interactive && "ups-card--interactive", props.tone === "sunken" && "ups-card--sunken", props.className);
    return h(
      props.as || "div",
      { className: cls, style: props.style },
      props.eyebrow ? h("div", { className: "ups-card__eyebrow" }, props.eyebrow) : null,
      props.title ? h("h3", { className: "ups-card__title" }, props.title) : null,
      props.description ? h("p", { className: "ups-card__body" }, props.description) : null,
      props.children
    );
  }

  function Badge(props) {
    var tone = props.tone || "neutral";
    var showIcon = props.icon !== false && ICON_PATHS[tone];
    return h(
      "span",
      { className: cx("ups-badge", "ups-badge--" + tone, props.className) },
      showIcon ? h(StatusIcon, { tone: tone }) : null,
      props.children
    );
  }

  function Alert(props) {
    var tone = props.tone || "info";
    return h(
      "div",
      { className: cx("ups-alert", "ups-alert--" + tone, props.className), role: tone === "danger" ? "alert" : "status" },
      h(StatusIcon, { tone: tone }),
      h(
        "div",
        null,
        props.title ? h("div", { className: "ups-alert__title" }, props.title) : null,
        props.children
      )
    );
  }

  /* Marks: flat two-color construction on a 48 grid. Colors come from the
     product's tokens so the mark follows the theme. */
  function fill(token, opacity) {
    var s = { fill: "var(--" + token + ")" };
    if (opacity != null) s.opacity = opacity;
    return s;
  }
  function stroke(token, width) {
    return { stroke: "var(--" + token + ")", strokeWidth: width, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  }
  var MARKS = {
    vsm: function () {
      var p = "vsm-primary", a = "vsm-accent";
      return [
        h("rect", { key: 0, x: 6, y: 6, width: 36, height: 5, rx: 2, style: fill(p) }),
        h("rect", { key: 1, x: 6, y: 15, width: 10, height: 11, rx: 2.5, style: fill(p) }),
        h("rect", { key: 2, x: 19, y: 15, width: 10, height: 11, rx: 2.5, style: fill(a) }),
        h("rect", { key: 3, x: 32, y: 15, width: 10, height: 11, rx: 2.5, style: fill(p, 0.55) }),
        h("rect", { key: 4, x: 6, y: 29, width: 10, height: 11, rx: 2.5, style: fill(p, 0.4) }),
        h("rect", { key: 5, x: 19, y: 29, width: 10, height: 11, rx: 2.5, style: fill(p, 0.7) }),
        h("rect", { key: 6, x: 32, y: 29, width: 10, height: 11, rx: 2.5, style: fill(p, 0.25) })
      ];
    },
    nbm: function () {
      var p = "nbm-primary", a = "nbm-accent";
      var seats = [[24, 7.5, a], [38.3, 15.8, p], [38.3, 32.2, p], [24, 40.5, p], [9.7, 32.2, p], [9.7, 15.8, p]];
      return [h("circle", { key: "t", cx: 24, cy: 24, r: 9, style: fill(p) })].concat(
        seats.map(function (s, i) { return h("circle", { key: i, cx: s[0], cy: s[1], r: 3.6, style: fill(s[2]) }); })
      );
    },
    assessment: function () {
      var p = "assessment-primary", a = "assessment-accent";
      var up = [[6, 15, 9], [13.5, 10, 14], [21, 6, 18], [28.5, 12, 12], [36, 9, 15]];
      var down = [[6, 6], [13.5, 9], [21, 5], [28.5, 12], [36, 7]];
      return up
        .map(function (b, i) { return h("rect", { key: "u" + i, x: b[0], y: b[1], width: 5, height: b[2], rx: 1.5, style: fill(p) }); })
        .concat(down.map(function (b, i) { return h("rect", { key: "d" + i, x: b[0], y: 26, width: 5, height: b[1], rx: 1.5, style: fill(a) }); }));
    },
    roles: function () {
      var p = "roles-primary", a = "roles-accent";
      return [
        h("circle", { key: 0, cx: 24, cy: 16, r: 9, style: fill(p) }),
        h("circle", { key: 1, cx: 15.5, cy: 30, r: 9, style: fill(a, 0.92) }),
        h("circle", { key: 2, cx: 32.5, cy: 30, r: 9, style: fill(p, 0.6) })
      ];
    },
    perennial: function () {
      var p = "perennial-primary", a = "perennial-accent";
      return [
        h("path", { key: 0, d: "M24 42 V20", style: stroke(p, 3.5) }),
        h("path", { key: 1, d: "M24 30 C14 30 9 23 10 15 C18 15 24 21 24 30 Z", style: fill(p) }),
        h("path", { key: 2, d: "M24 24 C34 24 39 17 38 9 C30 9 24 15 24 24 Z", style: fill(a) }),
        h("path", { key: 3, d: "M12 42 H36", style: stroke(p, 3.5) })
      ];
    },
    upspire: function () {
      return [
        h("path", { key: 0, d: "M9 34 L24 17 L39 34", style: stroke("upspire-primary", 6) }),
        h("circle", { key: 1, cx: 24, cy: 7, r: 3.5, style: fill("upspire-accent") })
      ];
    }
  };

  function ProductMark(props) {
    var product = MARKS[props.product] ? props.product : "upspire";
    var size = props.size || 48;
    var mark = h(
      "svg",
      {
        className: "ups-mark",
        width: size,
        height: size,
        viewBox: "0 0 48 48",
        role: props.withName ? undefined : "img",
        "aria-label": props.withName ? undefined : PRODUCTS[product],
        "aria-hidden": props.withName ? "true" : undefined
      },
      MARKS[product]()
    );
    if (!props.withName) return mark;
    return h("span", { className: "ups-lockup" }, mark, h("span", { className: "ups-lockup__name" }, PRODUCTS[product]));
  }

  function Endorsement(props) {
    return h(
      "span",
      { className: cx("ups-endorse", props.className) },
      h(ProductMark, { product: "upspire", size: 18 }),
      h("span", null, "An ", h("a", { href: props.href || "https://upspire.studio" }, "Upspire"), " product")
    );
  }

  window.Upspire = {
    BrandScope: BrandScope,
    Button: Button,
    Field: Field,
    Card: Card,
    Badge: Badge,
    Alert: Alert,
    ProductMark: ProductMark,
    Endorsement: Endorsement,
    PRODUCTS: PRODUCTS
  };
})();
