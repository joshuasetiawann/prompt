import "./globals.css";
import type { Metadata } from "next";
import { ThemeStyle } from "@scaffold/engine";
import { APP, THEME } from "@/lib/app";

export const metadata: Metadata = {
  title: { default: APP.appName, template: `%s · ${APP.appName}` },
  description: APP.tagline || APP.appName,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeStyle theme={THEME} />
        {children}
      </body>
    </html>
  );
}
