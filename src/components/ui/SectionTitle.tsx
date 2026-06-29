import { cn } from "@/lib/utils"

type SectionTitleProps = {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">
          {label}
        </p>
      ) : null}

      <div
        className={cn(
          "relative inline-flex flex-col gap-4",
          align === "center" && "items-center"
        )}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>

        <span className="h-1 w-16 rounded-full bg-accent-500 shadow-[0_0_14px_rgba(139,92,246,0.45)]" />
      </div>

      {description ? (
        <p
          className={cn(
            "max-w-2xl text-sm leading-7 text-slate-400 sm:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export { SectionTitle, type SectionTitleProps }
