'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'

type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const contactSchema = z.object({
    name: z.string().min(2, t('errors.name')),
    email: z.string().email(t('errors.email')),
    subject: z.string().min(2, t('errors.subject')),
    message: z.string().min(10, t('errors.message')),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  })

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('sending')

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    if (response.ok) {
      setStatus('success')
      reset()
      return
    }

    setStatus('error')
  }

  return (
    <section id="contact" className="relative py-24 bg-dark-950">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-10">
            <SectionTitle
              label={t('title')}
              title={t('subtitle')}
              align="left"
            />

            <div className="rounded-3xl border border-white/10 bg-gray-900/50 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-accent-400">{t('location')}</p>
                    <p className="text-base text-white">Paris, France</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-3xl border border-white/10 bg-[rgba(139,92,246,0.08)] p-5">
                    <div className="flex items-center gap-3 text-accent-400">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-accent-500/10">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-accent-300">Email</p>
                        <p className="text-white">hello@myli.dev</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Badge variant="accent">Disponible</Badge>
                    <p className="text-slate-400">
                      {t('description')}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-white"
                      aria-label="GitHub"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="h-5 w-5" />
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-accent-500/40 hover:bg-accent-500/10 hover:text-white"
                      aria-label="X"
                    >
                      <FaXTwitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gray-900/50 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-white">{t('name')}</span>
                  <Input {...register('name')} placeholder={t('name')} />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-white">{t('email')}</span>
                  <Input {...register('email')} placeholder={t('email')} />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-white">{t('subject')}</span>
                <Input {...register('subject')} placeholder={t('subject')} />
                {errors.subject && (
                  <p className="text-sm text-destructive">{errors.subject.message}</p>
                )}
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-white">{t('message')}</span>
                <Textarea {...register('message')} placeholder={t('message')} rows={6} />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </label>

              <div className="flex flex-col gap-4">
                <Button type="submit" className="w-full" disabled={status === 'sending'}>
                  {status === 'sending' ? t('sending') : t('send')}
                </Button>

                {status === 'success' && (
                  <p className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-200">
                    {t('success')}
                  </p>
                )}

                {status === 'error' && (
                  <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
                    {t('error')}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
