import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces a static `out/` folder — served by Nginx like any React dist/
  output: "export",
  // Required for static export (no Next.js image optimization server)
  images: {
    unoptimized: true,
  },
  // Clean URLs: /about instead of /about.html
  trailingSlash: false,
};

export default nextConfig;
