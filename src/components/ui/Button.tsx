import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border text-sm font-medium transition-all duration-300 outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)]/50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-accent-500)] bg-[var(--color-accent-500)] text-white shadow-[var(--shadow-violet)] hover:border-[var(--color-accent-600)] hover:bg-[var(--color-accent-600)] hover:shadow-[var(--shadow-violet-lg)]",
        primary:
          "border-[var(--color-accent-500)] bg-[var(--color-accent-500)] text-white shadow-[var(--shadow-violet)] hover:border-[var(--color-accent-600)] hover:bg-[var(--color-accent-600)] hover:shadow-[var(--shadow-violet-lg)]",
        outline:
          "border-border bg-secondary text-foreground backdrop-blur-sm hover:border-[var(--color-accent-500)]/50 hover:bg-[var(--color-accent-500)]/10 hover:text-accent-500",
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
        secondary:
          "border-border bg-secondary text-secondary-foreground hover:border-[var(--color-accent-500)]/40 hover:bg-secondary/80",
        destructive:
          "border-red-500/30 bg-red-500/10 text-red-200 hover:bg-red-500/20 hover:text-red-100",
        link: "border-transparent bg-transparent px-0 text-[var(--color-accent-400)] hover:text-[var(--color-accent-300)] hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, type ButtonProps, buttonVariants }
