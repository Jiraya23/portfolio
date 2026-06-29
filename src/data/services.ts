import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "web-apps",
    icon: "monitor-smartphone",
    title: "Applications web sur mesure",
    description:
      "Conception et developpement d'applications performantes, maintenables et adaptees aux besoins metier reels.",
  },
  {
    id: "frontend",
    icon: "layout-template",
    title: "Frontend premium",
    description:
      "Interfaces modernes, rapides et accessibles avec une attention particuliere a la conversion et a l'experience utilisateur.",
  },
  {
    id: "backend",
    icon: "server-cog",
    title: "Architecture backend",
    description:
      "APIs robustes, modelisation de donnees, authentification et logique serveur pour soutenir la croissance produit.",
  },
  {
    id: "ui-ux",
    icon: "sparkles",
    title: "UI integration & design system",
    description:
      "Integration pixel-perfect et creation de composants reutilisables pour garder une interface coherente a grande echelle.",
  },
  {
    id: "performance",
    icon: "zap",
    title: "Performance & optimisation",
    description:
      "Amelioration du temps de chargement, du score Lighthouse et de la qualite percue sur desktop comme mobile.",
  },
  {
    id: "deployment",
    icon: "rocket",
    title: "Deploiement & industrialisation",
    description:
      "Mise en place d'environnements de livraison fiables avec Vercel, CI/CD et une preparation a la conteneurisation Docker.",
  },
]
