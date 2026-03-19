import { clsx } from "clsx";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "blue" | "green" | "amber" | "slate";
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  badgeVariant = "blue",
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const titleParts = titleHighlight
    ? title.split(titleHighlight)
    : [title];

  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div className={clsx("mb-4", align === "center" && "flex justify-center")}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
        {titleHighlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{titleHighlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-500 text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
