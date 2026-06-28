import { helpers } from "./spec.mjs";
import { metaHelpers } from "./meta.mjs";
const { camel } = helpers;
const { humanize } = metaHelpers;

const delegate = (n) => n.charAt(0).toLowerCase() + n.slice(1);

function featureCards(spec) {
  const feats = (spec.requiredFeatures.length ? spec.requiredFeatures : spec.backendLogic).slice(0, 6);
  return feats.map((txt) => {
    const clean = txt.replace(/\([^)]*\)/g, "").trim();
    const words = clean.split(/\s+/);
    const title = words.slice(0, 5).join(" ").replace(/[,:.]$/, "");
    return { icon: iconForFeature(clean), title, description: clean };
  });
}
function iconForFeature(t) {
  const map = [
    [/search|filter|availab/i, "search"], [/book|reserv|schedul|calendar|appointment/i, "calendar"],
    [/pay|deposit|checkout|invoic|billing/i, "credit-card"], [/double|conflict|block|prevent/i, "shield"],
    [/report|analyt|revenue|kpi|dashboard|metric/i, "chart"], [/notif|email|sms|remind/i, "bell"],
    [/role|access|permission|auth/i, "badge-check"], [/inventory|stock|room|catalog|product/i, "boxes"],
    [/cancel|reschedul|policy/i, "repeat"], [/admin|manage|crud/i, "settings"],
    [/upload|file|document/i, "file-text"], [/message|chat|support|ticket/i, "message"],
    [/track|status|pipeline|stage/i, "kanban"], [/review|rating|feedback/i, "star"],
  ];
  for (const [rx, ic] of map) if (rx.test(t)) return ic;
  return "sparkles";
}

function statStrip(spec) {
  const c = spec.category.toLowerCase();
  if (/booking|reserv|travel/.test(c)) return [
    { value: "4.9★", label: "Average rating" }, { value: "12k+", label: "Bookings made" },
    { value: "30+", label: "Destinations" }, { value: "24/7", label: "Support" },
  ];
  if (/commerce|marketplace|store|product/.test(c)) return [
    { value: "18k+", label: "Happy customers" }, { value: "4.8★", label: "Store rating" },
    { value: "48h", label: "Fast shipping" }, { value: "99%", label: "Order accuracy" },
  ];
  if (/education|learn|course|portal/.test(c)) return [
    { value: "9k+", label: "Learners" }, { value: "120+", label: "Lessons" },
    { value: "94%", label: "Completion" }, { value: "4.9★", label: "Rating" },
  ];
  return [
    { value: "2.4k+", label: "Active users" }, { value: "99.9%", label: "Uptime" },
    { value: "4.8★", label: "Customer rating" }, { value: "30%", label: "Time saved" },
  ];
}

/**
 * Per-category hero identity: a deep (dark) tone for tech/AI/data categories,
 * and a contextual hero-aside visual chosen by what the app actually is —
 * a booking widget for reservations, a product collage for stores, a dashboard
 * preview for SaaS/portals. Keeps each category visually distinct.
 */
function heroProfile(spec) {
  const hay = `${spec.category} ${spec.title} ${spec.appName} ${spec.style}`.toLowerCase();
  const deep =
    /\bai\b|a\.i\.|artificial intelligence|machine learning|\bllm\b|chatbot|generator|generative|gen-?ai|developer|dev tool|saas|analytics|\bdata\b|big data|security|cyber|crypto|blockchain|fintech|automation|devops|intelligence|telemed/.test(hay) ||
    /tech|dark|terminal|neon|cyber|developer|matrix/.test(String(spec.style).toLowerCase());
  const booking = /book|reserv|rental|appointment|travel|stay|hotel|villa|tour|salon|clinic|dentist|spa|table|consult|session|class|court|studio/.test(hay);
  let aside;
  if (spec.kind === "storefront") aside = booking ? "booking" : "collage";
  else if (spec.kind === "landing") aside = "stats";
  else aside = "dashboard";
  return { tone: deep ? "deep" : "light", aside, deep };
}

