import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Footer from '@/components/layout/Footer'

// Dynamically import lower sections (Code Splitting)
const Skills = dynamic(() => import('@/components/sections/Skills'))
const Experience = dynamic(() => import('@/components/sections/Experience'))
const Projects = dynamic(() => import('@/components/sections/Projects'))
const Services = dynamic(() => import('@/components/sections/Services'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const Blog = dynamic(() => import('@/components/sections/Blog'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const title = resolvedParams.locale === 'fr' ? 'Myli-Portfolio' : 'Myli-Portfolio'
  const description =
    resolvedParams.locale === 'fr'
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
      locale: resolvedParams.locale === 'fr' ? 'fr_FR' : 'en_US',
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
      canonical: `/${resolvedParams.locale}`,
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
