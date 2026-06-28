import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer } from "@scaffold/engine";

const FEATURES = [{"icon":"sparkles","title":"Accounts with running balances","description":"Accounts with running balances"},{"icon":"sparkles","title":"Categorized transactions","description":"Categorized transactions"},{"icon":"sparkles","title":"Monthly budgets per category with","description":"Monthly budgets per category with progress"},{"icon":"sparkles","title":"Savings goals with contributions and","description":"Savings goals with contributions and progress"},{"icon":"sparkles","title":"Spending charts and monthly overview","description":"Spending charts and monthly overview"},{"icon":"search","title":"Date-range and category filters","description":"Date-range and category filters"}];
const STATS = [{"value":"18k+","label":"Happy customers"},{"value":"4.8★","label":"Store rating"},{"value":"48h","label":"Fast shipping"},{"value":"99%","label":"Order accuracy"}];

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
