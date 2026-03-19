"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_KEY = "2a6b0662-8329-49f0-98a7-e012a29e94db";

const serviceOptions = [
  { value: "Free Consultation (30 min)", label: "Free Consultation (30 min)" },
  { value: "Policy Health Check (Audit)", label: "Policy Health Check (Audit)" },
  { value: "Health Insurance Planning", label: "Health Insurance Planning" },
  { value: "Term Life Insurance Planning", label: "Term Life Insurance Planning" },
  { value: "Claim Guidance & Support", label: "Claim Guidance & Support" },
  { value: "Other / Not Sure Yet", label: "Other / Not Sure Yet" },
];

export function ConsultationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const values = {
      name: (data.get("name") as string) ?? "",
      phone: (data.get("phone") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      service: (data.get("service") as string) ?? "",
      message: (data.get("message") as string) ?? "",
    };

    // Client-side validation
    const newErrors: Record<string, string> = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.phone.trim()) newErrors.phone = "Phone number is required";
    if (values.phone && !/^[6-9]\d{9}$/.test(values.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    if (!values.service) newErrors.service = "Please select a service";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      // Build payload for Web3Forms
      const payload = new FormData();
      payload.append("access_key", WEB3FORMS_KEY);
      payload.append("subject", `Advisory Request: ${values.service} — ${values.name}`);
      payload.append("from_name", values.name);
      payload.append("name", values.name);
      payload.append("phone", `+91 ${values.phone}`);
      if (values.email) {
        payload.append("email", values.email);
        payload.append("replyto", values.email);
      }
      payload.append("service_requested", values.service);
      if (values.message) payload.append("message", values.message);
      // Honeypot — must be empty for real submissions
      payload.append("botcheck", "");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms error:", result.message);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center rounded-3xl border border-emerald-100 bg-emerald-50 p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 mx-auto mb-5">
          <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Request received</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Thank you for reaching out. You'll receive a response within 24 hours to confirm
          your consultation slot. If you prefer a faster response, message directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/918341510944"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6 inline-flex"
        >
          Message on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a consultation</h2>
        <p className="text-sm text-slate-500">
          Fill in your details below. No spam, no follow-up calls you didn't ask for.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot — hidden from real users, catches bots */}
        <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Arjun Sharma"
              className="form-input"
            />
            {errors.name && <p className="mt-1.5 text-xs text-rose-600">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium select-none">
                +91
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="98765 43210"
                className="form-input pl-12"
              />
            </div>
            {errors.phone && <p className="mt-1.5 text-xs text-rose-600">{errors.phone}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email Address{" "}
            <span className="text-slate-400 font-normal">(optional — for written summary)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="arjun@example.com"
            className="form-input"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
            What would you like help with? <span className="text-rose-500">*</span>
          </label>
          <select id="service" name="service" defaultValue="" className="form-input bg-slate-50">
            <option value="" disabled>Select a service...</option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-rose-600">{errors.service}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Anything specific you'd like to discuss?{" "}
            <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="e.g. I have a ₹5L corporate health plan and want to understand if it's sufficient, or I want to review an old LIC policy my parents took..."
            className="form-input resize-none"
          />
        </div>

        {/* Privacy note */}
        <p className="text-xs text-slate-400 leading-relaxed">
          Your information is used solely to prepare for and conduct your consultation.
          It is never shared with third parties or used for marketing.
        </p>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full sm:w-auto text-base px-10 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </button>

          {status === "error" && (
            <p className="mt-3 text-sm text-rose-600">
              Something went wrong. Please try{" "}
              <a href="https://wa.me/918341510944" className="underline font-medium">
                WhatsApp
              </a>{" "}
              or email instead.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
