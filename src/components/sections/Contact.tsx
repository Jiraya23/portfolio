'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'

import { Mail, MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
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

  const form = useForm<ContactFormValues>({
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
      form.reset()
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="space-y-8 lg:col-span-2">
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
                <div className="font-bold text-[#dfe3e7]">Douala, Cameroun</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
              {t('available') || 'Disponible immédiatement pour vos projets'}
            </div>
          </div>

          <div className="lg:col-span-3 bg-[#1e1e2e]/60 backdrop-blur-[16px] border border-white/10 p-10 md:p-14 rounded-2xl relative hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] hover:border-[#8b5cf6]/30 transition-all duration-300">
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-[#8b5cf6]/20 blur-[60px] rounded-full"></div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>{t('name') || 'Nom complet'}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-14 text-base px-6 bg-[#13131a]/80 border-[#494454] rounded-xl focus-visible:border-[#8b5cf6] focus-visible:ring-1 focus-visible:ring-[#8b5cf6] transition-all text-[#dfe3e7]"
                            placeholder="Entrez votre nom"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>{t('email') || 'Email'}</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-14 text-base px-6 bg-[#13131a]/80 border-[#494454] rounded-xl focus-visible:border-[#8b5cf6] focus-visible:ring-1 focus-visible:ring-[#8b5cf6] transition-all text-[#dfe3e7]"
                            placeholder="entrez votre adresse mail"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>{t('subject') || 'Sujet'}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="h-14 text-base px-6 bg-[#13131a]/80 border-[#494454] rounded-xl focus-visible:border-[#8b5cf6] focus-visible:ring-1 focus-visible:ring-[#8b5cf6] transition-all text-[#dfe3e7]"
                          placeholder="Collaboration / Freelance / Question"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>{t('message') || 'Message'}</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="min-h-[180px] text-base px-6 py-4 bg-[#13131a]/80 border-[#494454] rounded-xl focus-visible:border-[#8b5cf6] focus-visible:ring-1 focus-visible:ring-[#8b5cf6] transition-all text-[#dfe3e7] resize-y"
                          placeholder="Votre message ici..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              {status === 'success' && (
                <p className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-base text-green-200">{t('success')}</p>
              )}

              {status === 'error' && errorMessage && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-base text-red-200">{errorMessage}</p>
              )}

              <Button
                size="lg"
                className="w-full h-16 text-lg font-bold rounded-xl mt-4"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t('sending') : t('send')}
              </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
