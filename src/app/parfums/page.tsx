import { parfums } from '@/data/parfums'
import ParfumCardGrid from '@/components/ParfumCardGrid'

export default function ParfumsPage() {
  return (
    <div className="pt-24 pb-24">

      {/* Header */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="font-alliance text-xs tracking-[0.3em] uppercase text-brand-brown/50">
            Collection
          </p>
          <h1 className="font-fino text-5xl md:text-6xl tracking-widest text-brand-brown">
            KŌDŌ
          </h1>
          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="h-px w-12 bg-brand-brown/25" />
            <span className="text-brand-brown/40 text-xs">✦</span>
            <div className="h-px w-12 bg-brand-brown/25" />
          </div>
          <p className="font-alliance text-base text-brand-brown/65 leading-relaxed pt-2">
            Trois créations olfactives qui incarnent l&apos;essence de nos sources :
            pureté, émotion et raffinement absolu.
          </p>
        </div>
      </section>

      {/* Grille — 3 cards égales, centrées */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {parfums.map((parfum, index) => (
            <ParfumCardGrid key={parfum.id} parfum={parfum} index={index} />
          ))}
        </div>
      </section>

      {/* Citation */}
      <section className="mt-24 py-16 px-6 border-t border-brand-brown/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-alliance text-xl md:text-2xl italic text-brand-brown/70 leading-relaxed">
            &ldquo;Le parfum est l&apos;invisible essence de l&apos;âme,
            suspendu entre mémoire et désir.&rdquo;
          </p>
        </div>
      </section>
    </div>
  )
}
