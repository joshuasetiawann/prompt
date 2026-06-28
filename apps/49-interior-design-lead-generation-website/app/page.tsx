import { APP, MARKETING_LINKS } from "@/lib/app";
import { MarketingHeader, Hero, Section, SectionTitle, FeatureGrid, StatStrip, CTA, Footer, DemoForm, Card, CardContent } from "@scaffold/engine";

const FEATURES = [{"icon":"sparkles","title":"Image-led portfolio gallery with project","description":"Image-led portfolio gallery with project detail"},{"icon":"sparkles","title":"Services and process sections","description":"Services and process sections"},{"icon":"sparkles","title":"Testimonials and trust elements","description":"Testimonials and trust elements"},{"icon":"sparkles","title":"Consultation form capturing leads","description":"Consultation form  capturing leads"},{"icon":"settings","title":"Lead status in a simple","description":"Lead status  in a simple admin view"},{"icon":"star","title":"SEO metadata and social preview","description":"SEO metadata and social preview"}];
const STATS = [{"value":"2.4k+","label":"Active users"},{"value":"99.9%","label":"Uptime"},{"value":"4.8★","label":"Customer rating"},{"value":"30%","label":"Time saved"}];
const STEPS = [
  { icon: "search", title: "1 · Discover", description: "See what's on offer and decide if it's the right fit — no pressure, no spam." },
  { icon: "calendar", title: "2 · Reserve your spot", description: "Share a few details in seconds. Everything is validated and confirmed instantly." },
  { icon: "badge-check", title: "3 · You're set", description: "Get a confirmation and reminders. We handle the rest in the background." },
];
const FAQ = [
  { q: "Is this free to try?", a: "Yes — this demo runs entirely on sample data so you can explore every screen." },
  { q: "How do I get started?", a: "Fill in the short form below and you'll receive a confirmation right away." },
  { q: "Can I integrate real providers?", a: "Absolutely. The scaffold ships with mock modes and clear swap points for payments and email." },
];

export default function Home() {
  return (
    <div className="bg-white">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Get started", href: "/#contact" }} />
      <Hero eyebrow={APP.category} title={APP.appName} subtitle={APP.tagline}
        primaryCta={{ label: "Reserve your spot", href: "/#contact" }} secondaryCta={{ label: "Learn more", href: "/#features" }}
        backdrop="rings" tone="light" />
      <Section id="features">
        <SectionTitle center eyebrow="What you get" title="Built to convert, easy to run" description="Everything below works locally on seed data and is ready to wire to real providers." />
        <div className="mt-12"><FeatureGrid items={FEATURES} /></div>
      </Section>
      <Section id="how" muted>
        <SectionTitle center eyebrow="How it works" title="Three simple steps" />
        <div className="mt-12"><FeatureGrid items={STEPS} columns={3} /></div>
      </Section>
      <Section><StatStrip stats={STATS} /></Section>
      <Section id="contact" muted>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Get started" title="Request your spot" description="Tell us where to reach you. Submissions are validated on the server; in demo mode we log instead of emailing." />
          </div>
          <Card>
            <CardContent className="pt-6">
              <DemoForm action="/api/enquiry"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "message", label: "Anything we should know?", type: "textarea" },
                ]}
                submitLabel="Reserve my spot"
                successTitle="You're on the list"
                successMessage="Thanks! In demo mode we logged your request instead of sending a real email."
              />
            </CardContent>
          </Card>
        </div>
      </Section>
      <Section id="faq">
        <SectionTitle center eyebrow="FAQ" title="Questions, answered" />
        <div className="mx-auto mt-10 max-w-2xl divide-y divide-slate-200">
          {FAQ.map((f) => (
            <div key={f.q} className="py-5">
              <p className="font-medium text-slate-900">{f.q}</p>
              <p className="mt-1 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTA title="Ready when you are" subtitle={APP.tagline} cta={{ label: "Get started", href: "/#contact" }} />
      <Footer appName={APP.appName} tagline={APP.tagline} />
    </div>
  );
}
