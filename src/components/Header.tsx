'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) =>
    path === '/parfums'
      ? pathname === '/parfums' || pathname.startsWith('/parfums/')
      : pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-beige/95 backdrop-blur-sm border-b border-brand-brown/15">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Marque principale */}
        <Link href="/" className="group flex-shrink-0">
          <p className="font-alliance text-xs tracking-[0.25em] uppercase text-brand-brown/60 group-hover:text-brand-brown transition-colors duration-300">
            Maison de parfumerie
          </p>
          <h1 className="font-alliance text-lg md:text-xl tracking-[0.15em] uppercase text-brand-brown group-hover:text-brand-brown/70 transition-colors duration-300">
            Les sources olfactives
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6 md:gap-10">

          {/* KŌDŌ — gamme, mis en avant */}
          <li className="flex items-center gap-6 md:gap-10">
            <Link
              href="/parfums"
              className={`font-fino text-base md:text-lg tracking-widest transition-all duration-300 hover:text-brand-brown ${
                isActive('/parfums')
                  ? 'text-brand-brown'
                  : 'text-brand-brown/50'
              }`}
            >
              KŌDŌ
            </Link>
            {/* Séparateur vertical */}
            <span className="w-px h-4 bg-brand-brown/25" />
          </li>

          <li>
            <Link
              href="/"
              className={`font-alliance text-sm tracking-wide transition-all duration-300 hover:text-brand-brown ${
                isActive('/') ? 'text-brand-brown font-medium' : 'text-brand-brown/60'
              }`}
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              href="/a-propos"
              className={`font-alliance text-sm tracking-wide transition-all duration-300 hover:text-brand-brown ${
                isActive('/a-propos') ? 'text-brand-brown font-medium' : 'text-brand-brown/60'
              }`}
            >
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