/* =========================================================== shared pages */
function loginActions() {
  return `"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { verifyPassword, setSession } from "@scaffold/engine/server";

export type LoginState = { error?: string };

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const parsed = z
    .object({ email: z.string().email(), password: z.string().min(1) })
    .safeParse({ email: formData.get("email"), password: formData.get("password") });
  if (!parsed.success) return { error: "Enter a valid email and password." };

  const user = await db.user.findUnique({ where: { email: parsed.data.email } });
  if (!user || !user.passwordHash || !(await verifyPassword(parsed.data.password, user.passwordHash))) {
    return { error: "Invalid credentials. Use the demo login shown below." };
  }
  await setSession(user.id);
  redirect("/app");
}
`;
}

function loginPage(spec) {
  return `"use client";
import { useActionState } from "react";
import { Button, Field, Input, Alert } from "@scaffold/engine";
import { loginAction, type LoginState } from "./actions";
import { APP } from "@/lib/app";

export default function LoginPage() {
  const [state, action, pending] = useActionState<LoginState, FormData>(loginAction, {});
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-brand p-12 text-brand-fg lg:flex">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-black/10" />
        <a href="/" className="relative flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 text-sm font-bold">{APP.appName.slice(0,1)}</span>
          <span className="font-heading text-lg font-semibold">{APP.appName}</span>
        </a>
        <div className="relative">
          <h2 className="font-heading text-3xl font-bold leading-tight">{APP.tagline || "Welcome back."}</h2>
          <p className="mt-3 max-w-md text-brand-fg/80">Sign in to manage everything in one place. This is a demo scaffold running on seeded data.</p>
        </div>
        <p className="relative text-sm text-brand-fg/60">© {APP.appName}</p>
      </div>
      <div className="flex items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-sm">
          <h1 className="font-heading text-2xl font-semibold text-slate-900">Sign in</h1>
          <p className="mt-1 text-sm text-slate-500">Use the demo credentials to explore.</p>
          <form action={action} className="mt-6 space-y-4">
            {state?.error ? <Alert tone="danger">{state.error}</Alert> : null}
            <Field label="Email"><Input name="email" type="email" defaultValue="admin@demo.test" placeholder="you@company.com" /></Field>
            <Field label="Password"><Input name="password" type="password" defaultValue="demo1234" placeholder="••••••••" /></Field>
            <Button type="submit" disabled={pending} className="w-full">{pending ? "Signing in…" : "Sign in"}</Button>
          </form>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            <p className="font-medium text-slate-800">Demo logins</p>
            <p className="mt-1">Admin · <span className="font-mono">admin@demo.test</span></p>
            <p>User · <span className="font-mono">user@demo.test</span></p>
            <p className="mt-1">Password · <span className="font-mono">demo1234</span></p>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            <a href="/" className="font-medium text-brand hover:underline">← Back to site</a>
          </p>
        </div>
      </div>
    </div>
  );
}
`;
}

function enquiryRoute() {
  return `import { NextResponse } from "next/server";
import { z } from "zod";
import { mockNotify } from "@scaffold/engine/server";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
  note: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }
  // mock mode: log instead of sending a real email/SMS
  mockNotify("email", parsed.data.email, "We received your request", parsed.data.message);
  return NextResponse.json({ ok: true });
}
`;
}

/* ============================================================ app shell pages */
function appLayout() {
  return `import { AppShell } from "@scaffold/engine";
import { APP, NAV } from "@/lib/app";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();
  return (
    <AppShell
      appName={APP.appName}
      nav={NAV}
      user={{ name: user.name as any, email: user.email as any, role: (user as any).role }}
    >
      {children}
    </AppShell>
  );
}
`;
}

