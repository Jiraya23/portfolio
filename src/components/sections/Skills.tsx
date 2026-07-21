'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { skillsByCategory } from '@/data/skills'
import {
  Code2,
  Database,
  Terminal,
} from 'lucide-react'

type Category = 'frontend' | 'backend' | 'tools'

export default function Skills() {
  const t = useTranslations('skills')
  const [activeCategory, setActiveCategory] = useState<Category>('frontend')

  const tabs = [
    { id: 'frontend', label: t('frontend'), icon: Code2 },
    { id: 'backend', label: t('backend'), icon: Database },
    { id: 'tools', label: t('tools'), icon: Terminal },
  ]

  const currentSkills = skillsByCategory[activeCategory]

  return (
    <section
      id="skills"
      className="relative py-24 bg-background"
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

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as Category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-accent-500/20 border border-accent-500/50 text-accent-500 shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                    : 'bg-secondary border border-border text-muted-foreground hover:border-accent-500/30 hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {currentSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-accent-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-foreground">{skill.name}</span>
                </div>
                <Badge variant="outline" className="text-accent-400 border-accent-500/30">
                  {skill.level}%
                </Badge>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-2 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-full bg-linear-to-r from-accent-500 to-accent-600 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
