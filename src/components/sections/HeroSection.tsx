import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(241 245 249) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(241 245 249) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[700px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #0e90e7 0%, transparent 70%)" }}
      />

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs font-semibold text-brand-700 tracking-wide">
              Certified Insurance Advisor · House of Darmoji
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
            Insurance Guidance.{" "}
            <span className="gradient-text">Not Sales Pressure.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed text-balance max-w-2xl mx-auto">
            An independent advisory practice helping Indian professionals make informed
            insurance decisions — through education, transparency, and structured analysis.
            No commissions driving recommendations. No urgency tactics.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
              Book Free Consultation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/contact?service=audit" className="btn-secondary text-base px-8 py-4 w-full sm:w-auto">
              Request Policy Health Check
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {[
              { label: "Advisory-First", sub: "No product push" },
              { label: "IRDAI Certified", sub: "Via Policybazaar" },
              { label: "Free Consultation", sub: "No obligation" },
              { label: "Claim Support", sub: "End-to-end guidance" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-0.5">
                <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                <span className="text-xs text-slate-400">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
