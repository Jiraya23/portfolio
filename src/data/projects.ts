import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "lumina-finance",
    title: "Lumina Finance Dashboard",
    description:
      "Plateforme de pilotage financier en temps reel avec tableaux de bord, synchronisation bancaire et reporting pour equipes dirigeantes.",
    image: "/globe.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    category: "fullstack",
    githubUrl: "https://github.com/myli/lumina-finance",
    liveUrl: "https://lumina-finance-demo.vercel.app",
    featured: true,
  },
  {
    id: "atlas-crm",
    title: "Atlas CRM Suite",
    description:
      "Application SaaS pour centraliser le suivi commercial, les pipelines de vente et les automatisations d'equipe.",
    image: "/window.svg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    category: "fullstack",
    githubUrl: "https://github.com/myli/atlas-crm",
    liveUrl: "https://atlas-crm-demo.vercel.app",
    featured: true,
  },
  {
    id: "aurora-commerce",
    title: "Aurora Commerce",
    description:
      "Frontend e-commerce haut de gamme concu pour maximiser la conversion, la vitesse de chargement et la qualite percue.",
    image: "/next.svg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "CMS"],
    category: "frontend",
    githubUrl: "https://github.com/myli/aurora-commerce",
    liveUrl: "https://aurora-commerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "pulse-ops",
    title: "Pulse Ops Monitor",
    description:
      "Interface d'observabilite pour suivre incidents, performances applicatives et alertes operationnelles en un seul endroit.",
    image: "/vercel.svg",
    tags: ["React", "Framer Motion", "Charts", "API"],
    category: "frontend",
    githubUrl: "https://github.com/myli/pulse-ops",
    liveUrl: "https://pulse-ops-demo.vercel.app",
    featured: false,
  },
  {
    id: "studio-zen",
    title: "Studio Zen Identity",
    description:
      "Projet de direction artistique produit pour concevoir une experience web immersive, editoriale et premium.",
    image: "/file.svg",
    tags: ["Figma", "UI Design", "Design System", "Motion"],
    category: "design",
    liveUrl: "https://studio-zen-showcase.vercel.app",
    featured: false,
  },
  {
    id: "horizon-cms",
    title: "Horizon Content Platform",
    description:
      "Back-office editorial multilingue pour gerer pages marketing, blog et SEO technique dans un workflow simple.",
    image: "/globe.svg",
    tags: ["Next.js", "Sanity", "i18n", "SEO"],
    category: "fullstack",
    githubUrl: "https://github.com/myli/horizon-cms",
    liveUrl: "https://horizon-cms-demo.vercel.app",
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
