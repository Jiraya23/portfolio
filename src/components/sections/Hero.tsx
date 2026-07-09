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
import { useRef, useEffect, useState } from 'react'

// Tech badges data with positions (degrees)
const techBadges = [
  { name: 'React', icon: Code, position: 0 },
  { name: 'TypeScript', icon: Code2, position: 90 },
  { name: 'Node.js', icon: DatabaseZap, position: 180 },
  { name: 'Next.js', icon: Layout, position: 270 },
]

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

  const trustSignals = [
    { label: tAbout('experience'), value: '5+' },
    { label: tAbout('projects'), value: '30+' },
    { label: tNav('testimonials'), value: '15+' }
  ]

  // Ref and state to compute a responsive radius for badge placement
  const circleRef = useRef<HTMLDivElement | null>(null)
  const [radius, setRadius] = useState(0)

  useEffect(() => {
    function updateRadius() {
      if (!circleRef.current) return
      const w = circleRef.current.clientWidth
      // radius is 45% of container width
      setRadius(Math.round(w * 0.45))
    }

    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-accent-500/20 rounded-full blur-[120px] opacity-60" />
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
            className="relative"
          >
            <div className="relative z-10 flex justify-center">
              {/* Rotating container with circle and badges */}
              <motion.div
                ref={circleRef}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
              >
                {/* Dotted rotating circle */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-500/30" />

                {/* Tech badges positioned using CSS transforms and dynamic radius */}
                {techBadges.map((tech) => {
                  const angleDeg = tech.position

                  // If radius is 0 (not measured yet), stack badges near center to avoid huge offsets
                  const translateStyle = radius
                    ? `translate(-50%, -50%) rotate(${angleDeg}deg) translate(${radius}px) rotate(-${angleDeg}deg)`
                    : 'translate(-50%, -50%)'

                  return (
                    <div
                      key={tech.name}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: translateStyle }}
                    >
                      <motion.div
                        animate={{ rotate: -360, opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                          default: { delay: 0.8, duration: 0.5 }
                        }}
                      >
                        <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl px-3 py-1 shadow-lg text-sm">
                          <tech.icon className="w-4 h-4 text-accent-400" />
                          <span className="font-medium text-white">
                            {tech.name}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  )
                })}

                {/* Main circular image in the center (not rotating) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }}>
                  <div className="relative w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64">
                    {/* Glow effect behind the circle */}
                    <div className="absolute inset-0 bg-accent-500/30 rounded-full blur-[60px] -z-10" />

                    {/* Circular static image */}
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-dashed border-accent-500/50 shadow-violet-lg bg-slate-950">
                      <Image
                        src="/hero-illustration.svg"
                        alt="Illustration Hero"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
