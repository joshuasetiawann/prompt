import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer, CatalogGrid } from "@scaffold/engine";

export const dynamic = "force-dynamic";
const FEATURES = [{"icon":"search","title":"Multi-filter search and sorting","description":"Multi-filter search and sorting"},{"icon":"sparkles","title":"Property detail with image gallery","description":"Property detail with image gallery and key specs"},{"icon":"sparkles","title":"Save favorites","description":"Save favorites"},{"icon":"sparkles","title":"Inquiry form creating a lead","description":"Inquiry form creating a lead tied to a property and agent"},{"icon":"settings","title":"Agent listing CRUD with photos","description":"Agent listing CRUD with photos and status"},{"icon":"kanban","title":"Leads inbox with status","description":"Leads inbox with status"}];
const STATS = [{"value":"18k+","label":"Happy customers"},{"value":"4.8★","label":"Store rating"},{"value":"48h","label":"Fast shipping"},{"value":"99%","label":"Order accuracy"}];

export default async function Home() {
  const PM = MODELS["Property"];
  let items: any[] = [];
  try { items = await (db as any)["property"].findMany({ take: 6, orderBy: { createdAt: "desc" } }); } catch {}
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Browse " + PM.labelPlural, href: "/browse" }} />
      <Hero
        eyebrow={APP.category}
        title={APP.appName}
        subtitle={APP.tagline}
        primaryCta={{ label: "Browse " + PM.labelPlural, href: "/browse" }}
        secondaryCta={{ label: "Sign in", href: "/login" }}
        backdrop="rings"
        tone="light"
        aside={<HeroAside variant="collage" tone="light" />}
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
