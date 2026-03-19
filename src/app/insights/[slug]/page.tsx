import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { insights } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { InsightCard } from "@/components/ui/InsightCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${slug}`,
  });
}

const categoryVariant: Record<string, "blue" | "green" | "amber" | "slate"> = {
  "Health Insurance": "blue",
  "Term Insurance": "green",
  "Risk Planning": "amber",
  "Decision Making": "slate",
  "Life Planning": "green",
};

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);

  if (!article) notFound();

  const related = insights.filter((a) => a.slug !== slug).slice(0, 3);

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-white border-b border-slate-100">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/insights" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
                ← Insights
              </Link>
              <span className="text-slate-200">/</span>
              <Badge variant={categoryVariant[article.category] ?? "slate"}>
                {article.category}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance leading-snug">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">{article.excerpt}</p>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body placeholder */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="prose-custom space-y-6 text-slate-600">
              <p className="text-lg leading-relaxed">
                This article is currently in the content pipeline. The full analysis,
                data, and advisor commentary will be published here shortly.
              </p>

              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <h3 className="text-base font-semibold text-brand-900 mb-2">
                  Want early access to this analysis?
                </h3>
                <p className="text-sm text-brand-700 mb-4">
                  Schedule a consultation and we'll walk through this topic specifically
                  as it applies to your situation — with real numbers and examples.
                </p>
                <Link href="/contact" className="btn-primary text-sm">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related insights */}
      <section className="section-py bg-slate-50">
        <div className="section-container">
          <h2 className="text-xl font-bold text-slate-900 mb-8">More insights</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((rel) => (
              <InsightCard key={rel.slug} {...rel} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
