import { SectionHeader } from "@/components/ui/SectionHeader";
import { trustSignals } from "@/lib/data";

const iconPaths: Record<string, string> = {
  BadgeCheck: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z",
  Scale: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z",
  Cpu: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
  RefreshCw: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
};

export function WhyAdvisory() {
  return (
    <section className="section-py bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Trust signals */}
          <div>
            <SectionHeader
              badge="Why Advisory"
              title="Guidance that works for "
              titleHighlight="you, not commissions"
              description="Advisory-first means your decision is the outcome. Not the transaction."
              align="left"
            />

            <div className="mt-10 space-y-5">
              {trustSignals.map((signal) => (
                <div key={signal.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50">
                    <svg
                      className="h-5 w-5 text-brand-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.75}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[signal.icon]} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-0.5">{signal.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{signal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Comparison table */}
          <div className="lg:pl-8">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden shadow-card">
              {/* Header */}
              <div className="grid grid-cols-3 bg-white border-b border-slate-100 px-5 py-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Criteria</div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    Advisory Approach
                  </span>
                </div>
                <div className="text-center text-xs font-semibold text-slate-400">Typical Agent</div>
              </div>

              {/* Rows */}
              {[
                { criteria: "Objective", advisory: "Your best coverage", typical: "Highest commission" },
                { criteria: "Plan selection", advisory: "Needs-based", typical: "Inventory-driven" },
                { criteria: "Insurer choice", advisory: "Any suitable insurer", typical: "Partner insurers" },
                { criteria: "Claim support", advisory: "Ongoing guidance", typical: "After-sale gap" },
                { criteria: "Follow-up", advisory: "Annual review", typical: "Next purchase" },
                { criteria: "Education", advisory: "Always included", typical: "Rarely prioritized" },
              ].map((row, i) => (
                <div
                  key={row.criteria}
                  className={`grid grid-cols-3 px-5 py-3.5 text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                  }`}
                >
                  <span className="text-slate-600 font-medium">{row.criteria}</span>
                  <span className="text-center text-brand-700 font-medium">{row.advisory}</span>
                  <span className="text-center text-slate-400">{row.typical}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-400 text-center">
              Illustrative comparison. Outcomes vary by individual advisor and insurer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
