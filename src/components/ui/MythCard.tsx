import { clsx } from "clsx";
import { Badge } from "./Badge";

interface MythCardProps {
  myth: string;
  reality: string;
  insight: string;
  category: string;
  index?: number;
}

export function MythCard({ myth, reality, insight, category, index = 0 }: MythCardProps) {
  return (
    <div
      className={clsx(
        "group flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden",
        "shadow-card hover:shadow-card-hover transition-all duration-300",
        "hover:-translate-y-0.5"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="border-b border-slate-50 bg-slate-50/60 px-6 pt-5 pb-4">
        <Badge variant="slate" className="mb-3">{category}</Badge>

        {/* Myth */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0 text-rose-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-500 mb-1">Myth</p>
            <p className="text-sm font-medium text-slate-700 leading-relaxed">{myth}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 py-5 gap-4">
        {/* Reality */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0 text-emerald-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600 mb-1">Reality</p>
            <p className="text-sm text-slate-600 leading-relaxed">{reality}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Advisor Insight */}
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0 text-brand-500">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-600 mb-1">Advisor Insight</p>
            <p className="text-sm text-slate-600 leading-relaxed">{insight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