function dashboardPage(spec, meta) {
  const primary = spec.primary;
  return `import { db } from "@/lib/db";
import { APP, MODELS, MANAGED } from "@/lib/app";
import { DashboardOverview } from "@scaffold/engine";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
const D = (n: string) => n.charAt(0).toLowerCase() + n.slice(1);

export default async function DashboardPage() {
  const user = await requireUser();
  const primary = ${JSON.stringify(primary)};
  const pmeta = MODELS[primary];

  // KPIs from counts of the top managed models
  const kpis: any[] = [];
  for (const name of MANAGED.slice(0, 4)) {
    const m = MODELS[name];
    let total = 0, recent = 0;
    try {
      total = await (db as any)[D(name)].count();
      recent = await (db as any)[D(name)].count({ where: { createdAt: { gte: new Date(Date.now() - 14 * 86400000) } } });
    } catch {}
    const delta = total ? Math.round((recent / total) * 100) : 0;
    kpis.push({ label: m.labelPlural, value: total, delta, icon: m.icon });
  }

  // 8-week trend of the primary entity
  const series: { label: string; value: number }[] = [];
  for (let i = 7; i >= 0; i--) {
    const start = new Date(Date.now() - (i + 1) * 7 * 86400000);
    const end = new Date(Date.now() - i * 7 * 86400000);
    let v = 0;
    try { v = await (db as any)[D(primary)].count({ where: { createdAt: { gte: start, lt: end } } }); } catch {}
    series.push({ label: "W" + (8 - i), value: v });
  }

  // breakdown by status (if any) else by managed counts
  let breakdown: { label: string; value: number }[] = [];
  let breakdownTitle = "By status";
  if (pmeta?.statusField) {
    try {
      const g = await (db as any)[D(primary)].groupBy({ by: [pmeta.statusField], _count: { _all: true } });
      breakdown = g.map((x: any) => ({ label: String(x[pmeta.statusField!] ?? "—"), value: x._count._all }));
    } catch {}
  }
  if (!breakdown.length) {
    breakdownTitle = "By category";
    breakdown = kpis.map((k) => ({ label: k.label, value: Number(k.value) || 0 }));
  }

  // recent records
  const include: any = {};
  for (const c of pmeta?.columns ?? []) if (c.kind === "relation") include[c.key] = true;
  let recent: any[] = [];
  try { recent = await (db as any)[D(primary)].findMany({ take: 6, orderBy: { createdAt: "desc" }, include }); } catch {}

  const first = (user.name as any)?.split?.(" ")?.[0] ?? "there";
  return (
    <DashboardOverview
      greeting={"Welcome back, " + first}
      subtitle={APP.tagline}
      kpis={kpis}
      series={series}
      seriesTitle={"New " + (pmeta?.labelPlural ?? "records") + " · last 8 weeks"}
      breakdown={breakdown}
      breakdownTitle={breakdownTitle}
      recent={recent}
      recentColumns={(pmeta?.columns ?? []) as any}
      recentTitle={"Recent " + (pmeta?.labelPlural ?? "activity")}
      currency={APP.currency}
    />
  );
}
`;
}

function listPage(name) {
  return `import { db } from "@/lib/db";
import { APP, MODELS } from "@/lib/app";
import { CollectionView } from "@scaffold/engine";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
const META = MODELS[${JSON.stringify(name)}];

export const metadata = { title: META.labelPlural };

export default async function Page() {
  await requireUser();
  const include: any = {};
  for (const c of META.columns) if (c.kind === "relation") include[c.key] = true;
  let rows: any[] = [];
  try { rows = await (db as any)[${JSON.stringify(delegate(name))}].findMany({ take: 50, orderBy: { createdAt: "desc" }, include }); } catch {}
  return <CollectionView meta={META} rows={rows} currency={APP.currency} newHref={META.route + "/new"} />;
}
`;
}

function newPage(name) {
  return `import { DemoForm, PageHeader, Card, CardContent, ButtonLink } from "@scaffold/engine";
import { MODELS } from "@/lib/app";
import { WRITABLE } from "@/lib/forms";
import { requireUser } from "@/lib/auth";

const META = MODELS[${JSON.stringify(name)}];
const CONF = WRITABLE[${JSON.stringify(name)}];
export const metadata = { title: "New " + META.label };

export default async function Page() {
  await requireUser();
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <PageHeader
        title={"New " + META.label}
        subtitle={"Add a new " + META.label.toLowerCase() + " to your workspace"}
        actions={<ButtonLink href={META.route} variant="outline">Cancel</ButtonLink>}
      />
      <Card>
        <CardContent className="pt-6">
          <DemoForm
            action={"/api/submit?model=" + ${JSON.stringify(name)}}
            fields={CONF.fields as any}
            submitLabel={"Create " + META.label}
            successTitle="Saved"
            successMessage="The record was validated on the server and created in your local database."
          />
        </CardContent>
      </Card>
    </div>
  );
}
`;
}

