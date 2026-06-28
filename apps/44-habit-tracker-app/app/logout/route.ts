import { NextResponse } from "next/server";
import { clearSession } from "@scaffold/engine/server";

export async function GET(req: Request) {
  await clearSession();
  return NextResponse.redirect(new URL("/", req.url));
}
