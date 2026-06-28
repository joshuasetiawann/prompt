"use client";
import { useActionState } from "react";
import { Button, Field, Input, Alert } from "@scaffold/engine";
import { loginAction, type LoginState } from "./actions";
import { APP } from "@/lib/app";

export default function LoginPage() {
  const [state, action, pending] = useActionState<LoginState, FormData>(loginAction, {});
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between overflow-hidden bg-brand p-12 text-brand-fg lg:flex">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-black/10" />
        <a href="/" className="relative flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 text-sm font-bold">{APP.appName.slice(0,1)}</span>
          <span className="font-heading text-lg font-semibold">{APP.appName}</span>
        </a>
        <div className="relative">
          <h2 className="font-heading text-3xl font-bold leading-tight">{APP.tagline || "Welcome back."}</h2>
          <p className="mt-3 max-w-md text-brand-fg/80">Sign in to manage everything in one place. This is a demo scaffold running on seeded data.</p>
        </div>
        <p className="relative text-sm text-brand-fg/60">© {APP.appName}</p>
      </div>
      <div className="flex items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-sm">
          <h1 className="font-heading text-2xl font-semibold text-slate-900">Sign in</h1>
          <p className="mt-1 text-sm text-slate-500">Use the demo credentials to explore.</p>
          <form action={action} className="mt-6 space-y-4">
            {state?.error ? <Alert tone="danger">{state.error}</Alert> : null}
            <Field label="Email"><Input name="email" type="email" defaultValue="admin@demo.test" placeholder="you@company.com" /></Field>
            <Field label="Password"><Input name="password" type="password" defaultValue="demo1234" placeholder="••••••••" /></Field>
            <Button type="submit" disabled={pending} className="w-full">{pending ? "Signing in…" : "Sign in"}</Button>
          </form>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            <p className="font-medium text-slate-800">Demo logins</p>
            <p className="mt-1">Admin · <span className="font-mono">admin@demo.test</span></p>
            <p>User · <span className="font-mono">user@demo.test</span></p>
            <p className="mt-1">Password · <span className="font-mono">demo1234</span></p>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            <a href="/" className="font-medium text-brand hover:underline">← Back to site</a>
          </p>
        </div>
      </div>
    </div>
  );
}
