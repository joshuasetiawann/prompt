import "server-only";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export const SESSION_COOKIE = "scaffold_session";

/* ------------------------------------------------------------------ passwords */
export async function hashPassword(plain: string) {
  return bcrypt.hash(plain, 10);
}
export async function verifyPassword(plain: string, hash: string) {
  try {
    return await bcrypt.compare(plain, hash);
  } catch {
    return false;
  }
}

/* -------------------------------------------------------------------- session */
/** Read the signed-in user id from the session cookie (demo cookie auth). */
export async function getSessionUserId(): Promise<string | null> {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value ?? null;
}

export async function setSession(userId: string) {
  const store = await cookies();
  store.set(SESSION_COOKIE, userId, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

/* ---------------------------------------------------- prisma client singleton */
/**
 * Each app generates its own Prisma client (custom output path).
 * Pass that client class in once; we keep a singleton across hot reloads.
 */
export function createPrisma<T>(PrismaClient: new (...args: any[]) => T): T {
  const g = globalThis as unknown as { __scaffold_prisma?: T };
  if (!g.__scaffold_prisma) g.__scaffold_prisma = new PrismaClient();
  return g.__scaffold_prisma;
}

/* ------------------------------------------------ mock payment + notification */
type MockLog = { at: string; channel: string; detail: Record<string, unknown> };
const memLog: MockLog[] = [];

/** Mock payment gateway — records an intent without charging anything. */
export function mockPayment(amount: number, meta: Record<string, unknown> = {}) {
  const ref = "PAY-" + Math.round(amount * 100).toString(36).toUpperCase() + "-" + (memLog.length + 1);
  memLog.push({ at: new Date().toISOString(), channel: "payment", detail: { amount, ref, ...meta } });
  // eslint-disable-next-line no-console
  console.log(`[mock-payment] charged ${amount} → ${ref} (mock mode, no real gateway)`);
  return { ok: true as const, ref, status: "paid" as const };
}

/** Mock email/SMS — logs locally instead of sending. Swap with a real provider via env. */
export function mockNotify(channel: "email" | "sms", to: string, subject: string, body?: string) {
  memLog.push({ at: new Date().toISOString(), channel, detail: { to, subject, body } });
  // eslint-disable-next-line no-console
  console.log(`[mock-notify:${channel}] → ${to} :: ${subject}`);
  return { ok: true as const };
}

export function getMockLog() {
  return memLog.slice(-50);
}
