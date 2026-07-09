'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
    setErrorMessage(null)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    const data = await response.json().catch(() => null)

    if (response.ok) {
      setStatus('success')
      reset()
      return
    }

    setStatus('error')
    setErrorMessage(typeof data?.error === 'string' ? data.error : t('error'))
  }

  return (
    <section id="contact" className="py-section-gap px-gutter bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-unit-xl items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">{t('title')}</p>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">{t('subtitle')}</h2>
              <div className="h-1 w-16 rounded-full bg-primary" />
            </div>

            <p className="max-w-xl text-body-lg text-on-surface-variant">{t('description')}</p>

            <div className="rounded-3xl border border-white/10 bg-surface-container/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary">Email</p>
                  <p className="text-sm font-semibold text-on-surface">contact@prenom.dev</p>
                </div>

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary">{t('location')}</p>
                  <p className="text-sm font-semibold text-on-surface">Paris, France</p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary shadow-[0_0_40px_rgba(139,92,246,0.16)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{t('available')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-surface-container/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="space-y-2 block">
                  <span className="text-sm font-label-caps text-on-surface-variant uppercase">{t('name')}</span>
                  <Input {...register('name')} placeholder={t('name')} />
                  {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </label>

                <label className="space-y-2 block">
                  <span className="text-sm font-label-caps text-on-surface-variant uppercase">{t('email')}</span>
                  <Input {...register('email')} placeholder={t('email')} type="email" />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </label>
              </div>

              <label className="space-y-2 block">
                <span className="text-sm font-label-caps text-on-surface-variant uppercase">{t('subject')}</span>
                <Input {...register('subject')} placeholder={t('subject')} />
                {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
              </label>

              <label className="space-y-2 block">
                <span className="text-sm font-label-caps text-on-surface-variant uppercase">{t('message')}</span>
                <Textarea {...register('message')} placeholder={t('message')} rows={6} />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </label>

              {status === 'success' && (
                <p className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-200">{t('success')}</p>
              )}

              {status === 'error' && errorMessage && (
                <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">{errorMessage}</p>
              )}

              <Button type="submit" className="w-full rounded-2xl py-4 text-sm font-semibold">
                {status === 'sending' ? t('sending') : t('send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
