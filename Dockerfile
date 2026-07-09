# Étape 1 : Installation des dépendances
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

# Étape 2 : Build de l'application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Netlify et Vercel ont besoin de ce build, mais Docker aussi
RUN npm run build

# Étape 3 : Image de production (Légère)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Désactive la télémétrie Next.js (optionnel)
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie des fichiers statiques nécessaires
COPY --from=builder /app/public ./public

# Configuration automatique du mode standalone via next.config.ts
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Lancement du serveur Next.js en mode standalone
CMD ["node", "server.js"]
