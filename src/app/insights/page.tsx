import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InsightCard } from "@/components/ui/InsightCard";
import { Badge } from "@/components/ui/Badge";
import { insights } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Insights — Guides & Education",
  description:
    "Educational guides on health insurance, term life planning, claim settlement, and policy analysis for Indian professionals and families.",
  path: "/insights",
});

const categories = [
  "All",
  "Health Insurance",
  "Term Insurance",
  "Risk Planning",
  "Decision Making",
  "Life Planning",
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py pt-32 bg-white">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="badge badge-blue mb-4">Insights</span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl text-balance leading-tight">
              Insurance education,{" "}
              <span className="gradient-text">without the jargon</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed text-balance">
              Practical guides to help you understand coverage, evaluate
              options, and make decisions you're confident about — written by an
              advisor who is also a software engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter (static for now, extensible) */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-16 z-30 backdrop-blur-md bg-white/95">
        <div className="section-container">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-py bg-slate-50">
        <div className="section-container">
          {/* Featured article */}
          <div className="mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
              Featured
            </h2>
            <InsightCard {...insights[0]} variant="featured" />
          </div>

          {/* All articles */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
              All Insights
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {insights.map((article) => (
                <InsightCard key={article.slug} {...article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / notification CTA */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center rounded-3xl border border-slate-100 bg-slate-50 p-10">
            <Badge variant="blue" className="mb-4">
              Stay Informed
            </Badge>
            <h2 className="text-2xl font-bold text-slate-900 mb-3 text-balance">
              New insights, when they matter
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              We publish infrequently and only when there's something genuinely
              useful to say. No newsletters. No promotional content. Just
              education.
            </p>
            <a
              href="https://www.instagram.com/houseofdarmoji/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Follow on Instgram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
