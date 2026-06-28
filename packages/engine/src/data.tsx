import React from "react";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "./cn";
import { Badge } from "./primitives";

/* --------------------------------------------------------------- PageHeader */
export function PageHeader({
  title,
  subtitle,
  actions,
  className,
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div className="min-w-0">
        <h1 className="font-heading text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
    </div>
  );
}

/* ------------------------------------------------------------------- KpiCard */
export function KpiCard({
  label,
  value,
  delta,
  icon: Icon,
  hint,
}: {
  label: string;
  value: string | number;
  delta?: number;
  icon?: LucideIcon;
  hint?: string;
}) {
  const up = (delta ?? 0) >= 0;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{label}</span>
        {Icon ? (
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-soft text-brand">
            <Icon className="h-4 w-4" />
          </span>
        ) : null}
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{value}</div>
      <div className="mt-1 flex items-center gap-2">
        {typeof delta === "number" ? (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 text-xs font-medium",
              up ? "text-emerald-600" : "text-red-600",
            )}
          >
            {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
            {Math.abs(delta)}%
          </span>
        ) : null}
        {hint ? <span className="text-xs text-slate-400">{hint}</span> : null}
      </div>
    </div>
  );
}

export function KpiGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{children}</div>;
}

/* ----------------------------------------------------------------- DataTable */
export type Column<T> = {
  key: string;
  header: string;
  className?: string;
  render?: (row: T) => React.ReactNode;
  align?: "left" | "right" | "center";
};

export function DataTable<T extends Record<string, any>>({
  columns,
  rows,
  empty,
  getKey,
}: {
  columns: Column<T>[];
  rows: T[];
  empty?: React.ReactNode;
  getKey?: (row: T, i: number) => string | number;
}) {
  if (!rows.length) {
    return <EmptyState title="Nothing here yet" description={typeof empty === "string" ? empty : undefined}>{typeof empty !== "string" ? empty : null}</EmptyState>;
  }
  const alignCls = { left: "text-left", right: "text-right", center: "text-center" } as const;
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/70">
              {columns.map((c) => (
                <th
                  key={c.key}
                  className={cn(
                    "px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500",
                    alignCls[c.align ?? "left"],
                    c.className,
                  )}
                >
                  {c.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, i) => (
              <tr key={getKey ? getKey(row, i) : i} className="transition-colors hover:bg-slate-50/60">
                {columns.map((c) => (
                  <td
                    key={c.key}
                    className={cn(
                      "px-4 py-3 text-slate-700",
                      alignCls[c.align ?? "left"],
                      c.className,
                    )}
                  >
                    {c.render ? c.render(row) : (row[c.key] ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- EmptyState */
export function EmptyState({
  title,
  description,
  icon: Icon,
  children,
  className,
}: {
  title: string;
  description?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-14 text-center",
        className,
      )}
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
        {Icon ? <Icon className="h-6 w-6" /> : <span className="text-lg">✦</span>}
      </span>
      <div>
        <p className="font-medium text-slate-900">{title}</p>
        {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
      </div>
      {children}
    </div>
  );
}

/* --------------------------------------------------------------- StatusBadge */
const STATUS_TONE: Record<string, React.ComponentProps<typeof Badge>["tone"]> = {
  active: "success",
  confirmed: "success",
  completed: "success",
  paid: "success",
  approved: "success",
  published: "success",
  done: "success",
  open: "info",
  pending: "warning",
  processing: "info",
  "in progress": "info",
  "in_progress": "info",
  review: "purple",
  draft: "neutral",
  scheduled: "info",
  cancelled: "danger",
  canceled: "danger",
  rejected: "danger",
  failed: "danger",
  overdue: "danger",
  "no-show": "danger",
  "no_show": "danger",
  closed: "neutral",
  archived: "neutral",
  inactive: "neutral",
};

export function StatusBadge({ status }: { status?: string | null }) {
  const s = (status ?? "").toString();
  const tone = STATUS_TONE[s.toLowerCase()] ?? "neutral";
  const label = s ? s.replace(/[_-]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()) : "—";
  return <Badge tone={tone}>{label}</Badge>;
}

/* --------------------------------------------------------------- SectionTitle */
export function SectionTitle({
  eyebrow,
  title,
  description,
  center,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-slate-600">{description}</p> : null}
    </div>
  );
}
