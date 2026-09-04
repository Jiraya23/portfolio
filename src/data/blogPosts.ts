import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-an-optimized-homepage-with-nextjs',
    title: 'Building an optimized homepage with Next.js',
    description: 'How to structure a high-performance, accessible, and SEO-friendly portfolio with Next.js, Tailwind CSS, and a modular architecture.',
    date: '20 June 2026',
    readTime: '5 min',
    tags: ['Next.js', 'Performance', 'SEO'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'modern-internationalization-with-next-intl',
    title: 'Modern localization with next-intl',
    description: 'How to ship a clean multilingual site in Next.js with localized routes, server-side translations, and SEO-friendly structure.',
    date: '15 May 2026',
    readTime: '6 min',
    tags: ['i18n', 'Next.js', 'SEO'],
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'creating-a-reusable-design-system-with-tailwind',
    title: 'Creating a reusable design system with Tailwind CSS',
    description: 'Best practices for building maintainable UI components, button variants, and a consistent design language.',
    date: '8 April 2026',
    readTime: '7 min',
    tags: ['Design System', 'Tailwind', 'UI'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  },
]
