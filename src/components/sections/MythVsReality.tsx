import { SectionHeader } from "@/components/ui/SectionHeader";
import { MythCard } from "@/components/ui/MythCard";
import { myths } from "@/lib/data";

export function MythVsReality() {
  return (
    <section className="section-py bg-slate-50">
      <div className="section-container">
        <SectionHeader
          badge="Myth vs. Reality"
          title="Common misconceptions that cost "
          titleHighlight="real money"
          description="Insurance is full of assumptions passed down through generations. Here are the most consequential ones — corrected with context."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {myths.map((myth, index) => (
            <MythCard
              key={index}
              myth={myth.myth}
              reality={myth.reality}
              insight={myth.insight}
              category={myth.category}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-600">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-brand-900 mb-1">Have a specific question about your situation?</p>
              <p className="text-sm text-brand-700">
                These are general patterns. Your specific coverage, income, and family situation may change the analysis significantly.
                A 30-minute consultation costs nothing and clarifies everything.
              </p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Ask an Advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
