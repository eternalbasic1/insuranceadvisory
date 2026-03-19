import { clsx } from "clsx";
import type { ServiceItem } from "@/types";
import { Icon, type IconName } from "./Icon";

interface ServiceCardProps extends ServiceItem {
  highlighted?: boolean;
}

export function ServiceCard({
  title,
  description,
  icon,
  features,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl p-8 transition-all duration-300",
        highlighted
          ? "bg-brand-600 text-white shadow-elevated"
          : "border border-slate-100 bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
      )}
    >
      {/* Icon */}
      <div
        className={clsx(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
          highlighted ? "bg-white/20" : "bg-brand-50"
        )}
      >
        <Icon
          name={icon as IconName}
          className={clsx("h-6 w-6", highlighted ? "text-white" : "text-brand-600")}
          strokeWidth={1.75}
        />
      </div>

      <h3
        className={clsx(
          "mb-3 text-xl font-semibold",
          highlighted ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "mb-6 text-sm leading-relaxed",
          highlighted ? "text-brand-100" : "text-slate-500"
        )}
      >
        {description}
      </p>

      {/* Feature list */}
      <ul className="mt-auto space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <svg
              className={clsx(
                "mt-0.5 h-4 w-4 flex-shrink-0",
                highlighted ? "text-brand-200" : "text-brand-500"
              )}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span
              className={clsx(
                "text-sm",
                highlighted ? "text-brand-50" : "text-slate-600"
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
