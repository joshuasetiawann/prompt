import React from "react";
import { Plus, Star } from "lucide-react";
import { cn, money, fmtDate } from "./cn";
import { Card, CardContent, CardHeader, CardTitle, ButtonLink, Badge } from "./primitives";
import { PageHeader, DataTable, StatusBadge, KpiCard, KpiGrid, EmptyState, type Column } from "./data";
import { AreaChart, DonutChart } from "./charts";
import { getIcon } from "./icons";

export type ColumnMeta = {
  key: string;
  header: string;
  kind: "text" | "status" | "price" | "date" | "bool" | "relation" | "number";
  titleField?: string;
};
export type ModelMeta = {
  name: string;
  label: string;
  labelPlural: string;
  route: string;
  icon?: string;
  titleField: string;
  subtitleField?: string | null;
  statusField?: string | null;
  priceField?: string | null;
  dateField?: string | null;
  columns: ColumnMeta[];
};

function cellValue(row: any, c: ColumnMeta, currency = "USD") {
  const v = row[c.key];
  switch (c.kind) {
    case "status":
      return <StatusBadge status={v} />;
    case "price":
      return <span className="font-medium tabular-nums">{money(Number(v ?? 0), currency)}</span>;
    case "number":
      return <span className="tabular-nums">{v ?? 0}</span>;
    case "date":
      return <span className="text-slate-500">{v ? fmtDate(v) : "—"}</span>;
    case "bool":
      return v ? <Badge tone="success">Yes</Badge> : <Badge tone="neutral">No</Badge>;
    case "relation":
      return <span>{row[c.key]?.[c.titleField || "name"] ?? "—"}</span>;
    default: {
      const s = v == null ? "—" : String(v);
      return <span className={c.key === (c as any).titleKey ? "font-medium text-slate-900" : ""}>{s.length > 60 ? s.slice(0, 60) + "…" : s}</span>;
    }
  }
}

/* --------------------------------------------------------- CollectionView */
export function CollectionView({
  meta,
  rows,
  currency = "USD",
  newHref,
  filters,
}: {
  meta: ModelMeta;
  rows: any[];
  currency?: string;
  newHref?: string;
  filters?: string[];
}) {
  const columns: Column<any>[] = meta.columns.map((c) => ({
    key: c.key,
    header: c.header,
    align: c.kind === "price" || c.kind === "number" ? "right" : "left",
    render: (row) => cellValue(row, c, currency),
  }));
  columns.push({
    key: "_view",
    header: "",
    align: "right",
    render: (row) => (
      <ButtonLink href={`${meta.route}/${row.id}`} variant="ghost" size="sm">
        View
      </ButtonLink>
    ),
  });

  return (
    <div className="space-y-5">
      <PageHeader
        title={meta.labelPlural}
        subtitle={`${rows.length} ${rows.length === 1 ? meta.label.toLowerCase() : meta.labelPlural.toLowerCase()} in your workspace`}
        actions={
          newHref ? (
            <ButtonLink href={newHref}>
              <Plus className="h-4 w-4" /> New {meta.label}
            </ButtonLink>
          ) : null
        }
      />
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex h-10 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-400 shadow-sm sm:max-w-xs">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></svg>
          Search {meta.labelPlural.toLowerCase()}…
        </div>
        {(filters ?? ["All", "Recent", "Active"]).map((f, i) => (
          <span
            key={f}
            className={cn(
              "cursor-default rounded-lg px-3 py-2 text-sm font-medium",
              i === 0 ? "bg-brand text-brand-fg" : "border border-slate-200 bg-white text-slate-600",
            )}
          >
            {f}
          </span>
        ))}
      </div>
      <DataTable columns={columns} rows={rows} getKey={(r) => r.id} empty={`No ${meta.labelPlural.toLowerCase()} yet — create your first one.`} />
    </div>
  );
}

