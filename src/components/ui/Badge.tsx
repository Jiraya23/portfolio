import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide transition-all focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)]/50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm [a]:hover:border-[var(--color-accent-500)]/40 [a]:hover:text-white",
        accent:
          "border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] shadow-[0_0_20px_rgba(139,92,246,0.12)] [a]:hover:bg-[var(--color-accent-500)]/15",
        secondary:
          "border-white/10 bg-[var(--color-dark-100)] text-slate-200 [a]:hover:border-[var(--color-accent-500)]/30",
        destructive:
          "border-red-500/30 bg-red-500/10 text-red-200 focus-visible:ring-red-500/30 [a]:hover:bg-red-500/20",
        outline:
          "border-[var(--color-accent-500)]/30 bg-transparent text-[var(--color-accent-300)] [a]:hover:bg-[var(--color-accent-500)]/10",
        ghost:
          "border-transparent bg-transparent text-slate-400 hover:bg-white/5 hover:text-white",
        link: "border-transparent bg-transparent px-0 text-[var(--color-accent-400)] hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
