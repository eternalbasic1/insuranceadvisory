import Link from "next/link";
import { clsx } from "clsx";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "default" | "gradient" | "minimal";
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
  className,
}: CTASectionProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        variant === "gradient" && "bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900",
        variant === "default" && "bg-slate-900",
        variant === "minimal" && "bg-slate-50 border border-slate-100 rounded-3xl",
        className
      )}
    >
      {/* Background decoration */}
      {variant !== "minimal" && (
        <>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </>
      )}

      <div className="relative section-container section-py text-center">
        <h2
          className={clsx(
            "text-3xl font-bold tracking-tight sm:text-4xl text-balance",
            variant === "minimal" ? "text-slate-900" : "text-white"
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            "mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-balance",
            variant === "minimal" ? "text-slate-500" : "text-slate-300"
          )}
        >
          {description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className={clsx(
              "btn-primary text-base px-8 py-4",
              variant === "minimal" && "bg-brand-600 hover:bg-brand-700"
            )}
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className={clsx(
                "btn-secondary text-base px-8 py-4",
                variant !== "minimal" && "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/30"
              )}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
