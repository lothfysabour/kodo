import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h1 className="font-playfair text-5xl md:text-6xl text-white">
          404
        </h1>
        <p className="text-xl text-white/70">
          Ce parfum n&apos;existe pas dans notre collection.
        </p>
        <Link
          href="/parfums"
          className="inline-block px-8 py-3 bg-white text-black tracking-widest uppercase text-sm hover:bg-gold hover:text-black transition-all duration-500 border-2 border-white"
        >
          Retour aux parfums
        </Link>
      </div>
    </div>
  )
}
