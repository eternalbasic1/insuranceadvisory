import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <span className="text-7xl font-black text-slate-100 block mb-6">404</span>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Page not found</h1>
        <p className="text-slate-500 mb-8 text-sm leading-relaxed">
          This page doesn't exist. If you were looking for a specific article or service,
          try navigating from the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/contact" className="btn-secondary">Book Consultation</Link>
        </div>
      </div>
    </div>
  );
}
