import type {
  MythCard,
  ServiceItem,
  ProcessStep,
  InsuranceArea,
  TrustSignal,
  InsightArticle,
  PolicyCheckItem,
  NavLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const myths: MythCard[] = [
  {
    myth: "My corporate health insurance is enough coverage.",
    reality:
      "Employer insurance is group coverage that ends the day you resign or get laid off. It typically has low sum insured (₹3–5L) with sub-limits that reduce actual payouts significantly.",
    insight:
      "A personal health plan running alongside your employer coverage costs ₹600–900/month and protects you during job transitions, retirement, and medical inflation beyond your group policy limits.",
    category: "Health Insurance",
  },
  {
    myth: "I'm young and healthy — I don't need term insurance yet.",
    reality:
      "Term insurance isn't about current health risk. It's about locking in the lowest premiums while you're young. A 28-year-old pays 60–70% less than a 42-year-old for the same cover.",
    insight:
      "Waiting a decade to buy a ₹1Cr term cover can cost you ₹4,000–6,000 more per year — for the same policy. That's ₹80,000+ in extra premiums over 20 years.",
    category: "Term Insurance",
  },
  {
    myth: "Insurance is an investment — I should get ULIPs or endowment plans.",
    reality:
      "Insurance and investments serve different financial goals. Mixing them creates a product that does neither well. ULIPs have high charges; endowments offer 4–5% returns versus 10–12% from index funds.",
    insight:
      "Keep insurance pure. A term plan protects your family. An index fund builds wealth. Doing both separately, purposefully, outperforms any bundled product over a 20-year horizon.",
    category: "Policy Structure",
  },
  {
    myth: "Comparing plans online is all the guidance I need.",
    reality:
      "Aggregator sites rank by premium. They don't analyze sub-limits, room rent capping, pre-existing disease waiting periods, or claim settlement behavior — the factors that actually matter.",
    insight:
      "Two plans at ₹12,000/year can differ dramatically in real payout. One may cover a ₹1.2L hospital bill fully; another may cover only ₹40,000 due to room rent restrictions.",
    category: "Decision Making",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "A structured 30-minute conversation to understand your current coverage, family situation, liabilities, and goals — without any product pitch.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Needs Analysis",
    description:
      "We map your income, dependents, existing policies, and risk exposure to define exactly what cover you need — and what you don't.",
    icon: "BarChart3",
  },
  {
    step: 3,
    title: "Plan Comparison",
    description:
      "Using structured comparison frameworks, we evaluate options across insurers on criteria that matter: claims behavior, sub-limits, and long-term value.",
    icon: "GitCompare",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description:
      "Advisory doesn't end at purchase. We assist with claim filing, policy reviews, and coverage adjustments as your life changes.",
    icon: "LifeBuoy",
  },
];

export const insuranceAreas: InsuranceArea[] = [
  {
    title: "Health Insurance",
    description:
      "Evaluate individual and family floater plans with focus on room rent, sub-limits, network hospitals, and claim settlement ratios.",
    icon: "HeartPulse",
    tag: "Most Requested",
  },
  {
    title: "Term Life Insurance",
    description:
      "Pure protection planning for income replacement. Understand coverage amounts, riders, and policy structuring for your dependents.",
    icon: "Shield",
    tag: "High Priority",
  },
  {
    title: "Family Protection",
    description:
      "Holistic coverage planning for your family unit — combining health, life, and critical illness cover in a structured framework.",
    icon: "Users",
    tag: "Comprehensive",
  },
  {
    title: "Policy Review & Audit",
    description:
      "Systematic review of existing policies — identify gaps, redundancies, legacy sub-limits, and whether your current cover is fit for purpose.",
    icon: "ClipboardCheck",
    tag: "Free Service",
  },
];

export const trustSignals: TrustSignal[] = [
  {
    title: "Certified Policybazaar Advisor",
    description:
      "Registered and certified through Policybazaar's advisor program, operating with full IRDAI compliance.",
    icon: "BadgeCheck",
  },
  {
    title: "Transparent, Conflict-Free Guidance",
    description:
      "Advisory recommendations are based on your needs, not commission structures. You receive honest analysis.",
    icon: "Scale",
  },
  {
    title: "Technology-Driven Analysis",
    description:
      "Structured comparison frameworks and analytical tools ensure decisions are data-driven, not intuition-led.",
    icon: "Cpu",
  },
  {
    title: "Long-Term Relationship",
    description:
      "Support extends beyond purchase — policy reviews, claim assistance, and coverage adjustments as your life evolves.",
    icon: "RefreshCw",
  },
];

export const policyCheckItems: PolicyCheckItem[] = [
  {
    label: "Room Rent Limits",
    description:
      "Many policies cap room rent at 1% of sum insured, triggering proportionate deductions across the entire bill.",
  },
  {
    label: "Sub-Limits & Co-Payment",
    description:
      "Disease-wise sub-limits restrict payouts for specific treatments regardless of your total coverage amount.",
  },
  {
    label: "Pre-Existing Disease Waiting Periods",
    description:
      "PED waiting periods of 2–4 years can leave you without coverage precisely when you need it most.",
  },
  {
    label: "Coverage Adequacy",
    description:
      "Medical inflation runs at 12–15% annually. Coverage adequate today may be significantly insufficient in 5 years.",
  },
  {
    label: "Restoration & No-Claim Benefits",
    description:
      "Understanding how and when your sum insured restores is critical for families with multiple members on one plan.",
  },
  {
    label: "Network Hospital Access",
    description:
      "Evaluating whether the insurer's cashless network covers hospitals in your area and preferred institutions.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Health Insurance Planning",
    description:
      "Structured evaluation of your health coverage needs based on family composition, medical history, and financial capacity.",
    icon: "HeartPulse",
    features: [
      "Individual and family floater comparison",
      "Sub-limit and room rent analysis",
      "Network hospital evaluation",
      "Claim settlement ratio assessment",
      "Top-up and super top-up strategy",
    ],
  },
  {
    title: "Term Life Insurance Planning",
    description:
      "Income replacement planning to ensure your family's financial continuity in the event of your absence.",
    icon: "Shield",
    features: [
      "Human Life Value (HLV) calculation",
      "Coverage amount structuring",
      "Rider evaluation (critical illness, disability)",
      "Policy term optimization",
      "Premium payment strategy",
    ],
  },
  {
    title: "Policy Audit & Review",
    description:
      "Comprehensive review of existing insurance policies to identify gaps, redundancies, and optimization opportunities.",
    icon: "ClipboardCheck",
    features: [
      "Legacy policy analysis",
      "Coverage gap identification",
      "Sub-limit impact assessment",
      "Premium-to-benefit ratio review",
      "Actionable upgrade roadmap",
    ],
  },
  {
    title: "Claim Guidance & Support",
    description:
      "Structured support during the claims process to ensure you receive what your policy entitles you to.",
    icon: "LifeBuoy",
    features: [
      "Pre-hospitalization documentation checklist",
      "Cashless claim initiation support",
      "Reimbursement claim filing assistance",
      "Insurer communication support",
      "Dispute escalation guidance",
    ],
  },
];

export const insights: InsightArticle[] = [
  {
    slug: "room-rent-capping-explained",
    title: "Room Rent Capping: The Hidden Clause That Shrinks Your Health Cover",
    excerpt:
      "Most policyholders discover room rent restrictions only when they file a claim. Here's how this clause works, the math behind proportionate deductions, and what to look for in a policy.",
    category: "Health Insurance",
    readTime: "6 min read",
    publishedAt: "2025-01-15",
  },
  {
    slug: "corporate-insurance-dependency-risk",
    title: "The Corporate Insurance Trap: Why Employer Cover Is a Liability",
    excerpt:
      "Relying exclusively on employer-provided health insurance is one of the most common and costly insurance mistakes. Here's the structured case for personal coverage.",
    category: "Risk Planning",
    readTime: "5 min read",
    publishedAt: "2025-01-22",
  },
  {
    slug: "term-insurance-timing",
    title: "The Cost of Waiting: Why Your 20s Are the Best Time for Term Insurance",
    excerpt:
      "The actuarial math behind why delaying a term plan by 10 years costs significantly more than most people realize — with real premium comparisons.",
    category: "Term Insurance",
    readTime: "4 min read",
    publishedAt: "2025-02-01",
  },
  {
    slug: "health-insurance-sub-limits",
    title: "Sub-Limits in Health Insurance: The Fine Print That Changes Everything",
    excerpt:
      "Cataract, knee replacement, dialysis — many plans cap payouts for specific treatments. Understanding these limits before you buy can prevent major financial gaps at claim time.",
    category: "Health Insurance",
    readTime: "7 min read",
    publishedAt: "2025-02-10",
  },
  {
    slug: "how-to-evaluate-claim-settlement",
    title: "Claim Settlement Ratio: What It Tells You — and What It Doesn't",
    excerpt:
      "CSR is a widely cited metric but poorly understood. Here's a framework for evaluating insurer reliability that goes beyond the headline percentage.",
    category: "Decision Making",
    readTime: "5 min read",
    publishedAt: "2025-02-18",
  },
  {
    slug: "insurance-needs-life-stages",
    title: "Insurance Across Life Stages: What You Need at 25, 35, and 45",
    excerpt:
      "Your insurance requirements change significantly as your responsibilities grow. A structured view of coverage priorities at each life stage.",
    category: "Life Planning",
    readTime: "8 min read",
    publishedAt: "2025-03-01",
  },
];
