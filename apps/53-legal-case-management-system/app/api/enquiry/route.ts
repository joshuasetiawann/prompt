import { NextResponse } from "next/server";
import { z } from "zod";
import { mockNotify } from "@scaffold/engine/server";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
  note: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }
  // mock mode: log instead of sending a real email/SMS
  mockNotify("email", parsed.data.email, "We received your request", parsed.data.message);
  return NextResponse.json({ ok: true });
}
