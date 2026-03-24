import { Parfum } from '@/data/parfums'
import Carousel from './Carousel'
import Link from 'next/link'

interface ParfumCardProps {
  parfum: Parfum
}

export default function ParfumCard({ parfum }: ParfumCardProps) {
  return (
    <Link href={`/parfums/${parfum.id}`}>
      <article className="group bg-white border border-brand-brown/15 hover:border-brand-brown/50 transition-all duration-500 overflow-hidden cursor-pointer">

        {/* Carousel d'images */}
        <Carousel images={parfum.images} alt={parfum.name} />

        {/* Contenu */}
        <div className="p-8 space-y-5">

          {/* Nom du parfum — Fino Sans */}
          <h3 className="font-fino text-2xl md:text-3xl tracking-widest text-center text-brand-brown">
            {parfum.name}
          </h3>

          {/* Prix */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-brand-brown/30"></div>
            <p className="font-alliance text-xl font-light text-brand-brown tracking-wider">
              {parfum.price} €
            </p>
            <div className="h-px w-8 bg-brand-brown/30"></div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <p className="font-alliance text-xs tracking-[0.2em] uppercase text-brand-brown/50 text-center">
              Notes principales
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {parfum.notes.map((note, index) => (
                <span
                  key={index}
                  className="font-alliance text-xs px-3 py-1 bg-brand-beige text-brand-brown/70 border border-brand-brown/20"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="font-alliance text-sm text-center text-brand-brown/60 leading-relaxed italic">
            &ldquo;{parfum.description}&rdquo;
          </p>

          {/* Call to action */}
          <div className="text-center pt-1">
            <span className="font-alliance text-xs text-brand-brown/40 group-hover:text-brand-brown uppercase tracking-[0.2em] transition-colors duration-300">
              Voir les détails →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
