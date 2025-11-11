import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Logo principal */}
          <div className="space-y-6">
            <h1 className="font-playfair text-6xl md:text-8xl tracking-wider text-white">
              KŌDŌ
            </h1>
            <p className="font-playfair text-xl md:text-2xl text-gold tracking-wide italic">
              Les sources olfactives
            </p>
          </div>

          {/* Introduction poétique */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              Dans le silence des sens, une essence murmure.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/70">
              KŌDŌ puise dans l&apos;art millénaire de la parfumerie pour créer des compositions olfactives uniques, 
              où chaque flacon devient un voyage sensoriel, une émotion suspendue dans le temps.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Link
              href="/parfums"
              className="inline-block px-12 py-4 bg-white text-black tracking-widest uppercase text-sm hover:bg-gold hover:text-black transition-all duration-500 transform hover:scale-105 border-2 border-white"
            >
              Découvrir nos créations
            </Link>
          </div>
        </div>
      </section>

      {/* Section philosophie */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
              <span className="text-3xl text-gold">✦</span>
            </div>
            <h3 className="font-playfair text-2xl text-white">Artisanal</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Chaque parfum est élaboré à la main avec des matières premières d&apos;exception.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
              <span className="text-3xl text-gold">◈</span>
            </div>
            <h3 className="font-playfair text-2xl text-white">Sensoriel</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Des compositions olfactives qui éveillent les émotions et racontent une histoire.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
              <span className="text-3xl text-gold">◆</span>
            </div>
            <h3 className="font-playfair text-2xl text-white">Intemporel</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Des fragrances épurées qui transcendent les modes et traversent le temps.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


