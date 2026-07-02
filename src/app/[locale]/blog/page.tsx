'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { blogPosts } from '@/data/blogPosts'
import { SectionTitle } from '@/components/ui/SectionTitle'

export default function BlogListingPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = useTranslations('blog')
  const { locale } = use(params)

  return (
    <main className="bg-dark-950 text-white py-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          label={t('title')}
          title={t('subtitle')}
          align="center"
          className="mb-16"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-3xl border border-white/10 bg-gray-900/50 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-2 hover:border-accent-500/50"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
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

              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white">{post.title}</h2>
                <p className="text-sm leading-6 text-slate-400">{post.description}</p>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition hover:text-accent-300"
                >
                  {t('read_more')} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
