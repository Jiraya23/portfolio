import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { blogPosts } from '@/data/blogPosts'

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((item) => item.slug === params.slug)

  if (!post) {
    notFound()
  }

  return {
    title: `${post.title} | Myli`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Myli`,
      description: post.description,
      type: 'article',
      locale: params.locale === 'fr' ? 'fr_FR' : 'en_US',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Myli`,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `/${params.locale}/blog/${params.slug}`,
      languages: {
        fr: `/fr/blog/${params.slug}`,
        en: `/en/blog/${params.slug}`,
      },
    },
  }
}

export default function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  // Schema.org JSON-LD for Article
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `https://myli-portfolio.com${post.image}`,
    author: {
      '@type': 'Person',
      name: 'Myli',
    },
    datePublished: new Date(post.date).toISOString() !== 'Invalid Date' 
      ? new Date(post.date).toISOString() 
      : new Date().toISOString(),
  }

  return (
    <main className="bg-dark-950 text-white py-24">
      <article className="container mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <section className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl font-bold text-white">{post.title}</h1>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8 rounded-3xl border border-white/10 bg-gray-900/50 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="relative h-72 overflow-hidden rounded-3xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </div>

              <div className="space-y-6 text-slate-300">
                <p>{post.description}</p>
                <p>
                  Ce billet présente une approche structurée pour créer une page de blog engageante, conservant un design premium et une navigation claire.
                </p>
                <p>
                  Les articles sont pensés pour aider les développeurs et les porteurs de projet à comprendre les meilleurs choix techniques pour un portfolio moderne.
                </p>
              </div>
            </div>
          </section>

          <aside className="space-y-6 rounded-3xl border border-white/10 bg-gray-900/50 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div>
              <h2 className="text-xl font-bold text-white">À propos de l&apos;article</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Une lecture rapide pour comprendre pourquoi ce type de contenu renforce le SEO et la crédibilité d&apos;un site portfolio.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.24em] text-slate-500">Articles récents</h3>
              <div className="space-y-3">
                {blogPosts.slice(0, 3).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/blog/${item.slug}`}
                    className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300 transition hover:border-accent-500/50 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={`/${locale}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-accent-500/30 bg-accent-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent-300 transition hover:bg-accent-500/20"
            >
              Retour au blog
            </Link>
          </aside>
        </div>
      </article>
    </main>
  )
}
