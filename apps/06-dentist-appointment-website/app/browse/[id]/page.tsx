import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Footer, Badge, StatusBadge, DemoForm, Card, CardContent, ButtonLink, money, getIcon } from "@scaffold/engine";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const META_NAME = "Service";

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const PM = MODELS[META_NAME];
  let item: any = null;
  try { item = await (db as any)["service"].findUnique({ where: { id } }); } catch {}
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
