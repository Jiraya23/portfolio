import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  size = "default",
  padding = "md",
  interactive = false,
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm"
  padding?: "none" | "sm" | "md" | "lg"
  interactive?: boolean
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-padding={padding}
      data-interactive={interactive}
      className={cn(
        "group/card flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[rgba(30,30,46,0.7)] text-slate-100 shadow-(--shadow-card) backdrop-blur-xl transition-all duration-300 has-[>img:first-child]:pt-0 data-[size=sm]:rounded-2xl data-[padding=none]:p-0 data-[padding=sm]:p-4 data-[padding=md]:p-6 data-[padding=lg]:p-8 data-[interactive=true]:hover:-translate-y-1 data-[interactive=true]:hover:border-accent-500/40 data-[interactive=true]:hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] *:[img:first-child]:rounded-t-3xl *:[img:last-child]:rounded-b-3xl data-[size=sm]:*:[img:first-child]:rounded-t-2xl data-[size=sm]:*:[img:last-child]:rounded-b-2xl",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-(--font-grotesk) text-xl leading-snug text-white group-data-[size=sm]/card:text-lg",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-6 text-slate-400", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("text-sm text-slate-300", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "mt-6 flex items-center border-t border-white/10 pt-4 text-sm text-slate-400",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
