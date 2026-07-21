"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { Globe, Menu, Sparkles } from "lucide-react"

import { ThemeToggle } from "@/components/ThemeToggle"
import { buttonVariants } from "@/components/ui/Button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { cn } from "@/lib/utils"

type NavItem = {
  key:
    | "about"
    | "skills"
    | "experience"
    | "projects"
    | "services"
    | "blog"
    | "contact"
  href: string
}

const navItems: NavItem[] = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "services", href: "#services" },
  { key: "blog", href: "#blog" },
  { key: "contact", href: "#contact" },
]

function getLocalePath(pathname: string, locale: string) {
  if (!pathname) {
    return `/${locale}`
  }

  return pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${locale}`)
}

export default function Navbar() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection()
  const scrollProgress = useScrollProgress()

  const isHomePage = pathname === `/${locale}`

  const languageLinks = useMemo(
    () => ({
      fr: getLocalePath(pathname, "fr"),
      en: getLocalePath(pathname, "en"),
    }),
    [pathname]
  )

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  const sectionHref = (hash: string) => {
    return isHomePage ? hash : `/${locale}${hash}`
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-border bg-background/80 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="h-1 w-full overflow-hidden bg-secondary">
        <div
          className="h-full bg-accent-400 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <nav className="container-main flex h-20 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-(--font-grotesk) text-xl tracking-tight text-foreground transition hover:text-accent-500"
        >
          <span>Myli</span>
          <span className="size-2 rounded-full bg-accent-500 shadow-[0_0_12px_rgba(139,92,246,0.7)]" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "")
            const isActive = isHomePage && activeSection === sectionId

            return (
              <Link
                key={item.key}
                href={sectionHref(item.href)}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  isActive && "text-accent-500"
                )}
              >
                {t(item.key)}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center rounded-full border border-border bg-secondary p-1 backdrop-blur-sm">
            <Link
              href={languageLinks.fr}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition",
                locale === "fr"
                  ? "bg-accent-500 text-white shadow-(--shadow-violet)"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              FR
            </Link>
            <Link
              href={languageLinks.en}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition",
                locale === "en"
                  ? "bg-accent-500 text-white shadow-(--shadow-violet)"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              EN
            </Link>
          </div>

          <Link
            href={sectionHref("#contact")}
            className={cn(buttonVariants({ variant: "primary", size: "md" }), "min-w-36")}
          >
            {t("cta")}
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={languageLinks[locale === "fr" ? "en" : "fr"]}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground backdrop-blur-sm transition hover:border-accent-500/40 hover:text-foreground"
            aria-label="Switch language"
          >
            <Globe className="size-4" />
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground backdrop-blur-sm transition hover:border-accent-500/40 hover:text-foreground"
                  aria-label="Open navigation"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="top"
              className="border-b border-border bg-background/95 px-6 pb-8 pt-4 text-foreground backdrop-blur-2xl"
            >
              <div className="absolute right-16 top-4">
                <ThemeToggle />
              </div>
              <SheetHeader className="px-0 pb-6">
                <SheetTitle className="flex items-center gap-2 text-foreground">
                  <Sparkles className="size-4 text-accent-500" />
                  Navigation
                </SheetTitle>
                <SheetDescription className="text-muted-foreground">
                  Explore le portfolio et va directement a la section qui t interesse.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={sectionHref(item.href)}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl border border-border bg-secondary px-4 py-3 text-sm font-medium text-muted-foreground transition hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-foreground"
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href={sectionHref("#contact")}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "md" }),
                    "w-full"
                  )}
                >
                  {t("cta")}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
