import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { WRITABLE } from "@/lib/forms";
import { getCurrentUser, canWrite } from "@/lib/auth";

// Admin/staff create endpoint for the in-app "New record" forms.
// Requires an authenticated session AND a privileged role (see WRITE_ROLES);
// only models declared in WRITABLE are accepted.
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ ok: false, message: "Sign in to continue." }, { status: 401 });
  if (!canWrite(user)) return NextResponse.json({ ok: false, message: "You do not have permission to do that." }, { status: 403 });

  const url = new URL(req.url);
  const model = url.searchParams.get("model") || "";
  const conf = WRITABLE[model];
  if (!conf) return NextResponse.json({ ok: false, message: "Unknown form." }, { status: 400 });

  const body = await req.json().catch(() => ({} as Record<string, unknown>));
  const data: Record<string, unknown> = {};
  const errors: Record<string, string> = {};

  for (const f of conf.fields) {
    let v: any = (body as any)[f.name];
    if (f.required && (v == null || String(v).trim() === "")) {
      errors[f.name] = f.label + " is required";
      continue;
    }
    if (v == null || v === "") continue;
    if (f.type === "number") v = Number(v);
    else if (f.type === "date") v = new Date(v);
    data[f.name] = v;
  }
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 400 });

  try {
    // @ts-ignore dynamic delegate
    await db[conf.delegate].create({ data });
  } catch (e) {
    return NextResponse.json({ ok: false, message: "Could not save your submission." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
