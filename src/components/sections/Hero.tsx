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
  DatabaseZap,
  Code,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
export default function Hero() {
  const t = useTranslations('hero')
  const tNav = useTranslations('nav')
  const tAbout = useTranslations('about')
  const isVisible = true

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Jiraya23', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mbougniayann@gmail.com', label: 'Email' }
  ]

  // JSON-LD Person Schema for SEO
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Myli',
    jobTitle: 'Développeur Fullstack',
    url: 'https://myli-portfolio.com',
    sameAs: [
      'https://github.com/Jiraya23',
      'https://linkedin.com'
    ]
  }

  const trustSignals = [
    { label: tAbout('experience'), value: '5+' },
    { label: tAbout('projects'), value: '3+' },
    { label: tNav('testimonials'), value: '3+' }
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-accent-500/25 to-transparent -z-10 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-accent-600/10 rounded-full blur-[100px] opacity-40" />
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
            className="relative flex justify-center items-center"
          >
            {/* Outer Glow Backdrop */}
            <div className="absolute inset-0 bg-[#8b5cf6]/20 blur-[120px] rounded-full scale-150 -z-10"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-dashed border-[#8b5cf6]/30 rounded-full"
              ></motion.div>

              {/* Central Image Wrapper */}
              <div className="absolute inset-8 md:inset-10 lg:inset-12 rounded-full overflow-hidden border border-white/10 bg-[#1e1e2e]/60 backdrop-blur-[16px] shadow-2xl">
                <Image
                  src="/hero-illustration.svg"
                  alt="Futuristic 3D Crystal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 right-10 bg-[#1e1e2e]/60 backdrop-blur-[16px] border border-[#8b5cf6]/40 px-4 py-2 rounded-xl flex items-center shadow-xl animate-bounce">
                <span className="text-sm font-bold text-[#dfe3e7]">TypeScript</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-[#1e1e2e]/60 backdrop-blur-[16px] border border-[#8b5cf6]/40 px-4 py-2 rounded-xl flex items-center shadow-xl animate-pulse">
                <span className="text-sm font-bold text-[#dfe3e7]">Laravel</span>
              </div>
              <div className="absolute bottom-10 -left-6 bg-[#1e1e2e]/60 backdrop-blur-[16px] border border-[#8b5cf6]/40 px-4 py-2 rounded-xl flex items-center shadow-xl animate-pulse delay-700">
                <span className="text-sm font-bold text-[#dfe3e7]">React ⚛</span>
              </div>
              <div className="absolute top-20 -left-12 bg-[#1e1e2e]/60 backdrop-blur-[16px] border border-[#8b5cf6]/40 px-4 py-2 rounded-xl flex items-center shadow-xl animate-bounce delay-1000">
                <span className="text-sm font-bold text-[#dfe3e7]">Next.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
