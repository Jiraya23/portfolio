'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import {
  Mail,
  ChevronRight,
  Sparkles,
  Code2,
  Layout,
  Database
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { cn } from '@/lib/utils'

export default function Hero() {
  const t = useTranslations('hero')
  const tNav = useTranslations('nav')
  const tAbout = useTranslations('about')
  const isVisible = true

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
  ]

  const trustSignals = [
    { label: tAbout('experience'), value: '5+' },
    { label: tAbout('projects'), value: '30+' },
    { label: tNav('testimonials'), value: '15+' }
  ]

  const floatingTechs = [
    { icon: Code2, label: 'React', delay: 0.2 },
    { icon: Layout, label: 'Next.js', delay: 0.4 },
    { icon: Database, label: 'Node.js', delay: 0.6 }
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-accent-500/20 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-0 w-150 h-150 bg-accent-600/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability badge */}
            <div className="mb-6">
              <Badge variant="accent" className="gap-2 px-4 py-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                </span>
                {t('badge')}
              </Badge>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('greeting')}{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-400 to-accent-600">
                Myli
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-400 to-accent-600">
                {t('titleAccent')}
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              {t('description')}
            </p>

            {/* Trust signals */}
            <div className="flex gap-8 mb-8">
              {trustSignals.map((signal, idx) => (
                <motion.div
                  key={signal.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                >
                  <div className="text-3xl font-bold text-accent-400">
                    {signal.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {signal.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => {
                    const projects = document.getElementById('projects')
                    projects?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t('cta_primary')}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => {
                    const contact = document.getElementById('contact')
                    contact?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {tNav('cta')}
                  <Sparkles className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-accent-500/10 hover:border-accent-500 hover:text-accent-400 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main profile visual */}
            <div className="relative z-10">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
                {/* Placeholder for avatar/image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-white">M</span>
                    </div>
                    <p className="text-gray-400">Profile Placeholder</p>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-accent-500/20 to-transparent" />
              </div>
            </div>

            {/* Floating tech badges */}
            {floatingTechs.map((tech, idx) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + tech.delay }}
                  className={cn(
                    "absolute z-20",
                    idx === 0 && "top-8 right-0",
                    idx === 1 && "top-1/3 -left-4",
                    idx === 2 && "bottom-12 -right-8"
                  )}
                >
                  <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-3 shadow-lg">
                    <tech.icon className="w-5 h-5 text-accent-400" />
                    <span className="text-sm font-medium text-white">
                      {tech.label}
                    </span>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
