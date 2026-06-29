import type { Experience } from "@/types"

export const experiences: Experience[] = [
  {
    id: "nova-studio",
    company: "Nova Studio",
    role: "Lead Frontend Developer",
    period: "2024 - Aujourd'hui",
    description: [
      "Conception d'interfaces premium pour des produits SaaS et sites marketing a forte exigence de conversion.",
      "Mise en place d'une architecture front moderne avec Next.js, composants reutilisables et logique i18n.",
      "Optimisation de la performance, de l'accessibilite et de l'experience mobile sur des projets clients.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "work",
  },
  {
    id: "atlas-labs",
    company: "Atlas Labs",
    role: "Fullstack Developer",
    period: "2022 - 2024",
    description: [
      "Developpement de fonctionnalites metier sur des plateformes internes et dashboards analytiques.",
      "Creation d'API, schemas de base de donnees et integrations entre services pour fluidifier les operations.",
      "Collaboration etroite avec produit et design pour transformer des besoins complexes en experiences simples.",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
    type: "work",
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Web Developer & UI Integrator",
    period: "2021 - Aujourd'hui",
    description: [
      "Accompagnement de startups, independants et petites entreprises sur la conception et la livraison de produits web.",
      "Realisation de landing pages, applications sur mesure et systemes de design orientés qualite et rapidite.",
      "Conseil technique sur le choix de stack, le deploiement et l'amelioration continue des performances.",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Resend"],
    type: "work",
  },
  {
    id: "digital-campus",
    company: "Digital Campus",
    role: "Formation Developpement Web",
    period: "2019 - 2021",
    description: [
      "Approfondissement des fondamentaux du web, du design d'interface et des bonnes pratiques de developpement.",
      "Realisation de projets academiques autour du frontend, du backend et de la gestion de bases de donnees.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "SQL"],
    type: "education",
  },
]
