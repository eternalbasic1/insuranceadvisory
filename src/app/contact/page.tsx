import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ConsultationForm } from "@/components/sections/ConsultationForm";

export const metadata: Metadata = buildMetadata({
  title: "Book a Consultation or Request Policy Audit",
  description:
    "Book a free insurance consultation or request a policy health check. No sales pressure, no obligation. Get clarity on your health and life insurance coverage.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py pt-32 bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="badge badge-blue mb-4">Get in Touch</span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl text-balance leading-tight">
              Start a <span className="gradient-text">conversation</span>
            </h1>
            <p className="mt-5 text-xl text-slate-500 leading-relaxed text-balance">
              No forms to prove your commitment. No sales calls disguised as
              consultations. Just a focused conversation about your specific
              situation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="pb-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-14">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918341510944?text=Hi%2C%20I'd%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col gap-4 cursor-pointer hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                <svg
                  className="h-5 w-5 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  WhatsApp
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Fastest response. Message directly to start a conversation or
                  ask a quick question.
                </p>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-emerald-600 mt-auto">
                Open WhatsApp
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:support@houseofdarmoji.com"
              className="card group flex flex-col gap-4 cursor-pointer hover:-translate-y-0.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 group-hover:bg-brand-100 transition-colors">
                <svg
                  className="h-5 w-5 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition-colors">
                  Email
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  For detailed questions, policy document sharing, or formal
                  written communication.
                </p>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-brand-600 mt-auto">
                support@houseofdarmoji.com
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </a>

            {/* Form */}
            <div className="card flex flex-col gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                <svg
                  className="h-5 w-5 text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  Consultation Request Form
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Prefer a structured approach? Fill in the form below and we'll
                  get back to you within 24 hours.
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-400 mt-auto">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                Scroll down to the form
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 mb-14" />

          {/* Form section */}
          <ConsultationForm />
        </div>
      </section>

      {/* Reassurance */}
      <section className="section-py bg-slate-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              badge="What to Expect"
              title="What happens after you reach out"
            />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Acknowledgement within 24 hours",
                  desc: "You'll receive a response confirming your request and asking any clarifying questions needed.",
                },
                {
                  step: "02",
                  title: "Scheduled conversation",
                  desc: "A 30-minute slot is confirmed at a time that works for you. Video, call, or WhatsApp — your preference.",
                },
                {
                  step: "03",
                  title: "Structured analysis",
                  desc: "You leave the conversation with specific answers and, where relevant, a written summary of recommendations.",
                },
              ].map((item) => (
                <div key={item.step} className="card text-center">
                  <span className="text-3xl font-black text-slate-100 block mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
