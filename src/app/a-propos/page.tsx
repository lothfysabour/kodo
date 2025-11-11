export default function AProposPage() {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="font-playfair text-5xl md:text-6xl tracking-wide text-white">
            À Propos
          </h1>
          <p className="font-playfair text-xl text-gold italic">
            L&apos;art olfactif comme philosophie
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Philosophie */}
        <div className="space-y-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center text-white">
            Notre Philosophie
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-white/80">
            <p>
              KŌDŌ puise son nom dans la tradition japonaise du <em>Kōdō</em> (香道), 
              l&apos;art ancestral de &laquo; l&apos;écoute de l&apos;encens &raquo;. Plus qu&apos;une simple pratique, 
              c&apos;est une cérémonie méditative où les fragrances deviennent un langage de l&apos;âme.
            </p>
            <p>
              Nous transposons cet héritage dans la parfumerie contemporaine : 
              chaque création est pensée comme une expérience sensorielle pure, 
              un moment de contemplation olfactive qui transcende le quotidien.
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="flex justify-center">
          <div className="w-24 h-px bg-gold/50"></div>
        </div>

        {/* L'artisanat */}
        <div className="space-y-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center text-white">
            L&apos;Artisanat Olfactif
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-white/80">
            <p>
              Dans nos ateliers, chaque parfum naît d&apos;une recherche minutieuse et d&apos;un savoir-faire artisanal. 
              Nous sélectionnons avec exigence des matières premières d&apos;exception : 
              oléorésines rares, absolues précieuses, essences naturelles de haute qualité.
            </p>
            <p>
              Nos compositions sont élaborées en petites séries, 
              garantissant une qualité irréprochable et une authenticité sans compromis. 
              Chaque flacon est un fragment d&apos;émotion, une source olfactive qui révèle 
              la beauté des contrastes : force et douceur, tradition et modernité, 
              simplicité et profondeur.
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="flex justify-center">
          <div className="w-24 h-px bg-gold/50"></div>
        </div>

        {/* La quête de pureté */}
        <div className="space-y-6">
          <h2 className="font-playfair text-3xl md:text-4xl text-center text-white">
            La Quête de Pureté
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-white/80">
            <p>
              KŌDŌ incarne une vision épurée de la parfumerie de luxe. 
              Nous refusons l&apos;ostentation et privilégions l&apos;essentiel : 
              des accords olfactifs justes, des notes équilibrées, 
              une signature discrète mais mémorable.
            </p>
            <p>
              Chaque parfum est une invitation à ralentir, à ressentir, 
              à se reconnecter avec ses émotions les plus intimes. 
              C&apos;est cette quête de pureté et d&apos;authenticité qui guide 
              chacune de nos créations, transformant le parfum en une 
              expérience méditative et intemporelle.
            </p>
          </div>
        </div>

        {/* Citation finale */}
        <div className="pt-12 text-center">
          <p className="font-playfair text-2xl md:text-3xl italic text-gold">
            &ldquo;Sentir, c&apos;est se souvenir de ce qui n&apos;a pas encore eu lieu.&rdquo;
          </p>
        </div>
      </section>
    </div>
  )
}


