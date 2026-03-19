import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "About — Advisory Philosophy",
  description:
    "The story behind House of Darmoji Advisory — a technology-driven insurance advisory practice built on education, transparency, and long-term client relationships.",
  path: "/about",
});

const values = [
  {
    title: "Education over persuasion",
    description:
      "Every interaction is designed to improve your understanding, not close a sale. An informed client makes better decisions — and better decisions lead to better outcomes.",
  },
  {
    title: "Transparency over complexity",
    description:
      "Insurance is intentionally complex. Our role is to translate that complexity into clarity — so you understand exactly what you're buying and why.",
  },
  {
    title: "Long-term over transactional",
    description:
      "A single sale is not the goal. The goal is a long-term advisory relationship that evolves as your life, income, and responsibilities change.",
  },
  {
    title: "Technology as an enabler",
    description:
      "A software engineering background allows us to build structured frameworks, analyze policies systematically, and apply data-driven thinking to advisory decisions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py pt-32 bg-white">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="badge badge-blue mb-4">About</span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl text-balance leading-tight">
              Built by a technologist.{" "}
              <span className="gradient-text">
                Guided by a commitment to clarity.
              </span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed text-balance">
              House of Darmoji Advisory exists because most people deserve
              better than what the traditional insurance distribution model
              offers them.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="prose-custom space-y-5">
              <h2 className="text-2xl font-bold text-slate-900">
                The advisory story
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Most people encounter insurance through agents whose incentives
                don't align with their interests. Products are selected based on
                commission structures, not coverage quality. Clients sign
                documents they don't fully understand. And the first time they
                discover what their policy actually covers is when they file a
                claim.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This advisory practice was built to change that dynamic. As a
                certified Policybazaar advisor with a software engineering
                background, the approach here combines structured analytical
                thinking with domain knowledge to give clients what they
                actually need: honest, specific, education-first guidance.
              </p>
              <p className="text-slate-600 leading-relaxed">
                House of Darmoji is a technology-first venture studio. Advisory
                is one of its first verticals — chosen because it sits at the
                intersection of financial literacy, trust, and technology, where
                the right application of all three can genuinely improve
                someone's financial resilience.
              </p>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-slate-900">
                Why the technology background matters
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Insurance decisions benefit from structured thinking. When you
                apply an engineering mindset to policy analysis — breaking down
                clauses, modeling claim scenarios, comparing edge cases — the
                picture becomes much clearer than a generic premium comparison.
              </p>

              <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 space-y-4 mt-6">
                <h3 className="text-sm font-semibold text-brand-900">
                  What this enables:
                </h3>
                {[
                  "Systematic analysis of policy documents, not surface-level comparisons",
                  "Scenario modeling for claim situations specific to your coverage",
                  "Structured frameworks that translate jargon into decisions",
                  "Technology tools for future-ready advisory (in development)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg
                      className="h-4 w-4 text-brand-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-sm text-brand-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-slate-50">
        <div className="section-container">
          <SectionHeader
            badge="Advisory Philosophy"
            title="The principles that guide "
            titleHighlight="every conversation"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <div key={i} className="card">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 mb-4">
                  <span className="text-xs font-bold text-white">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              badge="Who We Work With"
              title="People who want to understand their coverage, "
              titleHighlight="not just have it"
            />

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 text-left">
              {[
                {
                  title: "IT professionals and salaried employees",
                  desc: "Relying solely on employer coverage, unaware of coverage gaps that emerge during job transitions.",
                },
                {
                  title: "Young families",
                  desc: "Navigating health and life insurance decisions for the first time with growing financial responsibilities.",
                },
                {
                  title: "People with legacy policies",
                  desc: "Holding old policies taken by parents, unsure whether the coverage is still adequate or appropriately structured.",
                },
                {
                  title: "Recent homebuyers",
                  desc: "Managing EMIs and evaluating term insurance to ensure financial continuity for dependents.",
                },
              ].map((persona) => (
                <div key={persona.title} className="card">
                  <h3 className="text-sm font-semibold text-slate-900 mb-1.5">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {persona.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start with a conversation"
        description="No sales pitch. No product push. Just a structured conversation about your current coverage and what, if anything, deserves a closer look."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore Services", href: "/services" }}
        variant="gradient"
      />
    </>
  );
}
