import Link from "next/link";
import { clsx } from "clsx";
import type { InsightArticle } from "@/types";
import { Badge } from "./Badge";

interface InsightCardProps extends InsightArticle {
  variant?: "default" | "featured";
}

const categoryVariant: Record<string, "blue" | "green" | "amber" | "slate"> = {
  "Health Insurance": "blue",
  "Term Insurance": "green",
  "Risk Planning": "amber",
  "Decision Making": "slate",
  "Life Planning": "green",
};

export function InsightCard({
  slug,
  title,
  excerpt,
  category,
  readTime,
  publishedAt,
  variant = "default",
}: InsightCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/insights/${slug}`}
      className={clsx(
        "group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card",
        "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5",
        variant === "featured" && "lg:flex-row lg:gap-8"
      )}
    >
      {/* Category & meta */}
      <div className={clsx("flex items-center gap-3 mb-4", variant === "featured" && "lg:hidden")}>
        <Badge variant={categoryVariant[category] ?? "slate"}>{category}</Badge>
        <span className="text-xs text-slate-400">{readTime}</span>
      </div>

      <div className="flex flex-col flex-1">
        {variant === "featured" && (
          <div className="hidden lg:flex items-center gap-3 mb-4">
            <Badge variant={categoryVariant[category] ?? "slate"}>{category}</Badge>
            <span className="text-xs text-slate-400">{readTime}</span>
          </div>
        )}

        <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1">{excerpt}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">{formattedDate}</span>
          <span className="flex items-center gap-1 text-xs font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
            Read article
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