/* ------------------------------------------------------------- RecordView */
export function RecordView({
  meta,
  row,
  fields,
  currency = "USD",
}: {
  meta: ModelMeta;
  row: any;
  fields: { name: string; label: string; kind: ColumnMeta["kind"]; titleField?: string }[];
  currency?: string;
}) {
  const title = row[meta.titleField] ?? meta.label;
  return (
    <div className="space-y-5">
      <PageHeader
        title={String(title)}
        subtitle={meta.label + " detail"}
        actions={<ButtonLink href={meta.route} variant="outline">Back to {meta.labelPlural}</ButtonLink>}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className="border-b border-slate-100 pb-3">
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">{f.label}</dt>
                  <dd className="mt-1 text-sm text-slate-800">
                    {cellValue(row, { key: f.name, header: f.label, kind: f.kind, titleField: f.titleField }, currency)}
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
        <div className="space-y-5">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              {meta.statusField ? <StatusBadge status={row[meta.statusField]} /> : <Badge tone="brand">Record</Badge>}
              <p className="mt-3 text-sm text-slate-500">
                Created {row.createdAt ? fmtDate(row.createdAt) : "recently"}.
              </p>
            </CardContent>
          </Card>
          {meta.priceField ? (
            <Card>
              <CardHeader>
                <CardTitle>Amount</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold tracking-tight text-slate-900">
                  {money(Number(row[meta.priceField] ?? 0), currency)}
                </p>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- DashboardOverview */
export function DashboardOverview({
  greeting,
  subtitle,
  kpis,
  series,
  seriesTitle,
  breakdown,
  breakdownTitle,
  recent,
  recentColumns,
  recentTitle,
  currency = "USD",
}: {
  greeting: string;
  subtitle?: string;
  kpis: { label: string; value: string | number; delta?: number; icon?: string }[];
  series: { label: string; value: number }[];
  seriesTitle: string;
  breakdown?: { label: string; value: number }[];
  breakdownTitle?: string;
  recent: any[];
  recentColumns: ColumnMeta[];
  recentTitle: string;
  currency?: string;
}) {
  const cols: Column<any>[] = recentColumns.map((c) => ({
    key: c.key,
    header: c.header,
    align: c.kind === "price" || c.kind === "number" ? "right" : "left",
    render: (row) => cellValue(row, c, currency),
  }));
  return (
    <div className="space-y-6">
      <PageHeader title={greeting} subtitle={subtitle} />
      <KpiGrid>
        {kpis.map((k, i) => (
          <KpiCard key={i} label={k.label} value={k.value} delta={k.delta} icon={getIcon(k.icon)} />
        ))}
      </KpiGrid>
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{seriesTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <AreaChart data={series} height={240} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{breakdownTitle ?? "Breakdown"}</CardTitle>
          </CardHeader>
          <CardContent>
            {breakdown && breakdown.length ? (
              <DonutChart data={breakdown} />
            ) : (
              <EmptyState title="No data yet" />
            )}
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{recentTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={cols} rows={recent} getKey={(r) => r.id} empty="Nothing recorded yet." />
        </CardContent>
      </Card>
    </div>
  );
}

/* --------------------------------------------------------------- CatalogGrid */
/** Deterministic 0..1 from a string (stable across renders, no Math.random). */
function hashUnit(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 1000) / 1000;
}

/**
 * Card media treatments are all derived from the app's own brand + accent
 * colors (no rainbow), so a catalog reads as one cohesive collection.
 * Variation comes from gradient direction and which color dominates — never hue.
 */
const MEDIA = [
  "bg-gradient-to-br from-brand to-accent",
  "bg-gradient-to-tr from-accent to-brand",
  "bg-gradient-to-br from-brand via-brand to-accent",
  "bg-gradient-to-r from-accent via-brand to-brand",
  "bg-gradient-to-tr from-brand to-accent",
  "bg-gradient-to-br from-accent to-brand",
];

function RatingStars({ value }: { value: number }) {
  const rounded = Math.round(value);
  return (
    <span className="inline-flex items-center text-amber-400" aria-label={`Rated ${value.toFixed(1)} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={cn("h-3.5 w-3.5", i < rounded ? "fill-current" : "fill-transparent text-slate-300")} />
      ))}
    </span>
  );
}

export function CatalogCard({ meta, item, currency = "USD", hrefBase }: { meta: ModelMeta; item: any; i?: number; currency?: string; hrefBase?: string }) {
  const i = item.__i ?? 0;
  const Icon = getIcon(meta.icon);
  const media = MEDIA[i % MEDIA.length];
  const title = String(item[meta.titleField] ?? meta.label);
  const u = hashUnit(String(item.id ?? i));
  const rating = 3.9 + u * 1.0; // stable 3.9–4.9
  const reviews = 8 + Math.floor(u * 240);
  const hasPrice = !!meta.priceField;
  const subtitle = meta.subtitleField ? item[meta.subtitleField] : null;
  return (
    <a
      href={`${hrefBase ?? meta.route}/${item.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft"
    >
      <div className={cn("relative h-44 overflow-hidden", media)}>
        {/* fine dot texture */}
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:16px_16px]" />
        {/* corner light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.4),transparent_55%)]" />
        {/* large title monogram for identity + depth */}
        <span className="pointer-events-none absolute -bottom-5 right-1 select-none font-heading text-[7rem] font-bold leading-none text-white/15">
          {title.slice(0, 1).toUpperCase()}
        </span>
        {/* category chip */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm">
          <Icon className="h-3.5 w-3.5" /> {meta.label}
        </span>
        {meta.statusField && item[meta.statusField] ? (
          <span className="absolute right-3 top-3"><StatusBadge status={item[meta.statusField]} /></span>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 font-heading font-semibold text-slate-900 transition-colors group-hover:text-brand">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-1 line-clamp-2 text-sm text-slate-500">{String(subtitle)}</p>
        ) : null}
        {hasPrice ? (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
            <RatingStars value={rating} />
            <span className="font-semibold text-slate-700">{rating.toFixed(1)}</span>
            <span className="text-slate-400">· {reviews} reviews</span>
          </div>
        ) : null}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          {hasPrice ? (
            <span className="text-lg font-bold tracking-tight text-slate-900">{money(Number(item[meta.priceField!] ?? 0), currency)}</span>
          ) : (
            <span className="text-sm font-semibold text-brand">View details</span>
          )}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
            <span className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">View</span>
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export function CatalogGrid({ meta, items, currency = "USD", hrefBase }: { meta: ModelMeta; items: any[]; currency?: string; hrefBase?: string }) {
  if (!items.length) return <EmptyState title={`No ${meta.labelPlural.toLowerCase()} found`} description="Try adjusting your search or filters." />;
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <CatalogCard key={it.id} meta={meta} item={{ ...it, __i: i }} currency={currency} hrefBase={hrefBase} />
      ))}
    </div>
  );
}
