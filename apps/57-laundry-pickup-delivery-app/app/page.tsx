import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer } from "@scaffold/engine";

const FEATURES = [{"icon":"boxes","title":"Service catalog with per-item or","description":"Service catalog with per-item or per-kg pricing"},{"icon":"calendar","title":"Pickup and delivery time-slot scheduling","description":"Pickup and delivery time-slot scheduling"},{"icon":"credit-card","title":"Mock checkout and order placement","description":"Mock checkout and order placement"},{"icon":"calendar","title":"Order status: scheduled, picked up","description":"Order status: scheduled, picked up, processing, out for delivery, delivered"},{"icon":"sparkles","title":"Driver assignment and route list","description":"Driver assignment and route list"},{"icon":"calendar","title":"Address book per customer","description":"Address book per customer"}];
const STATS = [{"value":"2.4k+","label":"Active users"},{"value":"99.9%","label":"Uptime"},{"value":"4.8★","label":"Customer rating"},{"value":"30%","label":"Time saved"}];

export default function Home() {
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={[{ label: "Features", href: "/#features" }, { label: "How it works", href: "/#how" }]} cta={{ label: "Open dashboard", href: "/app" }} />
      <Hero eyebrow={APP.category} title={APP.appName} subtitle={APP.tagline}
        primaryCta={{ label: "Open dashboard", href: "/app" }} secondaryCta={{ label: "Sign in", href: "/login" }}
        backdrop="grid" tone="light"
        aside={<HeroAside variant="dashboard" tone="light" />} />
      <Section id="features">
        <SectionTitle center eyebrow="Capabilities" title="One workspace for the whole workflow" description="Purpose-built screens, real data models, and reports — running locally on seed data." />
        <div className="mt-12"><FeatureGrid items={FEATURES} /></div>
      </Section>
      <Section id="how" muted><StatStrip stats={STATS} /></Section>
      <CTA title="See it in action" subtitle="Sign in with the demo account and explore every screen." cta={{ label: "Open the dashboard", href: "/app" }} />
      <Footer appName={APP.appName} tagline={APP.tagline} />
    </div>
  );
}
