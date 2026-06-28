import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer } from "@scaffold/engine";

const FEATURES = [{"icon":"file-text","title":"Applications to programs with documents","description":"Applications to programs with documents"},{"icon":"credit-card","title":"Application fee via mock payment","description":"Application fee via mock payment"},{"icon":"kanban","title":"Review pipeline: submitted, under review","description":"Review pipeline: submitted, under review, interview, decision"},{"icon":"calendar","title":"Interview scheduling","description":"Interview scheduling"},{"icon":"sparkles","title":"Decision and enrollment offer","description":"Decision and enrollment offer"},{"icon":"badge-check","title":"Role-scoped applicant access","description":"Role-scoped applicant access"}];
const STATS = [{"value":"9k+","label":"Learners"},{"value":"120+","label":"Lessons"},{"value":"94%","label":"Completion"},{"value":"4.9★","label":"Rating"}];

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
