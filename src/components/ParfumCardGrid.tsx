'use client'

import Link from 'next/link'
import { Parfum } from '@/data/parfums'

interface ParfumCardGridProps {
  parfum: Parfum
  index?: number
}

export default function ParfumCardGrid({ parfum, index = 0 }: ParfumCardGridProps) {
  const imageDefault = parfum.images[0]
  const imageHover   = parfum.images[2] ?? parfum.images[0]

  // Délai en cascade : 0ms, 150ms, 300ms…
  const delay = index * 150

  return (
    <Link href={`/parfums/${parfum.id}`} className="group block">
      <article
        className="border border-brand-brown/15 group-hover:border-brand-brown/40 transition-colors duration-500 overflow-hidden bg-white opacity-0 animate-fadeUp"
        style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      >

        {/* Zone image — plein écran, sans padding */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">

          {/* Image 1 — dezoom à l'entrée, fade out au hover */}
          <img
            src={imageDefault}
            alt={parfum.name}
            className="absolute inset-0 w-full h-full object-cover
                       opacity-0 animate-dezoom
                       transition-[transform,opacity] duration-700 ease-in-out
                       group-hover:scale-110 group-hover:opacity-0"
            style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
          />

          {/* Image 3 — apparaît au hover avec zoom inverse */}
          <img
            src={imageHover}
            alt={`${parfum.name} — vue alternative`}
            className="absolute inset-0 w-full h-full object-cover
                       transition-all duration-700 ease-in-out
                       scale-110 opacity-0
                       group-hover:scale-100 group-hover:opacity-100"
          />

          {/* Overlay subtil au hover */}
          <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/10 transition-all duration-700" />
        </div>

        {/* Infos produit */}
        <div className="px-6 py-7 space-y-4">

          {/* Nom */}
          <h3 className="font-fino text-2xl tracking-widest text-brand-brown text-center">
            {parfum.name}
          </h3>

          {/* Prix */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-brand-brown/25" />
            <span className="font-alliance text-lg font-light text-brand-brown tracking-wider">
              {parfum.price} €
            </span>
            <div className="h-px w-8 bg-brand-brown/25" />
          </div>

          {/* Notes */}
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {parfum.notes.map((note, i) => (
              <span
                key={i}
                className="font-alliance text-xs px-3 py-1 border border-brand-brown/20 text-brand-brown/60"
              >
                {note}
              </span>
            ))}
          </div>

          {/* CTA */}
          <p className="font-alliance text-xs uppercase tracking-[0.2em] text-brand-brown/35 group-hover:text-brand-brown text-center pt-1 transition-colors duration-300">
            Découvrir →
          </p>
        </div>
      </article>
    </Link>
  )
}
