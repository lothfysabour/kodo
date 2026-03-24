'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: string[]
  alt: string
  enableZoom?: boolean
  fullSize?: boolean
}

export default function Carousel({ images, alt, enableZoom = false, fullSize = false }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPrevious = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))

  const goToNext = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  const goToSlide = (index: number) => setCurrentIndex(index)

  const toggleZoom = () => { if (enableZoom) setIsZoomed(!isZoomed) }

  if (images.length === 0) return null

  return (
    <>
      <div className={`relative bg-brand-beige overflow-hidden group ${fullSize ? 'h-[500px] md:h-[600px] lg:h-[700px]' : 'h-80 md:h-96'}`}>

        {/* Image principale */}
        <div
          className={`relative w-full h-full ${enableZoom ? 'cursor-zoom-in' : ''}`}
          onClick={toggleZoom}
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            className={`transition-opacity duration-500 ${fullSize ? 'object-cover' : 'object-contain p-6'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={currentIndex === 0}
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            {/* Bouton Précédent */}
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToPrevious() }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 bg-brand-beige/80 border border-brand-brown/20 hover:border-brand-brown hover:bg-brand-beige rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Image précédente"
            >
              <svg className="w-4 h-4 text-brand-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Bouton Suivant */}
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToNext() }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 bg-brand-beige/80 border border-brand-brown/20 hover:border-brand-brown hover:bg-brand-beige rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Image suivante"
            >
              <svg className="w-4 h-4 text-brand-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); goToSlide(index) }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-6 h-1.5 bg-brand-brown'
                      : 'w-1.5 h-1.5 bg-brand-brown/30 hover:bg-brand-brown/60'
                  }`}
                  aria-label={`Image ${index + 1}`}
                />
              ))}
            </div>

            {/* Compteur */}
            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-brand-beige/80 border border-brand-brown/15 text-xs text-brand-brown/60 font-alliance">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Modal Zoom — fond sombre intentionnel pour mettre en valeur l'image */}
      {isZoomed && enableZoom && (
        <div
          className="fixed inset-0 z-[100] bg-brand-brown/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={toggleZoom}
        >
          {/* Fermer */}
          <button
            className="absolute top-4 right-4 z-[101] w-11 h-11 bg-brand-beige/10 border border-brand-beige/20 hover:border-brand-beige rounded-full flex items-center justify-center transition-all duration-300"
            onClick={toggleZoom}
          >
            <svg className="w-5 h-5 text-brand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
          </div>

          {/* Navigation zoom */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[101] w-11 h-11 bg-brand-beige/10 border border-brand-beige/20 hover:border-brand-beige rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5 text-brand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[101] w-11 h-11 bg-brand-beige/10 border border-brand-beige/20 hover:border-brand-beige rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5 text-brand-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
