"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Menu, X, LogOut, ChevronDown, Search } from "lucide-react";
import { cn } from "./cn";
import { getIcon } from "./icons";
import { Avatar } from "./primitives";

export type NavItem = { href: string; label: string; icon?: string };
export type SessionUser = { name?: string | null; email?: string | null; role?: string | null };

function NavLinks({ items, pathname, onNavigate }: { items: NavItem[]; pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {items.map((item) => {
        const Icon = getIcon(item.icon);
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/")) || (item.href !== "/app" && item.href !== "/" && pathname === item.href);
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-brand text-brand-fg shadow-card"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
            )}
          >
            <Icon className={cn("h-4 w-4 shrink-0", active ? "text-brand-fg" : "text-slate-400 group-hover:text-slate-600")} />
            <span className="truncate">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

function BrandMark({ name, logo }: { name: string; logo?: string }) {
  return (
    <a href="/app" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-brand-fg shadow-card">
        {logo ?? name.slice(0, 1)}
      </span>
      <span className="font-heading text-[15px] font-semibold tracking-tight text-slate-900">{name}</span>
    </a>
  );
}

export function AppShell({
  appName,
  logo,
  nav,
  user,
  children,
}: {
  appName: string;
  logo?: string;
  nav: NavItem[];
  user?: SessionUser;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "/app";
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sidebar — desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex h-16 items-center border-b border-slate-200 px-5">
          <BrandMark name={appName} logo={logo} />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <NavLinks items={nav} pathname={pathname} />
        </div>
        <div className="border-t border-slate-200 p-3">
          <div className="flex items-center gap-3 rounded-xl px-2 py-2">
            <Avatar name={user?.name ?? "User"} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-900">{user?.name ?? "Demo User"}</p>
              <p className="truncate text-xs capitalize text-slate-500">{user?.role ?? "member"}</p>
            </div>
            <a href="/logout" title="Sign out" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
              <LogOut className="h-4 w-4" />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-72 flex-col bg-white shadow-lift">
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
              <BrandMark name={appName} logo={logo} />
              <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-4">
              <NavLinks items={nav} pathname={pathname} onNavigate={() => setOpen(false)} />
            </div>
            <div className="border-t border-slate-200 p-3">
              <a href="/logout" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
                <LogOut className="h-4 w-4" /> Sign out
              </a>
            </div>
          </div>
        </div>
      ) : null}

      {/* Main */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/80 px-4 backdrop-blur sm:px-6">
          <button onClick={() => setOpen(true)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 sm:flex">
            <Search className="h-4 w-4" />
            <span className="w-40">Search…</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" title="Notifications">
              <span className="relative inline-flex">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.3 21a1.94 1.94 0 003.4 0" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
              </span>
            </button>
            <div className="flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-slate-100">
              <Avatar name={user?.name ?? "User"} className="h-8 w-8" />
              <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
