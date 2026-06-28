import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer, CatalogGrid } from "@scaffold/engine";

export const dynamic = "force-dynamic";
const FEATURES = [{"icon":"sparkles","title":"Tour packages with day-by-day itinerary","description":"Tour packages with day-by-day itinerary and inclusions"},{"icon":"sparkles","title":"Departures with capacity per package","description":"Departures  with capacity per package"},{"icon":"calendar","title":"Booking with traveler count and","description":"Booking with traveler count and per-person pricing"},{"icon":"credit-card","title":"Deposit and remaining-balance concept","description":"Deposit  and remaining-balance concept"},{"icon":"calendar","title":"Capacity-aware booking preventing oversold departures","description":"Capacity-aware booking preventing oversold departures"},{"icon":"calendar","title":"Booking status lifecycle and cancellation","description":"Booking status lifecycle and cancellation window"}];
const STATS = [{"value":"4.9★","label":"Average rating"},{"value":"12k+","label":"Bookings made"},{"value":"30+","label":"Destinations"},{"value":"24/7","label":"Support"}];

export default async function Home() {
  const PM = MODELS["Package"];
  let items: any[] = [];
  try { items = await (db as any)["package"].findMany({ take: 6, orderBy: { createdAt: "desc" } }); } catch {}
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Browse " + PM.labelPlural, href: "/browse" }} />
      <Hero
        eyebrow={APP.category}
        title={APP.appName}
        subtitle={APP.tagline}
        primaryCta={{ label: "Browse " + PM.labelPlural, href: "/browse" }}
        secondaryCta={{ label: "Sign in", href: "/login" }}
        backdrop="grid"
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