function detailPage(name) {
  return `import { db } from "@/lib/db";
import { APP, MODELS } from "@/lib/app";
import { RecordView } from "@scaffold/engine";
import { requireUser } from "@/lib/auth";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const META = MODELS[${JSON.stringify(name)}];

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await params;
  const include: any = {};
  for (const f of (META as any).detailFields) if (f.kind === "relation") include[f.name] = true;
  let row: any = null;
  try { row = await (db as any)[${JSON.stringify(delegate(name))}].findUnique({ where: { id }, include }); } catch {}
  if (!row) notFound();
  return <RecordView meta={META} row={row} fields={(META as any).detailFields} currency={APP.currency} />;
}
`;
}

function reportsPage(spec) {
  const primary = spec.primary;
  return `import { db } from "@/lib/db";
import { APP, MODELS, MANAGED } from "@/lib/app";
import { PageHeader, Card, CardHeader, CardTitle, CardContent, BarChart, AreaChart, DonutChart, KpiGrid, KpiCard, getIcon } from "@scaffold/engine";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
const D = (n: string) => n.charAt(0).toLowerCase() + n.slice(1);

export default async function ReportsPage() {
  await requireUser();
  const primary = ${JSON.stringify(primary)};
  const pmeta = MODELS[primary];

  const counts: { label: string; value: number; icon?: string }[] = [];
  for (const name of MANAGED) {
    let v = 0; try { v = await (db as any)[D(name)].count(); } catch {}
    counts.push({ label: MODELS[name].labelPlural, value: v, icon: MODELS[name].icon });
  }

  const months: { label: string; value: number }[] = [];
  const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(); d.setMonth(d.getMonth() - i);
    const start = new Date(d.getFullYear(), d.getMonth(), 1);
    const end = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    let v = 0; try { v = await (db as any)[D(primary)].count({ where: { createdAt: { gte: start, lt: end } } }); } catch {}
    months.push({ label: MON[start.getMonth()], value: v });
  }

  let statusBreak: { label: string; value: number }[] = [];
  if (pmeta?.statusField) {
    try { const g = await (db as any)[D(primary)].groupBy({ by: [pmeta.statusField], _count: { _all: true } });
      statusBreak = g.map((x: any) => ({ label: String(x[pmeta.statusField!] ?? "—"), value: x._count._all })); } catch {}
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Reports" subtitle="Key metrics across your workspace. Export concept ready for CSV." />
      <KpiGrid>
        {counts.slice(0, 4).map((c, i) => <KpiCard key={i} label={c.label} value={c.value} icon={getIcon(c.icon)} />)}
      </KpiGrid>
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>{pmeta?.labelPlural} over time</CardTitle></CardHeader>
          <CardContent><AreaChart data={months} height={240} /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>{statusBreak.length ? "By status" : "By volume"}</CardTitle></CardHeader>
          <CardContent>
            {statusBreak.length ? <DonutChart data={statusBreak} /> : <DonutChart data={counts.map(c => ({ label: c.label, value: c.value }))} />}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader><CardTitle>Records by type</CardTitle></CardHeader>
        <CardContent><BarChart data={counts.map(c => ({ label: c.label, value: c.value }))} height={220} /></CardContent>
      </Card>
    </div>
  );
}
`;
}

