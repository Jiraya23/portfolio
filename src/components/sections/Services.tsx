'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { services } from '@/data/services'
import {
  Monitor,
  Layout,
  Server,
  Sparkles,
  Zap,
  Rocket,
  ArrowRight
} from 'lucide-react'

// Map service icons to components
const iconMap: Record<string, React.ElementType> = {
  'monitor-smartphone': Monitor,
  'layout-template': Layout,
  'server-cog': Server,
  'sparkles': Sparkles,
  'zap': Zap,
  'rocket': Rocket,
}

export default function Services() {
  const t = useTranslations('services')

  return (
    <section
      id="services"
      className="relative py-24"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTitle
            label={t('title')}
            title={t('subtitle')}
            align="center"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative p-8 rounded-2xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-accent-500/50 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-accent-500/20 border border-accent-500/50 flex items-center justify-center mb-6 group-hover:bg-accent-500/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent-400 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                    <span className="text-sm font-medium">En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
