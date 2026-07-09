'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'

import { Mail, MapPin } from 'lucide-react'

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
    <section id="contact" className="py-20 bg-[#171c1f]">
      <div className="max-w-[1200px] mx-auto px-12">
        <h2 className="text-[32px] md:text-[40px] font-bold mb-20 relative text-[#dfe3e7] after:content-[''] after:block after:w-[60px] after:h-1 after:bg-[#8b5cf6] after:mt-3 after:rounded-sm">
          {t('subtitle') || 'Parlons de votre projet'}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="bg-[#1e1e2e]/60 backdrop-blur-[16px] border border-white/10 p-12 rounded-xl flex items-center gap-6 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-[#8b5cf6]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-[#8b5cf6]/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-[#8b5cf6] w-6 h-6" />
              </div>
              <div>
                <div className="text-[#cbc3d7] text-sm tracking-wide font-medium mb-1">Email</div>
                <div className="font-bold text-[#dfe3e7]">contact@prenom.dev</div>
              </div>
            </div>
            
            <div className="bg-[#1e1e2e]/60 backdrop-blur-[16px] border border-white/10 p-12 rounded-xl flex items-center gap-6 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-[#8b5cf6]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-[#8b5cf6]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-[#8b5cf6] w-6 h-6" />
              </div>
              <div>
                <div className="text-[#cbc3d7] text-sm tracking-wide font-medium mb-1">
                  {t('location') || 'Localisation'}
                </div>
                <div className="font-bold text-[#dfe3e7]">Paris, France</div>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
              {t('available') || 'Disponible immédiatement pour vos projets'}
            </div>
          </div>
          
          <div className="bg-[#1e1e2e]/60 backdrop-blur-[16px] border border-white/10 p-12 md:p-12 rounded-xl relative hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-[#8b5cf6]/40 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-[#8b5cf6]/20 blur-[60px] rounded-full"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#cbc3d7]">{t('name') || 'Nom complet'}</label>
                  <input
                    {...register('name')}
                    className="w-full bg-[#13131a] border border-[#494454] rounded-xl focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all px-6 py-3 text-[#dfe3e7] outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#cbc3d7]">{t('email') || 'Email'}</label>
                  <input
                    {...register('email')}
                    className="w-full bg-[#13131a] border border-[#494454] rounded-xl focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all px-6 py-3 text-[#dfe3e7] outline-none"
                    placeholder="john@example.com"
                    type="email"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#cbc3d7]">{t('subject') || 'Sujet'}</label>
                <input
                  {...register('subject')}
                  className="w-full bg-[#13131a] border border-[#494454] rounded-xl focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all px-6 py-3 text-[#dfe3e7] outline-none"
                  placeholder="Collaboration / Freelance / Question"
                  type="text"
                />
                {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#cbc3d7]">{t('message') || 'Message'}</label>
                <textarea
                  {...register('message')}
                  className="w-full bg-[#13131a] border border-[#494454] rounded-xl focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all px-6 py-3 text-[#dfe3e7] outline-none"
                  placeholder="Votre message..."
                  rows={4}
                ></textarea>
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
              </div>
              
              {status === 'success' && (
                <p className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-200">{t('success')}</p>
              )}

              {status === 'error' && errorMessage && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">{errorMessage}</p>
              )}

              <button
                className="w-full bg-[#8b5cf6] text-white py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all flex justify-center items-center mt-6 disabled:opacity-70"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t('sending') : t('send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
