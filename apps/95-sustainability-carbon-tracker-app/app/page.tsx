import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer } from "@scaffold/engine";

const FEATURES = [{"icon":"sparkles","title":"Activity logging with emission factors","description":"Activity logging with emission factors per category"},{"icon":"sparkles","title":"Footprint over time with category","description":"Footprint over time with category breakdowns"},{"icon":"sparkles","title":"Reduction goals with progress","description":"Reduction goals with progress"},{"icon":"sparkles","title":"Offset records reducing net footprint","description":"Offset records reducing net footprint"},{"icon":"search","title":"Filters by date range and","description":"Filters by date range and category"},{"icon":"sparkles","title":"Optional team rollup","description":"Optional team rollup"}];
const STATS = [{"value":"2.4k+","label":"Active users"},{"value":"99.9%","label":"Uptime"},{"value":"4.8★","label":"Customer rating"},{"value":"30%","label":"Time saved"}];

export default function Home() {
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={[{ label: "Features", href: "/#features" }, { label: "How it works", href: "/#how" }]} cta={{ label: "Open dashboard", href: "/app" }} />
      <Hero eyebrow={APP.category} title={APP.appName} subtitle={APP.tagline}
        primaryCta={{ label: "Open dashboard", href: "/app" }} secondaryCta={{ label: "Sign in", href: "/login" }}
        backdrop="grid" tone="deep"
        aside={<HeroAside variant="dashboard" tone="deep" />} />
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
