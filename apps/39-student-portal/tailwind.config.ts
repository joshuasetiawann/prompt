import type { Config } from "tailwindcss";
import preset from "@scaffold/engine/tailwind-preset";

const config: Config = {
  presets: [preset as any],
  content: [
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "../../packages/engine/src/**/*.{ts,tsx}",
  ],
};
export default config;
