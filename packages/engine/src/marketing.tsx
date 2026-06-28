import React from "react";
import { Calendar, TrendingUp, Star, ArrowUpRight, Users, Search } from "lucide-react";
import { getIcon } from "./icons";
import { cn } from "./cn";
import { ButtonLink } from "./primitives";

/** Decorative gradient/pattern backdrop — no external images, fully offline. */
export function HeroBackdrop({ variant = "mesh", tone = "light" }: { variant?: "mesh" | "grid" | "rings"; tone?: "light" | "deep" }) {
  const deep = tone === "deep";
  if (variant === "grid") {
    return (
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className={cn("absolute inset-0", deep
          ? "[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px]"
          : "[background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:36px_36px]")} />
        <div className={cn("absolute left-1/2 top-0 h-[440px] w-[860px] -translate-x-1/2 rounded-full blur-3xl", deep ? "bg-brand/30" : "bg-brand/15")} />
        <div className={cn("absolute -right-10 bottom-0 h-64 w-64 rounded-full blur-3xl", deep ? "bg-accent/25" : "bg-accent/10")} />
      </div>
    );
  }
  if (variant === "rings") {
    return (
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className={cn("absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border", deep ? "border-white/15" : "border-brand/20")} />
        <div className={cn("absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border", deep ? "border-accent/40" : "border-accent/30")} />
        <div className={cn("absolute right-10 top-10 h-44 w-44 rounded-full blur-2xl", deep ? "bg-accent/30" : "bg-accent/20")} />
        <div className={cn("absolute -left-16 bottom-0 h-72 w-72 rounded-full blur-3xl", deep ? "bg-brand/30" : "bg-brand/10")} />
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={cn("absolute -left-24 top-0 h-[440px] w-[440px] rounded-full blur-3xl", deep ? "bg-brand/40" : "bg-brand/20")} />
      <div className={cn("absolute right-0 top-24 h-[380px] w-[380px] rounded-full blur-3xl", deep ? "bg-accent/30" : "bg-accent/20")} />
      {deep ? <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:22px_22px]" /> : null}
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backdrop = "mesh",
  tone = "light",
  align,
  aside,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backdrop?: "mesh" | "grid" | "rings";
  tone?: "light" | "deep";
  align?: "center" | "left";
  aside?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const deep = tone === "deep";
  const split = !!aside;
  const center = (align ?? (split ? "left" : "center")) === "center";
  return (
    <section className={cn("relative overflow-hidden border-b", deep ? "border-white/10 bg-slate-950 text-white" : "border-slate-200 bg-white")}>
      <HeroBackdrop variant={backdrop} tone={tone} />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className={cn(split ? "grid items-center gap-12 lg:grid-cols-2" : center ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
          <div className={cn(center && "text-center")}>
            {eyebrow ? (
              <span className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                deep ? "border border-white/15 bg-white/10 text-white/90" : "border border-brand/20 bg-brand-soft text-brand",
              )}>
                {eyebrow}
              </span>
            ) : null}
            <h1 className={cn("mt-5 font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl", deep ? "text-white" : "text-slate-900")}>
              {title}
            </h1>
            {subtitle ? (
              <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed", center && "mx-auto", deep ? "text-slate-300" : "text-slate-600")}>{subtitle}</p>
            ) : null}
            {primaryCta || secondaryCta ? (
              <div className={cn("mt-8 flex flex-col gap-3 sm:flex-row", center && "items-center justify-center")}>
                {primaryCta ? (
                  <ButtonLink href={primaryCta.href} size="lg" variant={deep ? "accent" : "primary"} className="w-full sm:w-auto">
                    {primaryCta.label}
                  </ButtonLink>
                ) : null}
                {secondaryCta ? (
                  <ButtonLink href={secondaryCta.href} size="lg" variant="outline" className={cn("w-full sm:w-auto", deep && "border-white/25 bg-white/5 text-white hover:bg-white/10")}>
                    {secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </div>
            ) : null}
          </div>
          {aside ? <div className="relative">{aside}</div> : null}
        </div>
        {children ? <div className="mt-14">{children}</div> : null}
      </div>
    </section>
  );
}

/** Contextual hero visual that reinforces each category's identity (offline, palette-driven). */
export function HeroAside({ variant = "dashboard", tone = "light" }: { variant?: "dashboard" | "collage" | "booking" | "stats"; tone?: "light" | "deep" }) {
  const deep = tone === "deep";
  const panel = deep ? "bg-white/[0.06] ring-1 ring-inset ring-white/10 backdrop-blur" : "bg-white ring-1 ring-inset ring-slate-200 shadow-lift";
  const muted = deep ? "bg-white/[0.04]" : "bg-slate-50";
  const bar = deep ? "bg-white/15" : "bg-slate-200";

  if (variant === "collage") {
    const tiles = ["from-brand to-accent", "from-accent to-brand", "from-brand via-brand to-accent", "from-accent via-brand to-brand"];
    return (
      <div className="grid grid-cols-2 gap-4">
        {tiles.map((g, i) => (
          <div key={i} className={cn("relative h-40 overflow-hidden rounded-2xl bg-gradient-to-br shadow-lift", g, i % 2 ? "translate-y-5" : "")}>
            <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:15px_15px]" />
            <span className="pointer-events-none absolute -bottom-3 right-1 select-none font-heading text-6xl font-bold leading-none text-white/15">{String.fromCharCode(65 + i)}</span>
            <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/85 px-2 py-0.5 text-xs font-semibold text-slate-900">{["$129", "$84", "$219", "$56"][i]}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "booking") {
    return (
      <div className={cn("rounded-2xl p-5 sm:p-6", panel)}>
        <div className="flex items-center justify-between">
          <span className={cn("font-heading font-semibold", deep ? "text-white" : "text-slate-900")}>Check availability</span>
          <span className="inline-flex items-center gap-1 text-sm text-amber-400"><Star className="h-4 w-4 fill-current" /><span className={deep ? "text-white/80" : "text-slate-600"}>4.9</span></span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {["Check in", "Check out"].map((l) => (
            <div key={l} className={cn("rounded-xl px-3 py-2 ring-1 ring-inset", deep ? "bg-white/[0.06] ring-white/10" : "bg-slate-50 ring-slate-200")}>
              <div className={cn("flex items-center gap-1.5 text-[11px]", deep ? "text-white/60" : "text-slate-400")}><Calendar className="h-3.5 w-3.5" />{l}</div>
              <div className={cn("mt-1 text-sm font-medium", deep ? "text-white" : "text-slate-700")}>Select date</div>
            </div>
          ))}
        </div>
        <div className={cn("mt-3 flex items-center justify-between rounded-xl px-3 py-2 ring-1 ring-inset", deep ? "bg-white/[0.06] ring-white/10" : "bg-slate-50 ring-slate-200")}>
          <div className={cn("flex items-center gap-1.5 text-[11px]", deep ? "text-white/60" : "text-slate-400")}><Users className="h-3.5 w-3.5" />Guests</div>
          <div className={cn("text-sm font-medium", deep ? "text-white" : "text-slate-700")}>2 adults</div>
        </div>
        <div className="mt-4 grid h-11 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent text-sm font-semibold text-white shadow-sm">
          <span className="inline-flex items-center gap-2"><Search className="h-4 w-4" />Search availability</span>
        </div>
      </div>
    );
  }

  if (variant === "stats") {
    const cells: [string, string][] = [["12k+", "Active users"], ["4.9★", "Avg rating"], ["99.9%", "Uptime"], ["+30%", "Time saved"]];
    return (
      <div className="grid grid-cols-2 gap-4">
        {cells.map(([v, l], i) => (
          <div key={i} className={cn("rounded-2xl p-5", panel, i % 2 ? "translate-y-5" : "")}>
            <div className={cn("font-heading text-3xl font-bold", deep ? "text-white" : "text-slate-900")}>{v}</div>
            <div className={cn("mt-1 text-sm", deep ? "text-slate-400" : "text-slate-500")}>{l}</div>
          </div>
        ))}
      </div>
    );
  }

  // dashboard preview (default)
  return (
    <div className={cn("rounded-2xl p-4 sm:p-5", panel)}>
      <div className="flex items-center gap-1.5 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className={cn("ml-3 h-2 w-24 rounded-full", bar)} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {(["Revenue", "Active", "Growth"] as const).map((label, i) => (
          <div key={label} className="rounded-xl bg-gradient-to-br from-brand to-accent p-3 text-white">
            <div className="text-[10px] uppercase tracking-wide text-white/80">{label}</div>
            <div className="mt-1 font-heading text-base font-bold">{["$48k", "1,204", "+18%"][i]}</div>
          </div>
        ))}
      </div>
      <div className={cn("mt-3 rounded-xl p-3", muted)}>
        <svg viewBox="0 0 200 64" preserveAspectRatio="none" className="h-20 w-full">
          <polyline points="0,50 28,42 56,46 84,24 112,32 140,16 168,22 200,12" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="0,50 28,42 56,46 84,24 112,32 140,16 168,22 200,12 200,64 0,64" fill="var(--brand)" opacity="0.1" stroke="none" />
        </svg>
      </div>
      <div className="mt-3 space-y-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand to-accent" />
            <span className={cn("h-2 flex-1 rounded-full", bar)} />
            <span className={cn("h-2 w-10 rounded-full", bar)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Section({
  className,
  children,
  muted,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  muted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn(muted ? "bg-slate-50" : "bg-white", "border-b border-slate-200")}>
      <div className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8", className)}>{children}</div>
    </section>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { icon?: string; title: string; description: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={cn("grid grid-cols-1 gap-5", cols)}>
      {items.map((f, i) => {
        const Icon = getIcon(f.icon);
        return (
          <div key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-sm ring-1 ring-inset ring-white/20 transition-transform duration-300 group-hover:scale-105">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-heading text-base font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export function StatStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <div className="font-heading text-3xl font-bold text-slate-900">{s.value}</div>
          <div className="mt-1 text-sm text-slate-500">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function CTA({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle?: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center shadow-lift">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-black/10" />
          <h2 className="relative font-heading text-2xl font-bold text-brand-fg sm:text-3xl">{title}</h2>
          {subtitle ? <p className="relative mx-auto mt-3 max-w-xl text-brand-fg/80">{subtitle}</p> : null}
          <div className="relative mt-7">
            <ButtonLink href={cta.href} size="lg" variant="primary" className="bg-white text-brand shadow-card hover:bg-white/90">
              {cta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ appName, tagline }: { appName: string; tagline?: string }) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-brand-fg">
                {appName.slice(0, 1)}
              </span>
              <span className="font-heading text-base font-semibold text-white">{appName}</span>
            </div>
            {tagline ? <p className="mt-3 text-sm leading-relaxed text-slate-400">{tagline}</p> : null}
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            {[
              { h: "Product", items: ["Features", "Pricing", "FAQ"] },
              { h: "Company", items: ["About", "Contact", "Careers"] },
              { h: "Legal", items: ["Privacy", "Terms", "Security"] },
            ].map((col) => (
              <div key={col.h}>
                <p className="font-semibold text-white">{col.h}</p>
                <ul className="mt-3 space-y-2">
                  {col.items.map((it) => (
                    <li key={it}>
                      <span className="text-slate-400 transition-colors hover:text-white">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          © {appName}. Demo scaffold built for local development. All data is seeded sample data.
        </div>
      </div>
    </footer>
  );
}
