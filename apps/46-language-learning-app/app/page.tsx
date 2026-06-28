import { db } from "@/lib/db";
import { APP, MODELS, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, HeroAside, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer, CatalogGrid } from "@scaffold/engine";

export const dynamic = "force-dynamic";
const FEATURES = [{"icon":"sparkles","title":"Lessons organized in a learning","description":"Lessons organized in a learning path"},{"icon":"calendar","title":"Vocabulary flashcards with a simple","description":"Vocabulary flashcards with a simple spaced-repetition schedule"},{"icon":"sparkles","title":"Quizzes with scoring and XP","description":"Quizzes with scoring and XP"},{"icon":"sparkles","title":"Streaks and daily goals","description":"Streaks and daily goals"},{"icon":"kanban","title":"Mastery tracking per vocabulary item","description":"Mastery tracking per vocabulary item"},{"icon":"chart","title":"Progress dashboard","description":"Progress dashboard"}];
const STATS = [{"value":"9k+","label":"Learners"},{"value":"120+","label":"Lessons"},{"value":"94%","label":"Completion"},{"value":"4.9★","label":"Rating"}];

export default async function Home() {
  const PM = MODELS["Lesson"];
  let items: any[] = [];
  try { items = await (db as any)["lesson"].findMany({ take: 6, orderBy: { createdAt: "desc" } }); } catch {}
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