function settingsPage() {
  return `import { PageHeader, Card, CardHeader, CardTitle, CardContent, Field, Input, Button, Badge, Alert, Separator } from "@scaffold/engine";
import { APP } from "@/lib/app";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await requireUser();
  return (
    <div className="max-w-3xl space-y-6">
      <PageHeader title="Settings" subtitle="Manage your workspace and integrations." />
      <Alert tone="info">This is a demo scaffold. Settings are illustrative — wire them to your database and providers before going live.</Alert>
      <Card>
        <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name"><Input defaultValue={(user.name as any) ?? ""} /></Field>
            <Field label="Email"><Input defaultValue={(user.email as any) ?? ""} /></Field>
          </div>
          <div><Button>Save changes</Button></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Workspace</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Field label="Organization name"><Input defaultValue={APP.appName} /></Field>
          <Field label="Default currency"><Input defaultValue={APP.currency} /></Field>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Integrations</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[["Payments", "Mock mode", "warning"], ["Email / SMS", "Mock log", "warning"], ["Database", "SQLite (local)", "success"]].map(([k, v, t]) => (
            <div key={k as string}>
              <div className="flex items-center justify-between py-1">
                <span className="text-sm font-medium text-slate-700">{k}</span>
                <Badge tone={t as any}>{v}</Badge>
              </div>
              <Separator />
            </div>
          ))}
          <p className="text-sm text-slate-500">Add provider keys in <span className="font-mono">.env</span> to switch from mock mode to live.</p>
        </CardContent>
      </Card>
    </div>
  );
}
`;
}

/* ============================================================== home variants */
function marketingHomeStorefront(spec, meta) {
  const primary = spec.primary;
  const features = featureCards(spec);
  const stats = statStrip(spec);
  const prof = heroProfile(spec);
  const backdrop = prof.deep ? "grid" : spec.fonts.heading === "SERIF" ? "rings" : spec.fonts.heading === "GROTESK" ? "grid" : "mesh";
  return `import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer, CatalogGrid } from "@scaffold/engine";

export const dynamic = "force-dynamic";
const FEATURES = ${JSON.stringify(features)};
const STATS = ${JSON.stringify(stats)};

export default async function Home() {
  const PM = MODELS[${JSON.stringify(primary)}];
  let items: any[] = [];
  try { items = await (db as any)[${JSON.stringify(delegate(primary))}].findMany({ take: 6, orderBy: { createdAt: "desc" } }); } catch {}
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Browse " + PM.labelPlural, href: "/browse" }} />
      <Hero
        eyebrow={APP.category}
        title={APP.appName}
        subtitle={APP.tagline}
        primaryCta={{ label: "Browse " + PM.labelPlural, href: "/browse" }}
        secondaryCta={{ label: "Sign in", href: "/login" }}
        backdrop=${JSON.stringify(backdrop)}
        tone=${JSON.stringify(prof.tone)}
        aside={<HeroAside variant=${JSON.stringify(prof.aside)} tone=${JSON.stringify(prof.tone)} />}
      />
      <Section id="features">
        <SectionTitle center eyebrow="Why choose us" title="Everything you need, in one place" description="A modern, dependable experience built for real customers and the teams behind them." />
        <div className="mt-12"><FeatureGrid items={FEATURES} /></div>
      </Section>
      <Section muted>
        <SectionTitle eyebrow="Featured" title={"Popular " + PM.labelPlural} description={"A selection from our " + PM.labelPlural.toLowerCase() + ", ready to explore."} />
        <div className="mt-10"><CatalogGrid meta={PM} items={items} currency={APP.currency} hrefBase="/browse" /></div>
      </Section>
      <Section>
        <StatStrip stats={STATS} />
      </Section>
      <CTA title="Ready to get started?" subtitle={APP.tagline} cta={{ label: "Browse " + PM.labelPlural, href: "/browse" }} />
      <div id="contact"><Footer appName={APP.appName} tagline={APP.tagline} /></div>
    </div>
  );
}
`;
}

