import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer } from "@scaffold/engine";

const FEATURES = [{"icon":"sparkles","title":"Course enrollment and rosters","description":"Course enrollment and rosters"},{"icon":"sparkles","title":"Grades per assignment and course","description":"Grades per assignment and course averages"},{"icon":"sparkles","title":"Assignments with due dates and","description":"Assignments with due dates and submission concept"},{"icon":"calendar","title":"Timetable/schedule view","description":"Timetable/schedule view"},{"icon":"sparkles","title":"Announcements","description":"Announcements"},{"icon":"sparkles","title":"Teacher grading and assignment posting","description":"Teacher grading and assignment posting"}];
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
