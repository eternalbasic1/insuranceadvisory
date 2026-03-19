import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Advisory Services — Health, Term Life & Policy Audits",
  description:
    "Structured insurance advisory services including health insurance planning, term life analysis, policy audits, and claim guidance. Education-first, no pressure.",
  path: "/services",
});

const faqs = [
  {
    q: "Is there a fee for the consultation or policy audit?",
    a: "No. The initial consultation and policy health check are free. Advisory services are compensated through the standard commission structure when you choose to purchase a policy through us — which you are never obligated to do.",
  },
  {
    q: "Do I need to buy a policy through you after a consultation?",
    a: "Absolutely not. Many clients use advisory sessions purely to get clarity before making their own decisions. The goal is your understanding, not your purchase.",
  },
  {
    q: "Can you help with a claim for a policy I didn't buy through you?",
    a: "Yes. Claim guidance is available as a service regardless of where your policy was purchased. We can assist with documentation, insurer communication, and process navigation.",
  },
  {
    q: "I already have insurance. Why would I need a policy audit?",
    a: "Most policyholders have never read their policy document in full. Audits regularly surface room rent caps, sub-limits, and exclusions that significantly affect real claim payouts. Knowing what you have allows you to plan for gaps proactively.",
  },
  {
    q: "How do you stay unbiased in your recommendations?",
    a: "Advisory is structured around needs analysis first — defining what coverage makes sense for your situation before evaluating any specific products. Insurer selection follows the analysis, not the other way around.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py pt-32 bg-white">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="badge badge-blue mb-4">Services</span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl text-balance leading-tight">
              Advisory services designed around{" "}
              <span className="gradient-text">your decisions</span>
            </h1>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed text-balance">
              Structured guidance across the insurance decisions that matter most —
              built to give you clarity before commitment, not confusion after.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5">
                Book Free Consultation
              </Link>
              <Link href="/contact?service=audit" className="btn-secondary text-base px-7 py-3.5">
                Request Policy Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-py bg-slate-50">
        <div className="section-container">
          <SectionHeader
            badge="What We Offer"
            title="Four core "
            titleHighlight="advisory services"
            description="Each designed to give you a specific type of clarity — whether you're starting fresh or reviewing what you already have."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                highlighted={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-white">
        <div className="section-container">
          <SectionHeader
            badge="How Advisory Works"
            title="A structured process, "
            titleHighlight="not a sales funnel"
            description="Every engagement follows a consistent framework designed to surface the right information before making any recommendation."
          />

          <div className="mt-14 max-w-3xl mx-auto">
            <div className="space-y-0">
              {[
                {
                  phase: "Discovery",
                  description:
                    "We begin by understanding your complete picture: current coverage, income, dependents, liabilities, health history, and financial goals. This takes 30–45 minutes and is the most important part of the process.",
                },
                {
                  phase: "Analysis",
                  description:
                    "Your situation is analyzed against our coverage framework. For existing policies, we audit for gaps and structural weaknesses. For new coverage, we define your requirements clearly before looking at any products.",
                },
                {
                  phase: "Options",
                  description:
                    "Where relevant, we compare suitable options across insurers using structured criteria — claim settlement, sub-limits, network, and long-term value. You receive a recommendation with the reasoning behind it.",
                },
                {
                  phase: "Decision",
                  description:
                    "You make the decision you're most comfortable with. We support implementation if you choose to proceed, or leave you with the analysis to act on independently.",
                },
                {
                  phase: "Ongoing",
                  description:
                    "Advisory relationships include periodic check-ins as your life changes — new dependents, job changes, policy renewals — to ensure your coverage remains appropriate.",
                },
              ].map((phase, i) => (
                <div key={phase.phase} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    {i < 4 && <div className="flex-1 w-px bg-slate-200 my-2" />}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-base font-semibold text-slate-900 mb-1.5">{phase.phase}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-slate-50">
        <div className="section-container">
          <SectionHeader
            badge="Common Questions"
            title="What people typically ask "
            titleHighlight="before starting"
          />

          <div className="mt-14 max-w-3xl mx-auto divide-y divide-slate-100">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-base font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Clarity starts with a conversation"
        description="Book a free 30-minute consultation. No sales pitch, no obligation. Just honest answers to specific questions about your coverage."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Request Policy Audit", href: "/contact?service=audit" }}
        variant="default"
      />
    </>
  );
}
