import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowAdvisoryWorks } from "@/components/sections/HowAdvisoryWorks";
import { InsuranceAreas } from "@/components/sections/InsuranceAreas";
import { MythVsReality } from "@/components/sections/MythVsReality";
import { LegacyPolicySection } from "@/components/sections/LegacyPolicySection";
import { PolicyHealthCheck } from "@/components/sections/PolicyHealthCheck";
import { WhyAdvisory } from "@/components/sections/WhyAdvisory";
import { CTASection } from "@/components/ui/CTASection";
import { InsightCard } from "@/components/ui/InsightCard";
import { insights } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Guidance. Not Sales Pressure.",
  description:
    "Independent insurance advisory practice helping Indian professionals make informed decisions on health insurance, term life, and policy audits. Education-first. No pressure.",
  path: "/",
});

export default function HomePage() {
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      <HeroSection />
      <HowAdvisoryWorks />
      <InsuranceAreas />
      <MythVsReality />
      <LegacyPolicySection />
      <PolicyHealthCheck />
      <WhyAdvisory />

      {/* Insights preview */}
      <section className="section-py bg-slate-50">
        <div className="section-container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeader
              badge="Insights"
              title="Educational resources to help you "
              titleHighlight="decide better"
              align="left"
              className="max-w-xl"
            />
            <a
              href="/insights"
              className="flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors flex-shrink-0"
            >
              View all insights
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {featuredInsights.map((article) => (
              <InsightCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to understand your coverage clearly?"
        description="A 30-minute conversation can surface gaps you didn't know existed and give you the clarity to make decisions you're confident about. No obligation. No pressure."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Request Policy Audit", href: "/contact?service=audit" }}
        variant="default"
      />
    </>
  );
}