function marketingHomeLanding(spec, meta) {
  const features = featureCards(spec);
  const stats = statStrip(spec);
  const prof = heroProfile(spec);
  return `import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer, DemoForm, Card, CardContent } from "@scaffold/engine";

const FEATURES = ${JSON.stringify(features)};
const STATS = ${JSON.stringify(stats)};
const STEPS = [
  { icon: "search", title: "1 · Discover", description: "See what's on offer and decide if it's the right fit — no pressure, no spam." },
  { icon: "calendar", title: "2 · Reserve your spot", description: "Share a few details in seconds. Everything is validated and confirmed instantly." },
  { icon: "badge-check", title: "3 · You're set", description: "Get a confirmation and reminders. We handle the rest in the background." },
];
const FAQ = [
  { q: "Is this free to try?", a: "Yes — this demo runs entirely on sample data so you can explore every screen." },
  { q: "How do I get started?", a: "Fill in the short form below and you'll receive a confirmation right away." },
  { q: "Can I integrate real providers?", a: "Absolutely. The scaffold ships with mock modes and clear swap points for payments and email." },
];

export default function Home() {
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Get started", href: "/#contact" }} />
      <Hero eyebrow={APP.category} title={APP.appName} subtitle={APP.tagline}
        primaryCta={{ label: "Reserve your spot", href: "/#contact" }} secondaryCta={{ label: "Learn more", href: "/#features" }}
        backdrop=${JSON.stringify(prof.deep ? "grid" : "rings")} tone=${JSON.stringify(prof.tone)} />
      <Section id="features">
        <SectionTitle center eyebrow="What you get" title="Built to convert, easy to run" description="Everything below works locally on seed data and is ready to wire to real providers." />
        <div className="mt-12"><FeatureGrid items={FEATURES} /></div>
      </Section>
      <Section id="how" muted>
        <SectionTitle center eyebrow="How it works" title="Three simple steps" />
        <div className="mt-12"><FeatureGrid items={STEPS} columns={3} /></div>
      </Section>
      <Section><StatStrip stats={STATS} /></Section>
      <Section id="contact" muted>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Get started" title="Request your spot" description="Tell us where to reach you. Submissions are validated on the server; in demo mode we log instead of emailing." />
          </div>
          <Card>
            <CardContent className="pt-6">
              <DemoForm action="/api/enquiry"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "message", label: "Anything we should know?", type: "textarea" },
                ]}
                submitLabel="Reserve my spot"
                successTitle="You're on the list"
                successMessage="Thanks! In demo mode we logged your request instead of sending a real email."
              />
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section id="faq">
        <SectionTitle center eyebrow="FAQ" title="Questions, answered" />
        <div className="mx-auto mt-10 max-w-2xl divide-y divide-slate-200">
          {FAQ.map((f) => (
            <div key={f.q} className="py-5">
              <p className="font-medium text-slate-900">{f.q}</p>
              <p className="mt-1 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTA title="Ready when you are" subtitle={APP.tagline} cta={{ label: "Get started", href: "/#contact" }} />
      <Footer appName={APP.appName} tagline={APP.tagline} />
    </div>
  );
}
`;
}

function marketingHomeDashboard(spec, meta) {
  const features = featureCards(spec);
  const stats = statStrip(spec);
  const prof = heroProfile(spec);
  const backdrop = prof.deep ? "grid" : spec.fonts.heading === "GROTESK" ? "grid" : "mesh";
  return `import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer } from "@scaffold/engine";

const FEATURES = ${JSON.stringify(features)};
const STATS = ${JSON.stringify(stats)};

export default function Home() {
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={[{ label: "Features", href: "/#features" }, { label: "How it works", href: "/#how" }]} cta={{ label: "Open dashboard", href: "/app" }} />
      <Hero eyebrow={APP.category} title={APP.appName} subtitle={APP.tagline}
        primaryCta={{ label: "Open dashboard", href: "/app" }} secondaryCta={{ label: "Sign in", href: "/login" }}
        backdrop=${JSON.stringify(backdrop)} tone=${JSON.stringify(prof.tone)}
        aside={<HeroAside variant="dashboard" tone=${JSON.stringify(prof.tone)} />} />
      <Section id="features">
        <SectionTitle center eyebrow="Capabilities" title="One workspace for the whole workflow" description="Purpose-built screens, real data models, and reports — running locally on seed data." />
        <div className="mt-12"><FeatureGrid items={FEATURES} /></div>
      </Section>
      <Section id="how" muted><StatStrip stats={STATS} /></Section>
      <CTA title="See it in action" subtitle="Sign in with the demo account and explore every screen." cta={{ label: "Open the dashboard", href: "/app" }} />
      <Footer appName={APP.appName} tagline={APP.tagline} />
    </div>
  );
}
`;
}

