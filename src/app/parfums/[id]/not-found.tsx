import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <p className="font-alliance text-xs tracking-[0.3em] uppercase text-brand-brown/40">
          Erreur 404
        </p>
        <h1 className="font-fino text-6xl tracking-widest text-brand-brown">
          KŌDŌ
        </h1>
        <p className="font-alliance text-lg text-brand-brown/60">
          Ce parfum n&apos;existe pas dans notre collection.
        </p>
        <Link
          href="/parfums"
          className="inline-block px-8 py-3 bg-brand-brown text-brand-beige font-alliance tracking-[0.2em] uppercase text-sm hover:bg-brand-brown/85 transition-all duration-500"
        >
          Retour à la collection
        </Link>
      </div>
    </div>
  )
}
