"use client";

import React from "react";
import { Menu, X, CheckCircle2 } from "lucide-react";
import { cn } from "./cn";
import { Button, ButtonLink, Field, Input, Textarea, Select, Alert } from "./primitives";

/* ----------------------------------------------------- Marketing site header */
export function MarketingHeader({
  appName,
  logo,
  links,
  cta,
}: {
  appName: string;
  logo?: string;
  links: { label: string; href: string }[];
  cta?: { label: string; href: string };
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-brand-fg shadow-card">
            {logo ?? appName.slice(0, 1)}
          </span>
          <span className="font-heading text-[15px] font-semibold tracking-tight text-slate-900">{appName}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href="/login" variant="ghost" size="sm">Sign in</ButtonLink>
          {cta ? <ButtonLink href={cta.href} size="sm">{cta.label}</ButtonLink> : null}
        </div>
        <button onClick={() => setOpen((v) => !v)} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <ButtonLink href="/login" variant="outline" size="sm" className="flex-1">Sign in</ButtonLink>
              {cta ? <ButtonLink href={cta.href} size="sm" className="flex-1">{cta.label}</ButtonLink> : null}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/* --------------------------------------------------------------------- Tabs */
export function Tabs({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <div className="flex gap-1 border-b border-slate-200">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "relative px-4 py-2.5 text-sm font-medium transition-colors",
              active === i ? "text-brand" : "text-slate-500 hover:text-slate-800",
            )}
          >
            {t.label}
            {active === i ? <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-brand" /> : null}
          </button>
        ))}
      </div>
      <div className="pt-5">{tabs[active]?.content}</div>
    </div>
  );
}

/* ------------------------------------------------- Real validated demo form */
type FormField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
};

export function DemoForm({
  action,
  fields,
  submitLabel = "Submit",
  successTitle = "Request received",
  successMessage = "Thanks — this is a demo scaffold, so no real notification was sent. The submission was validated on the server.",
  compact,
}: {
  action: string;
  fields: FormField[];
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  compact?: boolean;
}) {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<"idle" | "loading" | "done" | "error">("idle");
  const [serverError, setServerError] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // client validation
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = String(data[f.name] ?? "").trim();
      if (f.required && !v) next[f.name] = `${f.label} is required`;
      if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) next[f.name] = "Enter a valid email";
    }
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.ok === false) {
        if (json?.errors) setErrors(json.errors);
        setServerError(json?.message || "Please correct the errors and try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
      form.reset();
    } catch {
      setServerError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <Alert tone="success" title={successTitle}>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{successMessage}</span>
        </div>
        <Button variant="outline" size="sm" className="mt-3" onClick={() => setStatus("idle")}>
          Submit another
        </Button>
      </Alert>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", compact && "space-y-3")} noValidate>
      {serverError ? <Alert tone="danger">{serverError}</Alert> : null}
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        {fields.map((f) => (
          <Field
            key={f.name}
            label={f.label}
            error={errors[f.name]}
            className={f.type === "textarea" ? "sm:col-span-2" : undefined}
          >
            {f.type === "textarea" ? (
              <Textarea name={f.name} placeholder={f.placeholder} />
            ) : f.type === "select" ? (
              <Select name={f.name} defaultValue="">
                <option value="" disabled>
                  {f.placeholder ?? "Select…"}
                </option>
                {f.options?.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </Select>
            ) : (
              <Input name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} />
            )}
          </Field>
        ))}
      </div>
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Submitting…" : submitLabel}
      </Button>
    </form>
  );
}
