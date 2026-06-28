import "server-only";
import { redirect } from "next/navigation";
import { getSessionUserId } from "@scaffold/engine/server";
import { db } from "./db";

export async function getCurrentUser() {
  const id = await getSessionUserId();
  if (!id) return null;
  try {
    return await db.user.findUnique({ where: { id } });
  } catch {
    return null;
  }
}

/** Guard for protected pages. Redirects to /login when signed out. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
}

/** Roles permitted to create records via the in-app admin forms. */
export const WRITE_ROLES: string[] = ["Pet Owner","Admin"];

/** True when the user holds a privileged role allowed to write. */
export function canWrite(user: { role?: string | null } | null): boolean {
  if (!user) return false;
  if (!WRITE_ROLES.length) return true;
  return WRITE_ROLES.includes(user.role ?? "");
}
