export interface NavLink {
  label: string;
  href: string;
}

export interface MythCard {
  myth: string;
  reality: string;
  insight: string;
  category: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface InsuranceArea {
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface TrustSignal {
  title: string;
  description: string;
  icon: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

export interface PolicyCheckItem {
  label: string;
  description: string;
}

export interface ContactMethod {
  type: "whatsapp" | "email" | "consultation";
  label: string;
  value: string;
  icon: string;
}
