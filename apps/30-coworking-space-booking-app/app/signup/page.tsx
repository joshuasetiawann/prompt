import { MarketingHeader, Footer, DemoForm, Card, CardContent } from "@scaffold/engine";
import { APP, MARKETING_LINKS } from "@/lib/app";

export const metadata = { title: "Create account" };

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <MarketingHeader appName={APP.appName} links={MARKETING_LINKS} cta={{ label: "Sign in", href: "/login" }} />
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="font-heading text-2xl font-semibold text-slate-900">Create your account</h1>
        <p className="mt-1 text-sm text-slate-500">It takes less than a minute. Validated on the server.</p>
        <Card className="mt-6">
          <CardContent className="pt-6">
            <DemoForm action="/api/auth/signup"
              fields={[
                { name: "name", label: "Full name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "password", label: "Password", required: true },
              ]}
              compact
              submitLabel="Create account"
              successTitle="Account created"
              successMessage="Your account was created in the local database. You can now sign in."
            />
            <p className="mt-4 text-center text-sm text-slate-500">Already have an account? <a href="/login" className="font-medium text-brand hover:underline">Sign in</a></p>
          </CardContent>
        </Card>
      </div>
      <Footer appName={APP.appName} tagline={APP.tagline} />
    </div>
  );
}
