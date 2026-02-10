import { useEffect, useMemo, useState } from 'react'

type CoverCarouselProps = {
  imageKeys: string[]
}

/**
 * Carrusel ligero para la portada.
 *
 * - 4 imágenes (o menos si se configuran menos claves).
 * - Reproducción automática, bucle infinito.
 * - Transición combinando fade + movimiento vertical suave + zoom.
 * - Navegación manual mediante controles y "pills".
 *
 * NOTA: Mantiene la vista móvil/tablet estable porque solo se muestra en escritorio (lg+).
 */
export function CoverCarousel({ imageKeys }: CoverCarouselProps) {
  const slides = useMemo(
    () =>
      imageKeys.slice(0, 4).map((key, index) => ({
        key,
        index,
        // Se asume que las imágenes viven en `public/carrusel/KEY.jpg`.
        src: `/carousel/${key}.jpg`,
      })),
    [imageKeys],
  )

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [slides.length])

  if (slides.length === 0) {
    return null
  }

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length)
  }

  const next = () => goTo(activeIndex + 1)
  const prev = () => goTo(activeIndex - 1)

  return (
    <div className="relative flex h-full w-full flex-col gap-2">
      <div className="relative h-52 w-full overflow-hidden rounded-none bg-slate-200 md:h-56 lg:h-64">
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex

          return (
            <div
              key={slide.key}
              className={[
                'absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out will-change-transform',
                isActive
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'pointer-events-none opacity-0 translate-y-4 scale-95',
              ].join(' ')}
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-300">
                {/* 
                  Sustituye este `<img>` por tus imágenes reales.
                  Solo necesitas copiar tus archivos a `public/carrusel/`
                  con nombres `cover-1.jpg`, `cover-2.jpg`, etc.
                */}
                <img
                  src={slide.src}
                  alt={`Portada ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Controles + indicadores debajo del carrusel: misma vista en móvil, tablet y escritorio */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/65 text-xs text-white backdrop-blur-sm transition hover:bg-black/80"
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <div className="flex items-center justify-center gap-2">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={[
                    'h-1.5 rounded-full transition-all',
                    isActive
                      ? 'w-6 bg-brand'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400',
                  ].join(' ')}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={next}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/65 text-xs text-white backdrop-blur-sm transition hover:bg-black/80"
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

