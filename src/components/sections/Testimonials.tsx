'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { testimonials } from '@/data/testimonials'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const t = useTranslations('testimonials')

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-secondary/20"
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative p-8 rounded-2xl bg-card/40 border border-border backdrop-blur-sm hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-accent-500/40 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-6 right-6">
                  <Quote className="w-10 h-10 text-accent-500/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {`${testimonial.content}&quot;`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
