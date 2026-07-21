import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { ThemeProvider } from '@/components/ThemeProvider'
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://myli237.vercel.app'),
  title: {
    default: 'Myli - Développeur Web Fullstack',
    template: '%s | Myli'
  },
  description: 'Portfolio de Myli, développeur web fullstack. Spécialisé en React, Next.js, Node.js.',
  keywords: ['développeur web', 'portfolio', 'React', 'Next.js', 'fullstack'],
  authors: [{ name: 'Myli' }],
  creator: 'Myli',
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      fr: '/fr',
      en: '/en',
    },
  },
  openGraph: {
    title: 'Myli - Développeur Web Fullstack',
    description: 'Portfolio de Myli, développeur web fullstack. Spécialisé en React, Next.js, Node.js.',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/images/projects/nextjs-homepage-optimisation.jpg',
        width: 1200,
        height: 630,
        alt: 'Myli portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Myli - Développeur Web Fullstack',
    description: 'Portfolio de Myli, développeur web fullstack. Spécialisé en React, Next.js, Node.js.',
    images: ['/images/projects/nextjs-homepage-optimisation.jpg'],
  },
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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
