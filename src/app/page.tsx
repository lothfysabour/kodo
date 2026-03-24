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

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border border-brand-brown/20 flex items-center justify-center">
              <span className="text-xl text-brand-brown/60">✦</span>
            </div>
            <h3 className="font-alliance text-sm tracking-[0.2em] uppercase text-brand-brown">Artisanal</h3>
            <p className="font-alliance text-sm text-brand-brown/60 leading-relaxed">
              Chaque parfum est élaboré à la main avec des matières premières d&apos;exception.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border border-brand-brown/20 flex items-center justify-center">
              <span className="text-xl text-brand-brown/60">◈</span>
            </div>
            <h3 className="font-alliance text-sm tracking-[0.2em] uppercase text-brand-brown">Sensoriel</h3>
            <p className="font-alliance text-sm text-brand-brown/60 leading-relaxed">
              Des compositions olfactives qui éveillent les émotions et racontent une histoire.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border border-brand-brown/20 flex items-center justify-center">
              <span className="text-xl text-brand-brown/60">◆</span>
            </div>
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
