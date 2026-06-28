import { AppShell } from "@scaffold/engine";
import { APP, NAV } from "@/lib/app";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();
  return (
    <AppShell
      appName={APP.appName}
      nav={NAV}
      user={{ name: user.name as any, email: user.email as any, role: (user as any).role }}
    >
      {children}
    </AppShell>
  );
}
