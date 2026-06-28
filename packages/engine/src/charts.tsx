import React from "react";
import { cn } from "./cn";

/* Simple, dependency-free SVG charts. All server-renderable. */

export function BarChart({
  data,
  height = 200,
  className,
}: {
  data: { label: string; value: number }[];
  height?: number;
  className?: string;
}) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-end gap-2" style={{ height }}>
        {data.map((d, i) => (
          <div key={i} className="flex flex-1 flex-col items-center justify-end gap-2">
            <div
              className="w-full rounded-t-lg bg-brand/85 transition-all"
              style={{ height: `${(d.value / max) * (height - 28)}px`, minHeight: 4 }}
              title={`${d.label}: ${d.value}`}
            />
            <span className="truncate text-[10px] text-slate-500">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AreaChart({
  data,
  height = 200,
  className,
}: {
  data: { label: string; value: number }[];
  height?: number;
  className?: string;
}) {
  const w = 600;
  const h = height;
  const pad = 8;
  const max = Math.max(1, ...data.map((d) => d.value));
  const stepX = data.length > 1 ? (w - pad * 2) / (data.length - 1) : 0;
  const pts = data.map((d, i) => {
    const x = pad + i * stepX;
    const y = h - pad - (d.value / max) * (h - pad * 2);
    return [x, y] as const;
  });
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const area = `${line} L${pts[pts.length - 1]?.[0].toFixed(1)},${h - pad} L${pts[0]?.[0].toFixed(1)},${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={cn("w-full", className)} preserveAspectRatio="none" style={{ height }}>
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaFill)" />
      <path d={line} fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="var(--brand)" />
      ))}
    </svg>
  );
}

export function DonutChart({
  data,
  size = 180,
  thickness = 22,
  className,
}: {
  data: { label: string; value: number; color?: string }[];
  size?: number;
  thickness?: number;
  className?: string;
}) {
  const total = Math.max(1, data.reduce((s, d) => s + d.value, 0));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const palette = ["var(--brand)", "var(--accent)", "#0ea5e9", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];
  let offset = 0;
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e2e8f0" strokeWidth={thickness} />
          {data.map((d, i) => {
            const frac = d.value / total;
            const dash = frac * c;
            const el = (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={d.color ?? palette[i % palette.length]}
                strokeWidth={thickness}
                strokeDasharray={`${dash} ${c - dash}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />
            );
            offset += dash;
            return el;
          })}
        </g>
      </svg>
      <ul className="space-y-2 text-sm">
        {data.map((d, i) => (
          <li key={i} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: d.color ?? palette[i % palette.length] }}
            />
            <span className="text-slate-600">{d.label}</span>
            <span className="ml-auto font-medium text-slate-900">{d.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Sparkline({ data, className }: { data: number[]; className?: string }) {
  const w = 120;
  const h = 36;
  const max = Math.max(1, ...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = data.length > 1 ? w / (data.length - 1) : 0;
  const line = data
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - ((v - min) / range) * h).toFixed(1)}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={cn("h-9 w-28", className)}>
      <path d={line} fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
