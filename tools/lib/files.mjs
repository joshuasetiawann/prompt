import { helpers } from "./spec.mjs";
const { camel } = helpers;

const FONT_STACKS = {
  SANS: '\'"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif\'',
  SERIF: '\'"Georgia", "Times New Roman", ui-serif, serif\'',
  GROTESK: '\'"Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif\'',
};

const DEPS = {
  "@hookform/resolvers": "3.10.0",
  "@prisma/client": "6.2.1",
  "@scaffold/engine": "*",
  bcryptjs: "2.4.3",
  "class-variance-authority": "0.7.1",
  clsx: "2.1.1",
  "lucide-react": "0.469.0",
  next: "15.1.6",
  react: "19.0.0",
  "react-dom": "19.0.0",
  "react-hook-form": "7.54.2",
  "server-only": "0.0.1",
  "tailwind-merge": "2.6.0",
  zod: "3.24.1",
};
const DEV_DEPS = {
  "@types/bcryptjs": "2.4.6",
  "@types/node": "22.10.7",
  "@types/react": "19.0.7",
  "@types/react-dom": "19.0.3",
  autoprefixer: "10.4.20",
  postcss: "8.4.49",
  prisma: "6.2.1",
  tailwindcss: "3.4.17",
  tsx: "4.19.2",
  typescript: "5.7.3",
};

export function boilerplate(spec, meta) {
  const f = {};
  const port = 3100 + Number(spec.id);

  // Privileged roles allowed to write through the in-app admin "New record" forms.
  // Computed to match the seeder's admin account exactly (admin@demo.test always
  // lands in this set), so the management UI keeps working while ordinary
  // end-user roles (customer/member/etc.) are blocked from privileged writes.
  const roleList = (spec.roles && spec.roles.length) ? spec.roles : ["Admin", "Member"];
  const normRoles = roleList.map((r) => String(r).split("/")[0].trim()).filter(Boolean);
  const adminRole = normRoles.find((r) => /admin|owner|manager/i.test(r)) || normRoles[0] || "Admin";
  const writeRoles = Array.from(new Set([
    adminRole,
    ...normRoles.filter((r) => /admin|owner|manager|director|supervisor|administrator|principal|founder/i.test(r)),
  ]));

  f["package.json"] = JSON.stringify(
    {
      name: `@app/${spec.id}-${spec.slug}`,
      private: true,
      version: "1.0.0",
      scripts: {
        dev: `next dev -p ${port}`,
        build: "next build",
        start: `next start -p ${port}`,
        "db:generate": "prisma generate",
        "db:push": "prisma db push --skip-generate",
        seed: "tsx prisma/seed.ts",
        setup: "prisma generate && prisma db push --skip-generate && tsx prisma/seed.ts",
      },
      prisma: { seed: "tsx prisma/seed.ts" },
      dependencies: DEPS,
      devDependencies: DEV_DEPS,
    },
    null,
    2,
  );

  f["next.config.mjs"] = `/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@scaffold/engine"],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
`;

  f["tsconfig.json"] = JSON.stringify(
    {
      compilerOptions: {
        target: "ES2022",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        strict: false,
        noEmit: true,
        esModuleInterop: true,
        module: "esnext",
        moduleResolution: "bundler",
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: "preserve",
        incremental: true,
        plugins: [{ name: "next" }],
        paths: { "@/*": ["./*"] },
      },
      include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
      exclude: ["node_modules"],
    },
    null,
    2,
  );

  f["postcss.config.mjs"] = `export default { plugins: { tailwindcss: {}, autoprefixer: {} } };\n`;

  f["tailwind.config.ts"] = `import type { Config } from "tailwindcss";
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
`;

  f[".env"] = `DATABASE_URL="file:./dev.db"\n`;
  f[".env.example"] = `# ${spec.appName} — environment variables
# --- Local (mock) mode: the app runs fully on this alone ---
DATABASE_URL="file:./dev.db"   # SQLite for local dev. Use a PostgreSQL URL in production.

# --- Production / real providers (optional; app uses mock modes until set) ---
# AUTH_SECRET="change-me-to-a-long-random-string"
# Payments (mock by default — set to enable a real gateway):
# STRIPE_SECRET_KEY=""
# STRIPE_WEBHOOK_SECRET=""
# Email / SMS (mock log by default):
# EMAIL_SERVER=""
# EMAIL_FROM=""
# SMS_API_KEY=""
# AI providers (only if this app uses AI features):
# ANTHROPIC_API_KEY=""
`;

  f["lib/db.ts"] = `import { PrismaClient } from "../generated/prisma-client";
import { createPrisma } from "@scaffold/engine/server";

export const db = createPrisma(PrismaClient);
`;

  f["lib/auth.ts"] = `import "server-only";
import { redirect } from "next/navigation";
import { getSessionUserId } from "@scaffold/engine/server";
import { db } from "./db";

export async function getCurrentUser() {
  const id = await getSessionUserId();
  if (!id) return null;
  try {
    return await db.user.findUnique({ where: { id } });
  } catch {
    return null;
  }
}

/** Guard for protected pages. Redirects to /login when signed out. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

/** Roles permitted to create records via the in-app admin forms. */
export const WRITE_ROLES: string[] = ${JSON.stringify(writeRoles)};

/** True when the user holds a privileged role allowed to write. */
export function canWrite(user: { role?: string | null } | null): boolean {
  if (!user) return false;
  if (!WRITE_ROLES.length) return true;
  return WRITE_ROLES.includes(user.role ?? "");
}
`;

  // serializable app config + meta
  const theme = {
    brand: spec.colors.brand,
    brandFg: "#ffffff",
    brandSoft: softTint(spec.colors.brand),
    accent: spec.colors.accent,
    neutral: spec.neutral,
    headingFont: "__H__",
    bodyFont: "__B__",
    radius: "0.85rem",
  };
  let themeStr = JSON.stringify(theme, null, 2)
    .replace('"__H__"', FONT_STACKS[spec.fonts.heading])
    .replace('"__B__"', FONT_STACKS[spec.fonts.body]);

  f["lib/app.ts"] = `import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: ${JSON.stringify(spec.id)},
  slug: ${JSON.stringify(spec.slug)},
  appName: ${JSON.stringify(spec.appName)},
  tagline: ${JSON.stringify(spec.tagline)},
  category: ${JSON.stringify(spec.category)},
  kind: ${JSON.stringify(spec.kind)},
  currency: "USD",
  primary: ${JSON.stringify(spec.primary)},
};

export const THEME: Theme = ${themeStr};

export const NAV = ${JSON.stringify(meta.nav, null, 2)};
export const MARKETING_LINKS = ${JSON.stringify(meta.marketingLinks, null, 2)};
export const MANAGED: string[] = ${JSON.stringify(meta.managed)};
export const MODELS: Record<string, ModelMeta> = ${JSON.stringify(meta.models, null, 2)};
`;

  // writable form config for the generic submit route + new-record forms
  f["lib/forms.ts"] = `export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = ${JSON.stringify(meta.writable, null, 2)};
`;

  f["app/globals.css"] = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: light; }
* { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
html { scroll-behavior: smooth; }
body { background: #f8fafc; color: #0f172a; }
::selection { background: var(--brand-soft, #e2e8f0); color: var(--brand, #0f172a); }
*::-webkit-scrollbar { width: 10px; height: 10px; }
*::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; border: 2px solid transparent; background-clip: content-box; }
*::-webkit-scrollbar-thumb:hover { background: #94a3b8; background-clip: content-box; }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
`;

  f["app/layout.tsx"] = `import "./globals.css";
import type { Metadata } from "next";
import { ThemeStyle } from "@scaffold/engine";
import { APP, THEME } from "@/lib/app";

export const metadata: Metadata = {
  title: { default: APP.appName, template: \`%s · \${APP.appName}\` },
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
`;

  f["app/logout/route.ts"] = `import { NextResponse } from "next/server";
import { clearSession } from "@scaffold/engine/server";

export async function GET(req: Request) {
  await clearSession();
  return NextResponse.redirect(new URL("/", req.url));
}
`;

  f["app/api/submit/route.ts"] = `import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { WRITABLE } from "@/lib/forms";
import { getCurrentUser, canWrite } from "@/lib/auth";

// Admin/staff create endpoint for the in-app "New record" forms.
// Requires an authenticated session AND a privileged role (see WRITE_ROLES);
// only models declared in WRITABLE are accepted.
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ ok: false, message: "Sign in to continue." }, { status: 401 });
  if (!canWrite(user)) return NextResponse.json({ ok: false, message: "You do not have permission to do that." }, { status: 403 });

  const url = new URL(req.url);
  const model = url.searchParams.get("model") || "";
  const conf = WRITABLE[model];
  if (!conf) return NextResponse.json({ ok: false, message: "Unknown form." }, { status: 400 });

  const body = await req.json().catch(() => ({} as Record<string, unknown>));
  const data: Record<string, unknown> = {};
  const errors: Record<string, string> = {};

  for (const f of conf.fields) {
    let v: any = (body as any)[f.name];
    if (f.required && (v == null || String(v).trim() === "")) {
      errors[f.name] = f.label + " is required";
      continue;
    }
    if (v == null || v === "") continue;
    if (f.type === "number") v = Number(v);
    else if (f.type === "date") v = new Date(v);
    data[f.name] = v;
  }
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 400 });

  try {
    // @ts-ignore dynamic delegate
    await db[conf.delegate].create({ data });
  } catch (e) {
    return NextResponse.json({ ok: false, message: "Could not save your submission." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
`;

  f["README.md"] = readme(spec, port);
  f["Dockerfile"] = dockerfile(port);
  f[".dockerignore"] = `node_modules\n.next\ngenerated\nprisma/dev.db*\n.env\n`;
  f["QA_CHECKLIST.md"] = qaChecklist(spec);

  return f;
}

function softTint(hex) {
  // produce a very light tint of the brand color for soft backgrounds
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  const mix = (c) => Math.round(c + (255 - c) * 0.9);
  const to = (c) => c.toString(16).padStart(2, "0");
  return `#${to(mix(r))}${to(mix(g))}${to(mix(b))}`;
}

function readme(spec, port) {
  return `# ${spec.appName}

${spec.tagline || spec.businessGoal}

A production-grade full-stack **scaffold** generated from prompt \`${spec.id}\` — *${spec.title}* (${spec.category}).
It runs end-to-end locally on seeded demo data with mock payment/notification modes and **no paid API keys**.

> This is a scaffold, not a finished product. Going live still needs your own credentials, a production database, real provider setup, and a security review. See \`.env.example\`.

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS + a shared component engine (\`@scaffold/engine\`)
- Prisma ORM (SQLite locally, PostgreSQL-ready for production)
- Zod validation, cookie-based demo auth, mock payments & notifications

## Run locally
From the **repo root** (dependencies are installed once for the whole workspace):

\`\`\`bash
# 1. generate the Prisma client for this app
npm --workspace @app/${spec.id}-${spec.slug} run db:generate
# 2. create the local SQLite database
npm --workspace @app/${spec.id}-${spec.slug} run db:push
# 3. load demo data
npm --workspace @app/${spec.id}-${spec.slug} run seed
# 4. start the dev server  ->  http://localhost:${port}
npm --workspace @app/${spec.id}-${spec.slug} run dev
\`\`\`

Or, inside this app folder: \`npm run setup && npm run dev\`.

## Demo logins
| Role  | Email            | Password   |
|-------|------------------|------------|
| Admin | admin@demo.test  | demo1234   |
| User  | user@demo.test   | demo1234   |

## Screens
${spec.requiredPages.map((p) => `- ${p}`).join("\n")}

## Deployment
- \`docker build -t ${spec.slug} .\` then run with a \`DATABASE_URL\` env var, **or** deploy to Vercel with a managed PostgreSQL database.
- Set \`DATABASE_URL\` to PostgreSQL, run \`prisma migrate deploy\`, then \`prisma db seed\` (optional).
- Swap mock payment/notification for real providers via the variables in \`.env.example\`.

_Screenshots of this build live in \`./screenshots\`._
`;
}

function dockerfile(port) {
  return `# Production image for this app (build context = repo root)
FROM node:20-slim AS base
WORKDIR /app
ENV NODE_ENV=production

FROM base AS deps
COPY package.json package-lock.json* ./
COPY packages ./packages
RUN npm ci --omit=dev || npm install --omit=dev

FROM base AS build
COPY . .
RUN npm install
RUN npx prisma generate --schema=apps/THIS_APP/prisma/schema.prisma
RUN npm run build --workspace @app/THIS_APP

FROM base AS run
COPY --from=build /app ./
EXPOSE ${port}
CMD ["npm", "run", "start", "--workspace", "@app/THIS_APP"]
`;
}

function qaChecklist(spec) {
  return `# Manual QA checklist — ${spec.appName}

## Smoke
- [ ] \`npm run setup\` completes (prisma generate, db push, seed)
- [ ] \`npm run dev\` boots without errors
- [ ] Home page renders
- [ ] Sign in with admin@demo.test / demo1234 reaches the dashboard
- [ ] Every sidebar item routes to a real page (no dead links)
- [ ] Lists show seeded data; empty/loading/error states exist
- [ ] Create form validates on the client and the server
- [ ] Protected /app routes redirect to /login when signed out
- [ ] Responsive layout works at mobile width

## Production smoke (after deploy)
- [ ] \`DATABASE_URL\` points to PostgreSQL and migrations are applied
- [ ] No secrets are committed; all secrets come from env vars
- [ ] Mock payment/notification replaced with real providers (if going live)
`;
}
