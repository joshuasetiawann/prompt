import { PageHeader, Card, CardHeader, CardTitle, CardContent, Field, Input, Button, Badge, Alert, Separator } from "@scaffold/engine";
import { APP } from "@/lib/app";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await requireUser();
  return (
    <div className="max-w-3xl space-y-6">
      <PageHeader title="Settings" subtitle="Manage your workspace and integrations." />
      <Alert tone="info">This is a demo scaffold. Settings are illustrative — wire them to your database and providers before going live.</Alert>
      <Card>
        <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name"><Input defaultValue={(user.name as any) ?? ""} /></Field>
            <Field label="Email"><Input defaultValue={(user.email as any) ?? ""} /></Field>
          </div>
          <div><Button>Save changes</Button></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Workspace</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Field label="Organization name"><Input defaultValue={APP.appName} /></Field>
          <Field label="Default currency"><Input defaultValue={APP.currency} /></Field>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Integrations</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[["Payments", "Mock mode", "warning"], ["Email / SMS", "Mock log", "warning"], ["Database", "SQLite (local)", "success"]].map(([k, v, t]) => (
            <div key={k as string}>
              <div className="flex items-center justify-between py-1">
                <span className="text-sm font-medium text-slate-700">{k}</span>
                <Badge tone={t as any}>{v}</Badge>
              </div>
              <Separator />
            </div>
          ))}
          <p className="text-sm text-slate-500">Add provider keys in <span className="font-mono">.env</span> to switch from mock mode to live.</p>
        </CardContent>
      </Card>
    </div>
  );
}
