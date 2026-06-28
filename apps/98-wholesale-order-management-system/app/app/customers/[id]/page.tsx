import { db } from "@/lib/db";
import { APP, MODELS } from "@/lib/app";
import { RecordView } from "@scaffold/engine";
import { requireUser } from "@/lib/auth";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
const META = MODELS["Customer"];

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await params;
  const include: any = {};
  for (const f of (META as any).detailFields) if (f.kind === "relation") include[f.name] = true;
  let row: any = null;
  try { row = await (db as any)["customer"].findUnique({ where: { id }, include }); } catch {}
  if (!row) notFound();
  return <RecordView meta={META} row={row} fields={(META as any).detailFields} currency={APP.currency} />;
}
