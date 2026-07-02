import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

export const metadata: Metadata = {
  title: {
    default: 'Myli - Développeur Web Fullstack',
    template: '%s | Myli'
  },
  description: 'Portfolio de Myli, développeur web fullstack. Spécialisé en React, Next.js, Node.js.',
  keywords: ['développeur web', 'portfolio', 'React', 'Next.js', 'fullstack'],
  authors: [{ name: 'Myli' }],
  creator: 'Myli',
  robots: { index: true, follow: true },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
