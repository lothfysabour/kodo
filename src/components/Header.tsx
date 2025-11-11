'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="font-playfair text-2xl md:text-3xl tracking-wider transition-all duration-300 text-white group-hover:text-gold">
            KŌDŌ
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 md:gap-12">
          <li>
            <Link
              href="/"
              className={`text-sm md:text-base tracking-wide transition-all duration-300 hover:text-gold ${
                isActive('/') ? 'text-gold font-medium' : 'text-white/80'
              }`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/parfums"
              className={`text-sm md:text-base tracking-wide transition-all duration-300 hover:text-gold ${
                isActive('/parfums') ? 'text-gold font-medium' : 'text-white/80'
              }`}
            >
              Nos Parfums
            </Link>
          </li>
          <li>
            <Link
              href="/a-propos"
              className={`text-sm md:text-base tracking-wide transition-all duration-300 hover:text-gold ${
                isActive('/a-propos') ? 'text-gold font-medium' : 'text-white/80'
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


