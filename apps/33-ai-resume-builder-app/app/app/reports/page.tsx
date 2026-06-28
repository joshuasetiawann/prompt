import { db } from "@/lib/db";
import { APP, MODELS, MANAGED } from "@/lib/app";
import { PageHeader, Card, CardHeader, CardTitle, CardContent, BarChart, AreaChart, DonutChart, KpiGrid, KpiCard, getIcon } from "@scaffold/engine";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
const D = (n: string) => n.charAt(0).toLowerCase() + n.slice(1);

export default async function ReportsPage() {
  await requireUser();
  const primary = "Resume";
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
