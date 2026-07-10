'use client'

import { useTranslations } from 'next-intl'
import { buttonVariants } from '@/components/ui/Button'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Coffee, FolderOpen } from 'lucide-react'

export default function About() {
  const t = useTranslations('about')

  const stats = [
    { icon: MapPin, label: t('location'), value: 'Douala, CAM' },
    { icon: Briefcase, label: t('experience'), value: '5+ Années' },
    { icon: FolderOpen, label: t('projects'), value: '3+' },
    { icon: Coffee, label: t('coffee'), value: '100%' },
  ]

  return (
    <section
      id="about"
      className="relative py-24"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-linear-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-6">
                    <span className="text-6xl font-bold text-white">M</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping absolute left-4" />
                    <span className="w-2 h-2 rounded-full bg-green-400 relative" />
                    <span className="text-accent-400 text-sm font-medium">Open to work</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-tr from-accent-500/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle
              label={t('title')}
              title={t('subtitle')}
              align="left"
            />

            <div className="mt-8 space-y-4 text-gray-400 text-lg">
              <p>{t('bio1')}</p>
              <p>{t('bio2')}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-accent-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-5 h-5 text-accent-400" />
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/cv.pdf"
                download="Cv_Myli.pdf"
                className={buttonVariants({ size: 'lg', variant: 'outline', className: 'gap-2' })}
              >
                {t('cta')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
