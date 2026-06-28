/**
 * Shared Tailwind preset for all generated apps.
 * Brand/accent colors are driven by CSS variables set per-app via <ThemeStyle/>.
 * Neutrals use Tailwind's built-in scales so contrast is always accessible.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          fg: "var(--brand-fg)",
          soft: "var(--brand-soft)",
        },
        accent: "var(--accent)",
      },
      borderRadius: {
        xl: "var(--radius)",
        "2xl": "calc(var(--radius) + 0.35rem)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 0 rgb(0 0 0 / 0.06)",
        soft: "0 4px 24px -8px rgb(0 0 0 / 0.12)",
        lift: "0 12px 40px -12px rgb(0 0 0 / 0.22)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.35s ease-out both",
      },
    },
  },
  plugins: [],
};