/* ============================================================ storefront catalog */
function browsePage(spec) {
  const primary = spec.primary;
  return `import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Footer, CatalogGrid, SectionTitle } from "@scaffold/engine";

export const dynamic = "force-dynamic";
const META_NAME = ${JSON.stringify(primary)};

export default async function BrowsePage() {
  const PM = MODELS[META_NAME];
  let items: any[] = [];
  try { items = await (db as any)[${JSON.stringify(delegate(primary))}].findMany({ take: 24, orderBy: { createdAt: "desc" } }); } catch {}
  const filters = ["All", "Newest", "Popular", "Top rated"];
  return (
    <div className="min-h-screen bg-slate-50">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Sign in", href: "/login" }} />
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Browse" title={"Explore " + PM.labelPlural} description={"Showing " + items.length + " " + PM.labelPlural.toLowerCase() + " — all running on local seed data."} />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <div className="flex h-10 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-400 sm:max-w-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></svg>
            Search {PM.labelPlural.toLowerCase()}…
          </div>
          {filters.map((f, i) => (
            <span key={f} className={"cursor-default rounded-lg px-3 py-2 text-sm font-medium " + (i === 0 ? "bg-brand text-brand-fg" : "border border-slate-200 bg-white text-slate-600")}>{f}</span>
          ))}
        </div>
        <CatalogGrid meta={PM} items={items} currency={APP.currency} hrefBase="/browse" />
      </div>
      <Footer appName={APP.appName} tagline={APP.tagline} />
    </div>
  );
}
`;
}

function browseDetailPage(spec) {
  const primary = spec.primary;
  return `import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Footer, Badge, StatusBadge, DemoForm, Card, CardContent, ButtonLink, money, getIcon } from "@scaffold/engine";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const META_NAME = ${JSON.stringify(primary)};

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const PM = MODELS[META_NAME];
  let item: any = null;
  try { item = await (db as any)[${JSON.stringify(delegate(primary))}].findUnique({ where: { id } }); } catch {}
  if (!item) notFound();
  const Icon = getIcon(PM.icon);
  const title = item[PM.titleField] ?? PM.label;
  const desc = PM.subtitleField ? item[PM.subtitleField] : null;
  const price = PM.priceField ? Number(item[PM.priceField] ?? 0) : null;

  return (
    <div className="min-h-screen bg-slate-50">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Sign in", href: "/login" }} />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <ButtonLink href="/browse" variant="ghost" size="sm" className="mb-4">← Back to {PM.labelPlural}</ButtonLink>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="relative h-72 overflow-hidden rounded-2xl bg-gradient-to-br from-brand to-accent sm:h-96">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:18px_18px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.4),transparent_55%)]" />
              <span className="pointer-events-none absolute -bottom-8 right-2 select-none font-heading text-[11rem] font-bold leading-none text-white/15">{String(title).slice(0,1).toUpperCase()}</span>
              <Icon className="absolute bottom-6 right-6 h-20 w-20 text-white/30" />
              {PM.statusField && item[PM.statusField] ? <span className="absolute left-4 top-4"><StatusBadge status={item[PM.statusField]} /></span> : null}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["bg-gradient-to-br from-brand-soft to-slate-100","bg-gradient-to-tr from-slate-100 to-brand-soft","bg-gradient-to-br from-brand-soft via-slate-50 to-slate-100"].map((g, i) => <div key={i} className={g + " h-20 rounded-xl ring-1 ring-inset ring-slate-200/70"} />)}
            </div>
          </div>
          <div className="lg:col-span-2">
            <Badge tone="brand">{PM.label}</Badge>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900">{String(title)}</h1>
            {desc ? <p className="mt-3 leading-relaxed text-slate-600">{String(desc)}</p> : null}
            {price != null ? <p className="mt-5 text-3xl font-semibold text-slate-900">{money(price, APP.currency)}</p> : null}
            <div className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 font-heading font-semibold text-slate-900">Request to book</p>
                  <DemoForm action="/api/enquiry"
                    compact
                    fields={[
                      { name: "name", label: "Your name", required: true },
                      { name: "email", label: "Email", type: "email", required: true },
                      { name: "date", label: "Preferred date", type: "date" },
                      { name: "note", label: "Notes", type: "textarea" },
                    ]}
                    submitLabel="Send request"
                    successTitle="Request sent"
                    successMessage="Thanks! In demo mode we logged your request instead of emailing. Connect a provider to go live."
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer appName={APP.appName} tagline={APP.tagline} />
    </div>
  );
}
`;
}

