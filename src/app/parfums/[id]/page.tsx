import { parfums } from '@/data/parfums'
import { notFound } from 'next/navigation'
import Carousel from '@/components/Carousel'
import Image from 'next/image'
import Link from 'next/link'

interface ParfumDetailPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return parfums.map((parfum) => ({ id: parfum.id }))
}

export default function ParfumDetailPage({ params }: ParfumDetailPageProps) {
  const parfum = parfums.find((p) => p.id === params.id)
  if (!parfum) notFound()

  return (
    <div className="pt-24 pb-24">

      {/* Retour */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <Link
          href="/parfums"
          className="inline-flex items-center gap-2 font-alliance text-sm text-brand-brown/50 hover:text-brand-brown transition-colors duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à la collection KŌDŌ
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Carousel */}
          <div className="border border-brand-brown/15 overflow-hidden">
            <Carousel images={parfum.images} alt={parfum.name} enableZoom={true} fullSize={true} />
          </div>

          {/* Informations */}
          <div className="space-y-8 lg:pt-4">

            {/* Gamme + Nom */}
            <div className="space-y-3">
              <p className="font-alliance text-xs tracking-[0.3em] uppercase text-brand-brown/40">
                Les sources olfactives — KŌDŌ
              </p>
              <h1 className="font-fino text-4xl md:text-5xl lg:text-6xl tracking-widest text-brand-brown">
                {parfum.name}
              </h1>

              {/* Prix */}
              <div className="flex items-center gap-4 pt-2">
                <div className="h-px w-10 bg-brand-brown/30"></div>
                <p className="font-alliance text-3xl font-light text-brand-brown tracking-wider">
                  {parfum.price} €
                </p>
                <div className="h-px flex-1 bg-brand-brown/30"></div>
              </div>
            </div>

            {/* Séparateur */}
            <div className="h-px bg-brand-brown/10"></div>

            {/* Description */}
            <div className="space-y-3">
              <p className="font-alliance text-xs tracking-[0.25em] uppercase text-brand-brown/40">
                Description
              </p>
              <p className="font-alliance text-lg text-brand-brown/75 leading-relaxed italic">
                &ldquo;{parfum.description}&rdquo;
              </p>
            </div>

            {/* Séparateur */}
            <div className="h-px bg-brand-brown/10"></div>

            {/* Pyramide olfactive */}
            <div className="space-y-5">
              <p className="font-alliance text-xs tracking-[0.25em] uppercase text-brand-brown/40">
                Pyramide olfactive
              </p>

              {/* Note de tête */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-alliance text-xs tracking-[0.15em] uppercase text-brand-brown/40 w-24 shrink-0">
                    Tête
                  </span>
                  <div className="h-px flex-1 bg-brand-brown/10" />
                </div>
                <div className="flex flex-wrap gap-2 pl-0">
                  {parfum.pyramide.tete.map((note, i) => (
                    <span key={i} className="font-alliance text-sm px-3 py-1.5 border border-brand-brown/20 text-brand-brown/70 hover:border-brand-brown/50 transition-colors duration-300">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note de cœur */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-alliance text-xs tracking-[0.15em] uppercase text-brand-brown/40 w-24 shrink-0">
                    Cœur
                  </span>
                  <div className="h-px flex-1 bg-brand-brown/10" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {parfum.pyramide.coeur.map((note, i) => (
                    <span key={i} className="font-alliance text-sm px-3 py-1.5 border border-brand-brown/30 bg-brand-brown/5 text-brand-brown/80 hover:border-brand-brown/60 transition-colors duration-300">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note de fond */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-alliance text-xs tracking-[0.15em] uppercase text-brand-brown/40 w-24 shrink-0">
                    Fond
                  </span>
                  <div className="h-px flex-1 bg-brand-brown/10" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {parfum.pyramide.fond.map((note, i) => (
                    <span key={i} className="font-alliance text-sm px-3 py-1.5 border border-brand-brown/40 bg-brand-brown/10 text-brand-brown hover:border-brand-brown transition-colors duration-300">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Séparateur */}
            <div className="h-px bg-brand-brown/10"></div>

            {/* Fiche produit */}
            <div className="space-y-3 font-alliance text-sm">
              <p className="text-xs tracking-[0.25em] uppercase text-brand-brown/40 mb-4">
                Fiche produit
              </p>
              {[
                { label: 'Contenance', value: '100ml' },
                { label: 'Concentration', value: 'Eau de Parfum' },
                { label: 'Fabrication', value: 'Artisanale' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-brand-brown/10 pb-3">
                  <span className="text-brand-brown/50">{label}</span>
                  <span className="text-brand-brown">{value}</span>
                </div>
              ))}
            </div>

            <p className="font-alliance text-xs text-brand-brown/35 italic">
              Cliquez sur les images pour les agrandir
            </p>
          </div>
        </div>

        {/* Galerie */}
        {parfum.images.length > 1 && (
          <div className="mt-20 pt-16 border-t border-brand-brown/10">
            <p className="font-alliance text-xs tracking-[0.3em] uppercase text-brand-brown/40 text-center mb-8">
              Galerie complète
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {parfum.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square border border-brand-brown/15 hover:border-brand-brown/40 transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`${parfum.name} — ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
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
