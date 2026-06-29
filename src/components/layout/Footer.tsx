"use client"

import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import type { IconType } from "react-icons"
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { FiMail } from "react-icons/fi"

import { Separator } from "@/components/ui/separator"

type SocialLink = {
  name: string
  href: string
  icon: IconType
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/Jiraya23", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedinIn },
  { name: "X", href: "https://x.com", icon: FaXTwitter },
  { name: "Email", href: "mailto:hello@myli.dev", icon: FiMail },
]

export default function Footer() {
  const tNav = useTranslations("nav")
  const tFooter = useTranslations("footer")
  const locale = useLocale()

  const links = [
    { label: tNav("about"), href: `/${locale}#about` },
    { label: tNav("skills"), href: `/${locale}#skills` },
    { label: tNav("projects"), href: `/${locale}#projects` },
    { label: tNav("services"), href: `/${locale}#services` },
    { label: tNav("blog"), href: `/${locale}#blog` },
    { label: tNav("contact"), href: `/${locale}#contact` },
  ]

  return (
    <footer className="border-t border-white/10 bg-dark-950/80">
      <div className="container-main py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 font-(--font-grotesk) text-2xl text-white"
            >
              <span>Myli</span>
              <span className="size-2 rounded-full bg-accent-500 shadow-[0_0_12px_rgba(139,92,246,0.7)]" />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              {tFooter("tagline")} avec une approche orientee produit, design et performance.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">
              Navigation
            </p>

            <div className="grid gap-3 text-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">
              Reseaux
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm transition hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-white"
                    aria-label={item.name}
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Myli. {tFooter("rights")}.
          </p>
          <p>Fait avec Next.js, shadcn/ui et une stack prete pour Docker.</p>
        </div>
      </div>
    </footer>
  )
}
