import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer, CatalogGrid } from "@scaffold/engine";

export const dynamic = "force-dynamic";
const FEATURES = [{"icon":"calendar","title":"Reservations by time slot and","description":"Reservations by time slot and party size with capacity"},{"icon":"boxes","title":"Table inventory and seating assignment","description":"Table inventory and seating assignment"},{"icon":"calendar","title":"Conflict-free booking against table capacity","description":"Conflict-free booking against table capacity and hours"},{"icon":"sparkles","title":"Waitlist with estimated wait","description":"Waitlist with estimated wait"},{"icon":"repeat","title":"Modify and cancel within policy","description":"Modify and cancel within policy"},{"icon":"kanban","title":"No-show tracking","description":"No-show tracking"}];
const STATS = [{"value":"4.9★","label":"Average rating"},{"value":"12k+","label":"Bookings made"},{"value":"30+","label":"Destinations"},{"value":"24/7","label":"Support"}];

export default async function Home() {
  const PM = MODELS["Reservation"];
  let items: any[] = [];
  try { items = await (db as any)["reservation"].findMany({ take: 6, orderBy: { createdAt: "desc" } }); } catch {}
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
        aside={<HeroAside variant="booking" tone="light" />}
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