function signupExtras(spec) {
  const files = {};
  files["app/signup/page.tsx"] = `import { MarketingHeader, Footer, DemoForm, Card, CardContent } from "@scaffold/engine";
import { APP, MARKETING_LINKS } from "@/lib/app";

export const metadata = { title: "Create account" };

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Sign in", href: "/login" }} />
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">Create your account</h1>
        <p className="mt-1 text-sm text-slate-500">It takes less than a minute. Validated on the server.</p>
        <Card className="mt-6">
          <CardContent className="pt-6">
            <DemoForm action="/api/auth/signup"
              fields={[
                { name: "name", label: "Full name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "password", label: "Password", required: true },
              ]}
              compact
              submitLabel="Create account"
              successTitle="Account created"
              successMessage="Your account was created in the local database. You can now sign in."
            />
            <p className="mt-4 text-center text-sm text-slate-500">Already have an account? <a href="/login" className="font-medium text-brand hover:underline">Sign in</a></p>
          </CardContent>
        </Card>
      </div>
      <Footer appName={APP.appName} tagline={APP.tagline} />
    </div>
  );
}
`;
  files["app/api/auth/signup/route.ts"] = `import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { hashPassword } from "@scaffold/engine/server";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Use at least 6 characters"),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const i of parsed.error.issues) errors[String(i.path[0])] = i.message;
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }
  const existing = await db.user.findUnique({ where: { email: parsed.data.email } }).catch(() => null);
  if (existing) return NextResponse.json({ ok: false, errors: { email: "That email is already registered" } }, { status: 400 });
  try {
    await db.user.create({ data: { name: parsed.data.name, email: parsed.data.email, passwordHash: await hashPassword(parsed.data.password), role: "member" } as any });
  } catch {
    return NextResponse.json({ ok: false, message: "Could not create account." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
`;
  return files;
}

/* ================================================================== assemble */
export function buildPages(spec, meta) {
  const f = {};
  // shared
  f["app/login/actions.ts"] = loginActions();
  f["app/login/page.tsx"] = loginPage(spec);
  f["app/api/enquiry/route.ts"] = enquiryRoute();
  f["app/app/layout.tsx"] = appLayout();
  f["app/app/page.tsx"] = dashboardPage(spec, meta);
  f["app/app/reports/page.tsx"] = reportsPage(spec);
  f["app/app/settings/page.tsx"] = settingsPage();

  for (const name of meta.managed) {
    const m = meta.models[name];
    const seg = m.route.replace("/app/", "");
    f[`app/app/${seg}/page.tsx`] = listPage(name);
    f[`app/app/${seg}/new/page.tsx`] = newPage(name);
    f[`app/app/${seg}/[id]/page.tsx`] = detailPage(name);
  }

  // home + public
  if (spec.kind === "storefront") {
    f["app/page.tsx"] = marketingHomeStorefront(spec, meta);
    f["app/browse/page.tsx"] = browsePage(spec);
    f["app/browse/[id]/page.tsx"] = browseDetailPage(spec);
    Object.assign(f, signupExtras(spec));
  } else if (spec.kind === "landing") {
    f["app/page.tsx"] = marketingHomeLanding(spec, meta);
  } else {
    f["app/page.tsx"] = marketingHomeDashboard(spec, meta);
  }

  return f;
}
