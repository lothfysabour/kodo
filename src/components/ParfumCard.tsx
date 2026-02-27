import { Parfum } from '@/data/parfums'
import Carousel from './Carousel'
import Link from 'next/link'

interface ParfumCardProps {
  parfum: Parfum
}

export default function ParfumCard({ parfum }: ParfumCardProps) {
  return (
    <Link href={`/parfums/${parfum.id}`}>
      <article className="group bg-black border border-white/20 hover:border-gold transition-all duration-500 overflow-hidden cursor-pointer">
        {/* Carousel d'images */}
        <Carousel images={parfum.images} alt={parfum.name} />

      {/* Contenu */}
      <div className="p-8 space-y-6">
        {/* Nom */}
        <h3 className="font-playfair text-2xl md:text-3xl tracking-wide text-center text-white">
          {parfum.name}
        </h3>

        {/* Prix */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-gold/50"></div>
          <p className="text-xl md:text-2xl font-light text-gold tracking-wider">
            {parfum.price} €
          </p>
          <div className="h-px w-8 bg-gold/50"></div>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <p className="text-xs tracking-widest uppercase text-white/50 text-center">
            Notes principales
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {parfum.notes.map((note, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 bg-white/10 text-white/70 rounded-full border border-white/20"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-center text-white/70 leading-relaxed italic">
          &ldquo;{parfum.description}&rdquo;
        </p>

        {/* Call to action */}
        <div className="text-center pt-2">
          <span className="text-xs text-gold/70 group-hover:text-gold uppercase tracking-widest transition-colors">
            Voir les détails →
          </span>
        </div>
      </div>
      </article>
    </Link>
  )
}


