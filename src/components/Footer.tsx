import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo et slogan */}
          <div className="space-y-4">
            <h2 className="font-playfair text-2xl tracking-wider text-gold">
              KŌDŌ
            </h2>
            <p className="text-sm text-white/70 italic">
              Les sources olfactives
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-widest uppercase">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/parfums" className="hover:text-gold transition-colors duration-300">
                  Nos Parfums
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-gold transition-colors duration-300">
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Réseaux */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-widest uppercase">
              Nous Suivre
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="https://instagram.com/kodo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@kodo-parfums.com"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-gold transition-colors duration-300">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} KŌDŌ. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}


