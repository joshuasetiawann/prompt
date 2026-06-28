import { db } from "@/lib/db";
import { APP, MODELS } from "@/lib/app";
import { CollectionView } from "@scaffold/engine";
import { requireUser } from "@/lib/auth";

export const dynamic = "force-dynamic";
const META = MODELS["Membership"];

export const metadata = { title: META.labelPlural };

export default async function Page() {
  await requireUser();
  const include: any = {};
  for (const c of META.columns) if (c.kind === "relation") include[c.key] = true;
  let rows: any[] = [];
  try { rows = await (db as any)["membership"].findMany({ take: 50, orderBy: { createdAt: "desc" }, include }); } catch {}
  return <CollectionView meta={META} rows={rows} currency={APP.currency} newHref={META.route + "/new"} />;
}
