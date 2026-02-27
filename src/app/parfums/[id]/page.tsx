import { parfums } from '@/data/parfums'
import { notFound } from 'next/navigation'
import Carousel from '@/components/Carousel'
import Link from 'next/link'

interface ParfumDetailPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return parfums.map((parfum) => ({
    id: parfum.id,
  }))
}

export default function ParfumDetailPage({ params }: ParfumDetailPageProps) {
  const parfum = parfums.find((p) => p.id === params.id)

  if (!parfum) {
    notFound()
  }

  return (
    <div className="pt-24 pb-24">
      {/* Bouton retour */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link
          href="/parfums"
          className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Retour aux parfums
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Carousel d'images avec zoom */}
          <div className="bg-black border border-white/20 overflow-hidden">
            <Carousel images={parfum.images} alt={parfum.name} enableZoom={true} fullSize={true} />
          </div>

          {/* Informations */}
          <div className="space-y-8">
            {/* Nom */}
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl tracking-wide text-white">
                {parfum.name}
              </h1>
              
              {/* Prix */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gold/50"></div>
                <p className="text-3xl md:text-4xl font-light text-gold tracking-wider">
                  {parfum.price} €
                </p>
                <div className="h-px flex-1 bg-gold/50"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xs tracking-widest uppercase text-white/50">
                Description
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
                &ldquo;{parfum.description}&rdquo;
              </p>
            </div>

            {/* Séparateur */}
            <div className="h-px bg-white/10"></div>

            {/* Notes olfactives */}
            <div className="space-y-4">
              <h2 className="text-xs tracking-widest uppercase text-white/50">
                Notes principales
              </h2>
              <div className="flex flex-wrap gap-3">
                {parfum.notes.map((note, index) => (
                  <span
                    key={index}
                    className="text-base px-4 py-2 bg-white/10 text-white/70 rounded-full border border-white/20 hover:border-gold transition-colors duration-300"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Séparateur */}
            <div className="h-px bg-white/10"></div>

            {/* Informations supplémentaires */}
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex justify-between">
                <span>Contenance</span>
                <span className="text-white/80">100ml</span>
              </div>
              <div className="flex justify-between">
                <span>Concentration</span>
                <span className="text-white/80">Eau de Parfum</span>
              </div>
              <div className="flex justify-between">
                <span>Fabrication</span>
                <span className="text-white/80">Artisanale</span>
              </div>
            </div>

            {/* Note sur les images */}
            <div className="pt-4 text-xs text-white/40 italic">
              💡 Cliquez sur les images pour les agrandir
            </div>
          </div>
        </div>

        {/* Galerie complète en bas */}
        {parfum.images.length > 1 && (
          <div className="mt-16 pt-16 border-t border-white/10">
            <h2 className="text-2xl font-playfair text-white text-center mb-8">
              Galerie complète
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {parfum.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square bg-black border border-white/20 hover:border-gold transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${parfum.name} - ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
