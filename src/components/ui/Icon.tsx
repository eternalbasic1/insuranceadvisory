"use client";

import {
  MessageSquare,
  BarChart3,
  GitCompare,
  LifeBuoy,
  HeartPulse,
  Shield,
  Users,
  ClipboardCheck,
  BadgeCheck,
  Scale,
  Cpu,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Star,
  TrendingUp,
  AlertTriangle,
  type LucideProps,
} from "lucide-react";

const icons = {
  MessageSquare,
  BarChart3,
  GitCompare,
  LifeBuoy,
  HeartPulse,
  Shield,
  Users,
  ClipboardCheck,
  BadgeCheck,
  Scale,
  Cpu,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Star,
  TrendingUp,
  AlertTriangle,
} as const;

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name];
  return <LucideIcon {...props} />;
}
