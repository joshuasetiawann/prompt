import { db } from "@/lib/db";
import { APP, MODELS, MANAGED } from "@/lib/app";
import { DashboardOverview } from "@scaffold/engine";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
const D = (n: string) => n.charAt(0).toLowerCase() + n.slice(1);

export default async function DashboardPage() {
  const user = await requireUser();
  const primary = "Field";
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
