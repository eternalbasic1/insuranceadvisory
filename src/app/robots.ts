import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://insuranceadvisory.houseofdarmoji.com/sitemap.xml",
  };
}
