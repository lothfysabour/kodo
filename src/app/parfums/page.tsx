import { parfums } from '@/data/parfums'
import ParfumCard from '@/components/ParfumCard'

export default function ParfumsPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-playfair text-5xl md:text-6xl tracking-wide text-white">
            Nos Parfums
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Quatre créations olfactives qui incarnent l&apos;essence de KŌDŌ : 
            pureté, émotion et raffinement absolu.
          </p>
        </div>
      </section>

      {/* Grille de parfums */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12">
          {parfums.map((parfum) => (
            <ParfumCard key={parfum.id} parfum={parfum} />
          ))}
        </div>
      </section>

      {/* Citation */}
      <section className="mt-24 py-16 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-playfair text-2xl md:text-3xl italic text-white/90 leading-relaxed">
            &ldquo;Le parfum est l&apos;invisible essence de l&apos;âme, 
            suspendu entre mémoire et désir.&rdquo;
          </p>
        </div>
      </section>
    </div>
  )
}


