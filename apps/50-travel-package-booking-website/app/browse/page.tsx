import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Footer, CatalogGrid, SectionTitle } from "@scaffold/engine";

export const dynamic = "force-dynamic";
const META_NAME = "Package";

export default async function BrowsePage() {
  const PM = MODELS[META_NAME];
  let items: any[] = [];
  try { items = await (db as any)["package"].findMany({ take: 24, orderBy: { createdAt: "desc" } }); } catch {}
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
