import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-beige py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Identité */}
          <div className="space-y-3">
            <p className="font-alliance text-xs tracking-[0.25em] uppercase text-brand-beige/50">
              Maison de parfumerie artisanale
            </p>
            <h2 className="font-alliance text-xl tracking-[0.12em] uppercase text-brand-beige">
              Les sources olfactives
            </h2>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-alliance text-xs tracking-[0.25em] uppercase text-brand-beige/50">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-brand-beige/70 font-alliance">
              <li>
                <Link href="/" className="hover:text-brand-beige transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/parfums" className="hover:text-brand-beige transition-colors duration-300">
                  Nos Parfums
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-brand-beige transition-colors duration-300">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Réseaux */}
          <div className="space-y-4">
            <h3 className="font-alliance text-xs tracking-[0.25em] uppercase text-brand-beige/50">
              Nous Suivre
            </h3>
            <ul className="space-y-2 text-sm text-brand-beige/70 font-alliance">
              <li>
                <a
                  href="https://www.instagram.com/les_sources_olfactives_kodo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-beige transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:kodo.parfumeur@gmail.com"
                  className="hover:text-brand-beige transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-brand-beige transition-colors duration-300">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-beige/15 text-center text-xs text-brand-beige/40 font-alliance">
          <p>© {new Date().getFullYear()} Les sources olfactives. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
