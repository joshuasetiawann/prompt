import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { hashPassword } from "@scaffold/engine/server";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Use at least 6 characters"),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const i of parsed.error.issues) errors[String(i.path[0])] = i.message;
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }
  const existing = await db.user.findUnique({ where: { email: parsed.data.email } }).catch(() => null);
  if (existing) return NextResponse.json({ ok: false, errors: { email: "That email is already registered" } }, { status: 400 });
  try {
    await db.user.create({ data: { name: parsed.data.name, email: parsed.data.email, passwordHash: await hashPassword(parsed.data.password), role: "member" } as any });
  } catch {
    return NextResponse.json({ ok: false, message: "Could not create account." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
