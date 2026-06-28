import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer, CatalogGrid } from "@scaffold/engine";

export const dynamic = "force-dynamic";
const FEATURES = [{"icon":"boxes","title":"Size and color variants with","description":"Size and color variants with per-variant stock"},{"icon":"sparkles","title":"Wishlist per account","description":"Wishlist per account"},{"icon":"boxes","title":"Size guide on product pages","description":"Size guide on product pages"},{"icon":"calendar","title":"Lookbook/editorial collection pages","description":"Lookbook/editorial collection pages"},{"icon":"credit-card","title":"Persistent cart and mock checkout","description":"Persistent cart and mock checkout"},{"icon":"boxes","title":"Inventory handling and low-stock flags","description":"Inventory handling and low-stock flags"}];
const STATS = [{"value":"18k+","label":"Happy customers"},{"value":"4.8★","label":"Store rating"},{"value":"48h","label":"Fast shipping"},{"value":"99%","label":"Order accuracy"}];

export default async function Home() {
  const PM = MODELS["Product"];
  let items: any[] = [];
  try { items = await (db as any)["product"].findMany({ take: 6, orderBy: { createdAt: "desc" } }); } catch {}
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
