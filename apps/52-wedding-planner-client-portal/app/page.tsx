import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer } from "@scaffold/engine";

const FEATURES = [{"icon":"sparkles","title":"Per-wedding timeline with milestone tasks","description":"Per-wedding timeline with milestone tasks and due dates"},{"icon":"kanban","title":"Budget tracker with estimated vs","description":"Budget tracker with estimated vs actual per category"},{"icon":"calendar","title":"Vendor directory with booking status","description":"Vendor directory with booking status and contacts"},{"icon":"kanban","title":"Guest list with RSVP and","description":"Guest list with RSVP and meal choice tracking"},{"icon":"file-text","title":"Shared documents and contracts","description":"Shared documents and contracts"},{"icon":"sparkles","title":"Planner templates to spin up","description":"Planner templates to spin up a new wedding"}];
const STATS = [{"value":"9k+","label":"Learners"},{"value":"120+","label":"Lessons"},{"value":"94%","label":"Completion"},{"value":"4.9★","label":"Rating"}];

export default function Home() {
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={[{ label: "Features", href: "/#features" }, { label: "How it works", href: "/#how" }]} cta={{ label: "Open dashboard", href: "/app" }} />
      <Hero eyebrow={APP.category} title={APP.appName} subtitle={APP.tagline}
        primaryCta={{ label: "Open dashboard", href: "/app" }} secondaryCta={{ label: "Sign in", href: "/login" }}
        backdrop="mesh" tone="light"
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
