import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const title = params.locale === 'fr' ? 'Accueil | Myli' : 'Home | Myli'
  const description =
    params.locale === 'fr'
      ? 'Portfolio de Myli, développeur web fullstack. Spécialisé en React, Next.js, Node.js.'
      : 'Myli portfolio, fullstack web developer. Specializing in React, Next.js, Node.js.'

  const t = await getTranslations('hero')

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: params.locale === 'fr' ? 'fr_FR' : 'en_US',
      images: [
        {
          url: '/images/projects/nextjs-homepage-optimisation.jpg',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/projects/nextjs-homepage-optimisation.jpg'],
    },
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        fr: '/fr',
        en: '/en',
      },
    },
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
