import { Parfum } from '@/data/parfums'
import Image from 'next/image'

interface ParfumCardProps {
  parfum: Parfum
}

export default function ParfumCard({ parfum }: ParfumCardProps) {
  return (
    <article className="group bg-black border border-white/20 hover:border-gold transition-all duration-500 overflow-hidden">
      {/* Image */}
      <div className="relative h-80 md:h-96 bg-black overflow-hidden flex items-center justify-center">
        <Image
          src={parfum.image}
          alt={parfum.name}
          fill
          className="object-contain p-8 transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenu */}
      <div className="p-8 space-y-6">
        {/* Nom */}
        <h3 className="font-playfair text-2xl md:text-3xl tracking-wide text-center text-white">
          {parfum.name}
        </h3>

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
      </div>
    </article>
  )
}


