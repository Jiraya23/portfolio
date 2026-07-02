import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'construire-une-homepage-optimisee-nextjs',
    title: 'Construire une homepage optimisée avec Next.js',
    description: 'Comment structurer un portfolio performant, accessible et SEO-friendly avec Next.js, Tailwind CSS et une architecture modulaire.',
    date: '20 juin 2026',
    readTime: '5 min',
    tags: ['Next.js', 'Performance', 'SEO'],
    image: '/globe.svg',
  },
  {
    slug: 'internationalisation-next-intl',
    title: 'Internationalisation moderne avec next-intl',
    description: 'Déployer un site multilingue propre en Next.js avec des routes localisées, des traductions côté serveur et un SEO adapté.',
    date: '15 mai 2026',
    readTime: '6 min',
    tags: ['i18n', 'Next.js', 'SEO'],
    image: '/window.svg',
  },
  {
    slug: 'ui-design-system-tailwind',
    title: 'Créer un design system réutilisable avec Tailwind CSS',
    description: 'Les meilleures pratiques pour construire des composants UI maintenables, des variantes de boutons et une palette cohérente.',
    date: '8 avril 2026',
    readTime: '7 min',
    tags: ['Design System', 'Tailwind', 'UI'],
    image: '/file.svg',
  },
]
