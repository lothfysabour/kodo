'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/parfums', label: 'KŌDŌ', isFino: true },
  { href: '/',        label: 'Accueil' },
  { href: '/a-propos', label: 'À Propos' },
]

export default function Header() {
  const pathname  = usePathname()
  const [open, setOpen] = useState(false)

  // Ferme le menu au changement de page
  useEffect(() => { setOpen(false) }, [pathname])

  // Bloque le scroll du body quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (path: string) =>
    path === '/parfums'
      ? pathname === '/parfums' || pathname.startsWith('/parfums/')
      : pathname === path

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-beige/95 backdrop-blur-sm border-b border-brand-brown/15">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Marque */}
          <Link href="/" className="group flex-shrink-0">
            <p className="font-alliance text-[10px] tracking-[0.25em] uppercase text-brand-brown/60 group-hover:text-brand-brown transition-colors duration-300">
              Maison de parfumerie
            </p>
            <h1 className="font-alliance text-base md:text-xl tracking-[0.12em] uppercase text-brand-brown group-hover:text-brand-brown/70 transition-colors duration-300">
              Les sources olfactives
            </h1>
          </Link>

          {/* Navigation desktop — masquée sur mobile */}
          <ul className="hidden md:flex items-center gap-10">
            <li className="flex items-center gap-10">
              <Link
                href="/parfums"
                className={`font-fino text-lg tracking-widest transition-all duration-300 hover:text-brand-brown ${
                  isActive('/parfums') ? 'text-brand-brown' : 'text-brand-brown/50'
                }`}
              >
                KŌDŌ
              </Link>
              <span className="w-px h-4 bg-brand-brown/25" />
            </li>
            <li>
              <Link href="/" className={`font-alliance text-sm tracking-wide transition-all duration-300 hover:text-brand-brown ${isActive('/') ? 'text-brand-brown font-medium' : 'text-brand-brown/60'}`}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className={`font-alliance text-sm tracking-wide transition-all duration-300 hover:text-brand-brown ${isActive('/a-propos') ? 'text-brand-brown font-medium' : 'text-brand-brown/60'}`}>
                À Propos
              </Link>
            </li>
          </ul>

          {/* Bouton hamburger — visible uniquement sur mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 group"
            aria-label="Ouvrir le menu"
          >
            <span className="block h-px w-6 bg-brand-brown transition-all duration-300" />
            <span className="block h-px w-4 bg-brand-brown transition-all duration-300 group-hover:w-6" />
            <span className="block h-px w-5 bg-brand-brown transition-all duration-300 group-hover:w-6" />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-brand-brown/40 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar droite */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-[70] bg-brand-beige flex flex-col
                    transition-transform duration-500 ease-in-out md:hidden
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header sidebar */}
        <div className="flex items-center justify-between px-7 py-6 border-b border-brand-brown/15">
          <p className="font-alliance text-xs tracking-[0.2em] uppercase text-brand-brown/50">
            Menu
          </p>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-brand-brown/60 hover:text-brand-brown transition-colors duration-300"
            aria-label="Fermer le menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Liens */}
        <nav className="flex-1 flex flex-col px-7 py-10 space-y-1">

          {/* Gamme KŌDŌ */}
          <Link
            href="/parfums"
            className={`font-fino text-3xl tracking-widest py-4 border-b border-brand-brown/10 transition-colors duration-300 ${
              isActive('/parfums') ? 'text-brand-brown' : 'text-brand-brown/40 hover:text-brand-brown'
            }`}
          >
            KŌDŌ
          </Link>

          <Link
            href="/"
            className={`font-alliance text-sm tracking-[0.15em] uppercase py-4 border-b border-brand-brown/10 transition-colors duration-300 ${
              isActive('/') ? 'text-brand-brown font-medium' : 'text-brand-brown/60 hover:text-brand-brown'
            }`}
          >
            Accueil
          </Link>

          <Link
            href="/a-propos"
            className={`font-alliance text-sm tracking-[0.15em] uppercase py-4 border-b border-brand-brown/10 transition-colors duration-300 ${
              isActive('/a-propos') ? 'text-brand-brown font-medium' : 'text-brand-brown/60 hover:text-brand-brown'
            }`}
          >
            À Propos
          </Link>
        </nav>

        {/* Footer sidebar */}
        <div className="px-7 py-8 border-t border-brand-brown/10 space-y-2">
          <p className="font-alliance text-[10px] tracking-[0.25em] uppercase text-brand-brown/40">
            Maison de parfumerie
          </p>
          <p className="font-alliance text-xs tracking-[0.1em] uppercase text-brand-brown/60">
            Les sources olfactives
          </p>
          <div className="flex gap-4 pt-3">
            <a
              href="https://www.instagram.com/les_sources_olfactives_kodo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-alliance text-xs text-brand-brown/50 hover:text-brand-brown transition-colors duration-300"
            >
              Instagram
            </a>
            <span className="text-brand-brown/20">·</span>
            <a
              href="mailto:kodo.parfumeur@gmail.com"
              className="font-alliance text-xs text-brand-brown/50 hover:text-brand-brown transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
