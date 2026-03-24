import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          {/* Identité */}
          <div className="space-y-3">
            <p className="font-alliance text-xs tracking-[0.3em] uppercase text-brand-brown/50">
              Maison de parfumerie artisanale
            </p>
            <h1 className="font-alliance text-4xl md:text-6xl tracking-[0.15em] uppercase text-brand-brown">
              Les sources olfactives
            </h1>
          </div>

          {/* Séparateur */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-brand-brown/30"></div>
            <span className="text-brand-brown/40 text-xs">✦</span>
            <div className="h-px w-16 bg-brand-brown/30"></div>
          </div>

          {/* Introduction poétique */}
          <div className="max-w-2xl mx-auto space-y-5">
            <p className="font-alliance text-lg md:text-xl leading-relaxed text-brand-brown/90 italic">
              Dans le silence des sens, une essence murmure.
            </p>
            <p className="font-alliance text-base leading-relaxed text-brand-brown/65">
              Les sources olfactives puisent dans l&apos;art millénaire de la parfumerie pour créer des compositions
              olfactives uniques, où chaque flacon devient un voyage sensoriel,
              une émotion suspendue dans le temps.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/parfums"
              className="inline-block px-12 py-4 bg-brand-brown text-brand-beige font-alliance tracking-[0.2em] uppercase text-sm hover:bg-brand-brown/85 transition-all duration-500"
            >
              Découvrir la collection KŌDŌ
            </Link>
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section className="py-24 px-6 border-t border-brand-brown/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="text-center space-y-5">
            <svg viewBox="0 0 48 48" className="w-10 h-10 mx-auto" fill="none">
              <path
                d="M24 4 C24 4 14 14 14 24 C14 34 24 44 24 44 C24 44 34 34 34 24 C34 14 24 4 24 4 Z"
                fill="#D4AF37" fillOpacity="0.85"
              />
              <path
                d="M4 24 C4 24 14 14 24 14 C34 14 44 24 44 24 C44 24 34 34 24 34 C14 34 4 24 4 24 Z"
                fill="#D4AF37" fillOpacity="0.5"
              />
            </svg>
            <h3 className="font-alliance text-sm tracking-[0.2em] uppercase text-brand-brown">Artisanal</h3>
            <p className="font-alliance text-sm text-brand-brown/60 leading-relaxed">
              Chaque parfum est élaboré à la main avec des matières premières d&apos;exception.
            </p>
          </div>

          <div className="text-center space-y-5">
            <svg viewBox="0 0 48 48" className="w-10 h-10 mx-auto" fill="none">
              <circle cx="24" cy="24" r="18" fill="#D4AF37" fillOpacity="0.25" />
              <circle cx="24" cy="24" r="10" fill="#D4AF37" fillOpacity="0.55" />
              <circle cx="24" cy="24" r="4"  fill="#D4AF37" fillOpacity="1" />
            </svg>
            <h3 className="font-alliance text-sm tracking-[0.2em] uppercase text-brand-brown">Sensoriel</h3>
            <p className="font-alliance text-sm text-brand-brown/60 leading-relaxed">
              Des compositions olfactives qui éveillent les émotions et racontent une histoire.
            </p>
          </div>

          <div className="text-center space-y-5">
            <svg viewBox="0 0 48 48" className="w-10 h-10 mx-auto" fill="none">
              <path
                d="M24 4 L28 20 L44 24 L28 28 L24 44 L20 28 L4 24 L20 20 Z"
                fill="#D4AF37" fillOpacity="0.35"
              />
              <path
                d="M24 13 L26.8 21.5 L36 24 L26.8 26.5 L24 35 L21.2 26.5 L12 24 L21.2 21.5 Z"
                fill="#D4AF37" fillOpacity="1"
              />
            </svg>
            <h3 className="font-alliance text-sm tracking-[0.2em] uppercase text-brand-brown">Intemporel</h3>
            <p className="font-alliance text-sm text-brand-brown/60 leading-relaxed">
              Des fragrances épurées qui transcendent les modes et traversent le temps.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
