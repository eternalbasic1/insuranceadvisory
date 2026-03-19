import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LegacyPolicySection() {
  return (
    <section className="section-py bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Content */}
          <div>
            <SectionHeader
              badge="Legacy Policy Risk"
              title="The hidden cost of "
              titleHighlight="older policies"
              description="Policies taken a decade ago were structured differently. What looked like comprehensive cover may have clauses that significantly reduce actual payouts."
              align="left"
            />

            <div className="mt-8 space-y-6">
              {/* Room rent example */}
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-semibold text-amber-800 mb-1">Example: Room Rent Capping</h4>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      A ₹5 lakh policy with 1% room rent cap limits you to ₹5,000/day.
                      If you stay in a ₹10,000/day room, proportionate deductions apply
                      to your <em>entire</em> bill — not just the room charges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Proportionate deduction explanation */}
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">How proportionate deduction works:</h4>
                <div className="space-y-2">
                  {[
                    { label: "Hospital Bill", value: "₹2,00,000" },
                    { label: "Room Taken", value: "₹10,000/day" },
                    { label: "Policy Cap", value: "₹5,000/day (50% of actual)" },
                    { label: "Deduction Applied To", value: "Entire bill — not just room" },
                    { label: "Insurer Pays", value: "₹1,00,000 (50% of total bill)" },
                    { label: "You Pay Out of Pocket", value: "₹1,00,000" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm py-1">
                      <span className="text-slate-500">{row.label}</span>
                      <span className={`font-medium ${row.label === "You Pay Out of Pocket" ? "text-rose-600" : "text-slate-800"}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed">
                This is one of dozens of clauses that may be present in older policies.
                Most policyholders are unaware until they file a claim — when it's too late to course-correct.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/contact?service=audit" className="btn-primary">
                Check Your Existing Policy
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="lg:pl-8">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-card">
              <h3 className="text-base font-semibold text-slate-900 mb-6">
                Common issues found in legacy policies
              </h3>
              <div className="space-y-4">
                {[
                  {
                    issue: "Room rent capping",
                    impact: "Proportionate deductions on entire bill",
                    severity: "high",
                  },
                  {
                    issue: "Disease-wise sub-limits",
                    impact: "Capped payouts for specific treatments",
                    severity: "high",
                  },
                  {
                    issue: "Co-payment clauses",
                    impact: "You pay 10–20% of every claim",
                    severity: "medium",
                  },
                  {
                    issue: "Low sum insured",
                    impact: "Coverage eroded by medical inflation",
                    severity: "medium",
                  },
                  {
                    issue: "Network hospital gaps",
                    impact: "Preferred hospitals not cashless",
                    severity: "medium",
                  },
                  {
                    issue: "Limited restoration",
                    impact: "Sum insured not restored after claims",
                    severity: "low",
                  },
                ].map((item) => (
                  <div key={item.issue} className="flex items-start gap-3 rounded-xl bg-white border border-slate-100 p-3.5">
                    <span
                      className={`mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                        item.severity === "high"
                          ? "bg-rose-400"
                          : item.severity === "medium"
                          ? "bg-amber-400"
                          : "bg-emerald-400"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-slate-800">{item.issue}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-slate-400">
                Severity indicators are illustrative. Impact varies by policy terms and claim scenario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
