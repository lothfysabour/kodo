export default function AProposPage() {
    return (
        <div className="pt-24 pb-24">

            {/* Hero */}
            <section className="py-16 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-4">
                    <p className="font-alliance text-xs tracking-[0.3em] uppercase text-brand-brown/50">
                        La maison
                    </p>
                    <h1 className="font-alliance text-5xl md:text-6xl tracking-wide text-brand-brown">
                        À Propos
                    </h1>
                    <p className="font-alliance text-base text-brand-brown/60 italic">
                        L&apos;art olfactif comme philosophie
                    </p>
                </div>
            </section>

            {/* Contenu */}
            <section className="max-w-3xl mx-auto px-6 space-y-16">

                {/* Philosophie */}
                <div className="space-y-6">
                    <h2 className="font-alliance text-2xl md:text-3xl text-brand-brown tracking-wide">
                        Notre Philosophie
                    </h2>
                    <div className="space-y-5 font-alliance text-base leading-relaxed text-brand-brown/70">
                        <p>
                            Au Japon, si l&apos;encens faisait partie des dons faits aux divinités,
                            il a aussi été utilisé très tôt pour le plaisir des sens et a donné naissance à un art particulier : celui du kôdô.
                        </p>
                        <p>
                            <span className="font-fino tracking-widest text-brand-brown">KŌDŌ</span> puise son nom dans la tradition japonaise du <em>Kōdō</em> (香道),
                            l&apos;art ancestral de &laquo;&nbsp;l&apos;écoute de l&apos;encens&nbsp;&raquo;. Plus qu&apos;une simple pratique,
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
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-brand-brown/15"></div>
                    <span className="text-brand-brown/30 text-xs">✦</span>
                    <div className="h-px flex-1 bg-brand-brown/15"></div>
                </div>

                {/* L&apos;artisanat */}
                <div className="space-y-6">
                    <h2 className="font-alliance text-2xl md:text-3xl text-brand-brown tracking-wide">
                        L&apos;Artisanat Olfactif
                    </h2>
                    <div className="space-y-5 font-alliance text-base leading-relaxed text-brand-brown/70">
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
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-brand-brown/15"></div>
                    <span className="text-brand-brown/30 text-xs">✦</span>
                    <div className="h-px flex-1 bg-brand-brown/15"></div>
                </div>

                {/* Quête de pureté */}
                <div className="space-y-6">
                    <h2 className="font-alliance text-2xl md:text-3xl text-brand-brown tracking-wide">
                        La Quête de Pureté
                    </h2>
                    <div className="space-y-5 font-alliance text-base leading-relaxed text-brand-brown/70">
                        <p>
                            Les sources olfactives incarnent une vision épurée de la parfumerie de luxe.
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

                {/* Citation */}
                <div className="py-8 text-center border-t border-brand-brown/10">
                    <p className="font-alliance text-xl md:text-2xl italic text-brand-brown/65 leading-relaxed">
                        &ldquo;Sentir, c&apos;est se souvenir de ce qui n&apos;a pas encore eu lieu.&rdquo;
                    </p>
                </div>
            </section>
        </div>
    )
}
