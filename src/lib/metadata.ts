import type { Metadata } from "next";

const BASE_URL = "https://advisory.houseofdarmoji.com";
const SITE_NAME = "House of Darmoji Advisory";
const DEFAULT_DESCRIPTION =
  "Independent insurance advisory platform offering transparent, education-first guidance on health insurance, term life, and policy audits. No pressure. Just clarity.";

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage = "/og-default.png",
}: {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const desc = description ?? DEFAULT_DESCRIPTION;
  const url = `${BASE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description: desc,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export const defaultMetadata: Metadata = buildMetadata({
  title: "Insurance Guidance. Not Sales Pressure.",
  description: DEFAULT_DESCRIPTION,
});
