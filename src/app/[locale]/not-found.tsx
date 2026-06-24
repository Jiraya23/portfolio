import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-grotesk font-bold text-accent-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page non trouvée</h2>
      <p className="text-gray-400 mb-8">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <Link href="/" className="btn-primary">
        Retour à l'accueil
      </Link>
    </div>
  )
}