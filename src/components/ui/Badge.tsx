import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "amber" | "slate";
  className?: string;
}

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        {
          "bg-brand-50 text-brand-700": variant === "blue",
          "bg-emerald-50 text-emerald-700": variant === "green",
          "bg-amber-50 text-amber-700": variant === "amber",
          "bg-slate-100 text-slate-600": variant === "slate",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
