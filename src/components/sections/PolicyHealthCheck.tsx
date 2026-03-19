import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { policyCheckItems } from "@/lib/data";

export function PolicyHealthCheck() {
  return (
    <section className="section-py bg-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #0e90e7 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #0359a0 0%, transparent 50%)`,
        }}
      />

      <div className="section-container relative">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          {/* Left: CTA content */}
          <div>
            <SectionHeader
              badge="Free Advisory Service"
              badgeVariant="blue"
              title="Free Policy Health Check"
              description="A structured, no-obligation review of your existing insurance policies to surface coverage gaps, outdated clauses, and optimization opportunities."
              align="left"
            />

            <div className="mt-8 space-y-3">
              <p className="text-sm font-medium text-slate-300 mb-4">What we review:</p>
              {policyCheckItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-brand-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <div>
                    <span className="text-sm font-medium text-slate-200">{item.label}</span>
                    <span className="text-slate-500"> — </span>
                    <span className="text-sm text-slate-400">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact?service=audit" className="btn-primary text-base px-7 py-3.5">
                Request Policy Health Check
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="btn-secondary border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:border-slate-600 text-base px-7 py-3.5"
              >
                Book Consultation Instead
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              No product recommendation required. No obligation to purchase anything.
              This is a purely educational service.
            </p>
          </div>

          {/* Right: Process card */}
          <div className="lg:pl-8">
            <div className="rounded-2xl bg-slate-800 border border-slate-700 p-8">
              <h3 className="text-base font-semibold text-white mb-6">What happens during a Policy Health Check</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Share your policy documents",
                    desc: "Upload or share your existing policy PDFs via WhatsApp or email. We review only what you choose to share.",
                  },
                  {
                    step: "02",
                    title: "Structured analysis",
                    desc: "We evaluate your coverage against a checklist of 20+ parameters including room rent, sub-limits, waiting periods, and exclusions.",
                  },
                  {
                    step: "03",
                    title: "Written findings report",
                    desc: "You receive a clear summary of gaps, risks, and specific recommendations — in plain language, not insurance jargon.",
                  },
                  {
                    step: "04",
                    title: "Optional consultation",
                    desc: "Schedule a call to walk through findings and explore options. No pressure to act on anything we recommend.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-xl font-black text-slate-600 leading-none flex-shrink-0 w-7">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-200 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
