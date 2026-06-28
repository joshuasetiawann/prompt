import React from "react";

export type Theme = {
  /** primary brand color (buttons, accents, links) */
  brand: string;
  /** text/foreground color that sits on the brand color */
  brandFg: string;
  /** soft brand tint for backgrounds (badges, highlights) */
  brandSoft: string;
  /** secondary accent color */
  accent: string;
  /** neutral base scale used for surfaces/borders/text */
  neutral: "slate" | "zinc" | "stone" | "gray" | "neutral";
  /** heading font family stack */
  headingFont: string;
  /** body font family stack */
  bodyFont: string;
  /** corner radius scale */
  radius: string;
};

const SANS =
  '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const SERIF = '"Georgia", "Times New Roman", ui-serif, serif';
const GROTESK =
  '"Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

export const FONTS = { SANS, SERIF, GROTESK };

export const DEFAULT_THEME: Theme = {
  brand: "#1e3a5f",
  brandFg: "#ffffff",
  brandSoft: "#eef2f7",
  accent: "#c8a45c",
  neutral: "slate",
  headingFont: SANS,
  bodyFont: SANS,
  radius: "0.75rem",
};

/**
 * Injects the theme as CSS custom properties on :root.
 * Server component — safe to render in a layout.
 */
export function ThemeStyle({ theme }: { theme: Theme }) {
  const css = `:root{
  --brand:${theme.brand};
  --brand-fg:${theme.brandFg};
  --brand-soft:${theme.brandSoft};
  --accent:${theme.accent};
  --radius:${theme.radius};
  --font-heading:${theme.headingFont};
  --font-body:${theme.bodyFont};
}
html,body{font-family:var(--font-body);}
h1,h2,h3,h4,.font-heading{font-family:var(--font-heading);}`;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
