# Documentation Technique et Pédagogique - Portfolio Myli

Cette documentation détaille l'ensemble des concepts, technologies et bonnes pratiques utilisés pour concevoir votre portfolio moderne. Elle vous servira de guide pour comprendre ce qui a été fait, et de tremplin pour vos futurs projets plus avancés.

---

## 1. Technologies Utilisées (La "Stack")

Votre portfolio repose sur une stack technique moderne, très prisée dans l'écosystème React en 2026 :

- **Next.js (App Router)** : Le framework React ultime pour le rendu côté serveur (SSR) et la génération statique (SSG).
- **TypeScript** : Surcouche de JavaScript qui ajoute le typage statique (évite 80% des bugs avant même de lancer le code).
- **Tailwind CSS** : Framework CSS utilitaire pour un style rapide et sur-mesure.
- **Shadcn/UI & Radix UI** : Des composants d'interface (boutons, formulaires) accessibles et hautement personnalisables, qui ne vous enferment pas dans une bibliothèque (vous avez le code source).
- **Framer Motion** : Bibliothèque d'animation déclarative pour React (apparitions fluides, scroll).
- **next-intl** : Pour l'internationalisation (i18n), c'est-à-dire la gestion multilingue (français / anglais).
- **Zod & React Hook Form** : Pour la validation robuste du formulaire de contact.

---

## 2. Concepts & Notions Clés (avec exemples)

### A. Server Components vs Client Components
Dans Next.js avec l'App Router, par défaut, tous les composants sont rendus sur le serveur (Server Components). Cela améliore les performances et le SEO.
On utilise la directive `"use client"` uniquement quand le composant a besoin d'interactivité dans le navigateur (ex: clics, animations, hooks comme `useState`).

**Exemple :**
```tsx
// ❌ Pas de "use client" ici : Composant Serveur (idéal pour le texte, le SEO)
export default function BlogPost({ title, content }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  )
}

// ✅ "use client" requis : Composant Client (interactivité)
"use client"
import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>Clics: {count}</button>
}
```

### B. Le File-System Routing (Routage par dossier)
Dans Next.js, les dossiers créent les routes de votre site. 
Votre structure : `src/app/[locale]/blog/[slug]/page.tsx`
- `[locale]` : Paramètre dynamique pour la langue (`fr` ou `en`).
- `[slug]` : Paramètre dynamique pour l'URL de l'article (`mon-premier-article`).

### C. L'Internationalisation (i18n)
La gestion des langues se fait via des fichiers JSON (`messages/fr.json`, `messages/en.json`).
Un composant utilise le hook `useTranslations` pour afficher le bon texte selon l'URL.

**Exemple :**
```json
// fr.json
{
  "hero": {
    "title": "Développeur Fullstack"
  }
}
```
```tsx
// Dans un composant client ou serveur
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('hero')
  return <h1>{t('title')}</h1>
}
```

### D. Animations avec Framer Motion
Framer Motion permet d'animer des éléments HTML très simplement au défilement (scroll) ou à l'apparition.

**Exemple d'apparition au scroll :**
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }} // État de départ (invisible, un peu plus bas)
  whileInView={{ opacity: 1, y: 0 }} // État d'arrivée (visible, à sa place)
  viewport={{ once: true }} // L'animation ne se joue qu'une fois
  transition={{ duration: 0.5 }}
>
  Contenu animé !
