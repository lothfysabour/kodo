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

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleZoom = () => {
    if (enableZoom) {
      setIsZoomed(!isZoomed)
    }
  }

  if (images.length === 0) return null

  return (
    <>
      <div className={`relative bg-black overflow-hidden group ${fullSize ? 'h-[500px] md:h-[600px] lg:h-[700px]' : 'h-80 md:h-96'}`}>
        {/* Image principale */}
        <div 
          className={`relative w-full h-full flex items-center justify-center ${enableZoom ? 'cursor-zoom-in' : ''}`}
          onClick={toggleZoom}
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            className={`transition-opacity duration-500 ${fullSize ? 'object-cover' : 'object-contain p-8'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={currentIndex === 0}
          />
        </div>

      {/* Navigation - Affichée seulement s'il y a plusieurs images */}
      {images.length > 1 && (
        <>
          {/* Bouton Précédent */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/70 border border-white/20 hover:border-gold hover:bg-gold/10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Image précédente"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Bouton Suivant */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/70 border border-white/20 hover:border-gold hover:bg-gold/10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Image suivante"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicateurs (dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  goToSlide(index)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-gold'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>

          {/* Compteur */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/70 border border-white/20 rounded-full text-xs text-white/70">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
      </div>

      {/* Modal Zoom */}
      {isZoomed && enableZoom && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={toggleZoom}
        >
          {/* Bouton fermer */}
          <button
            className="absolute top-4 right-4 z-[101] w-12 h-12 bg-white/10 border border-white/20 hover:border-gold rounded-full flex items-center justify-center transition-all duration-300"
            onClick={toggleZoom}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image zoomée */}
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

          {/* Navigation dans le zoom */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrevious()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[101] w-12 h-12 bg-white/10 border border-white/20 hover:border-gold rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[101] w-12 h-12 bg-white/10 border border-white/20 hover:border-gold rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