</motion.div>
```

---

## 3. Démarche à suivre pour construire un projet similaire

Si vous devez refaire un tel projet, voici la marche à suivre étape par étape :

### Phase 1 : Initialisation & Architecture
1. Créer le projet : `npx create-next-app@latest mon-projet` (Activer TypeScript, Tailwind, App Router).
2. Nettoyer les fichiers de base (`globals.css`, `page.tsx`).
3. Mettre en place l'architecture des dossiers : `src/components/`, `src/lib/`, `src/data/`, `src/types/`.

### Phase 2 : Design System & Configuration UI
1. Initialiser Shadcn/UI : `npx shadcn@latest init` (Choisir les couleurs, la police).
2. Ajouter les composants de base au fur et à mesure des besoins : `npx shadcn@latest add button card input textarea`.
3. Définir les variables CSS globales (Mode sombre/clair) dans `globals.css`.

### Phase 3 : Développement des Fonctionnalités Core
1. **i18n** : Installer `next-intl`, configurer le middleware pour rediriger `/` vers `/fr` ou `/en`.
2. **Layouts** : Créer le `Navbar` et le `Footer` dans `app/[locale]/layout.tsx` pour qu'ils s'affichent sur toutes les pages.

### Phase 4 : Développement des Sections & Pages
1. Créer les sections de la page d'accueil de manière modulaire (Hero, About, Projects, Skills, Contact).
2. Isoler les données : Mettre les listes (projets, compétences, blog) dans `src/data/` pour éviter de polluer le code visuel.

### Phase 5 : Formulaires & Backend (API)
1. Créer le schéma de validation Zod pour le formulaire.
2. Créer la route d'API `src/app/api/contact/route.ts`.
3. Utiliser Resend (ou Nodemailer) pour l'envoi d'emails.

### Phase 6 : Déploiement & SEO
1. Ajouter les balises `<title>`, `<meta description>`, et OpenGraph dans le `layout.tsx` global et les `generateMetadata` des pages dynamiques.
2. Pousser sur GitHub.
3. Déployer sur Vercel et lier le domaine.

---

## 4. Bonnes Pratiques & Concepts pour les Projets Avancés

Pour passer d'un simple site vitrine/portfolio à une **application web complexe** (SaaS, E-commerce, Dashboard), voici les notions que vous devrez maîtriser :

### A. Gestion d'État Global (State Management)
Dans un projet avancé, faire passer des données de parent en enfant (Props Drilling) devient impossible.
- **Ce qu'il faut apprendre** : `Zustand` (recommandé, très léger) ou `Redux Toolkit` (plus lourd, standard d'entreprise).
- **Concept** : Un "Store" global accessible depuis n'importe quel composant pour stocker (ex: Le panier de l'utilisateur, son profil).

### B. Connexion à une Base de Données & ORM
- **Ce qu'il faut apprendre** : `Prisma ORM` ou `Drizzle ORM`.
- **Concept** : Au lieu d'écrire des requêtes SQL complexes (`SELECT * FROM users`), vous utilisez du TypeScript : `await prisma.user.findMany()`.
- **Base de données recommandées** : PostgreSQL (Neon, Supabase) ou MongoDB.

### C. Authentification & Sécurité
Pour gérer des utilisateurs, des sessions et des rôles (Admin, User).
- **Ce qu'il faut apprendre** : `NextAuth.js` (Auth.js) ou des solutions gérées comme `Clerk` ou `Supabase Auth`.
- **Concept** : Gestion sécurisée des mots de passe (hashage), création de JWT (JSON Web Tokens), protection des routes privées via les Middlewares de Next.js.

### D. Data Fetching Avancé (Mutation & Cache)
Dans le portfolio, les données étaient en dur. Dans une vraie app, elles viennent du serveur.
- **Ce qu'il faut apprendre** : `React Query` (TanStack Query) ou les `Server Actions` de Next.js.
- **Concept** : Gérer le chargement (loading), les erreurs, le cache, et rafraîchir l'interface immédiatement après l'ajout d'une donnée (Optimistic UI).

### E. Tests Automatisés
Les grands projets ne peuvent pas se permettre de casser en production.
- **Tests Unitaires** : `Vitest` ou `Jest` (tester une fonction mathématique ou un petit composant).
- **Tests E2E (End-to-End)** : `Playwright` ou `Cypress` (un robot ouvre un navigateur, clique sur "Acheter" et vérifie que ça marche).

### F. CI/CD (Intégration et Déploiement Continus)
- **Ce qu'il faut apprendre** : `GitHub Actions`.
- **Concept** : Automatiser des tâches (Exemple : *À chaque push sur `main`, lancer les tests. S'ils passent, déployer sur Vercel, sinon bloquer le déploiement*).

---

> **Pour générer un PDF de ce document** :
> Si vous utilisez un navigateur moderne ou un IDE, vous pouvez simplement faire un `Clic Droit > Imprimer` (ou `Ctrl+P`) sur ce document Markdown formaté, et choisir l'option **"Enregistrer au format PDF"**. Les styles seront parfaitement conservés.
