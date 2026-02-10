import type { MenuFace } from '../../types/menu'
import { MenuSection } from './MenuSection'
import { CoverCarousel } from './CoverCarousel'

type MenuFaceViewProps = {
  face: MenuFace
}

/**
 * Representa el contenido de una "cara" física del menú.
 * 
 * A futuro se puede reutilizar este componente como pantalla
 * independiente en una aplicación web o móvil.
 */
export function MenuFaceView({ face }: MenuFaceViewProps) {
  if (face.isCover) {
    return (
      <div className="space-y-6 lg:space-y-8">
        {/* Carrusel en todas las vistas, a lo ancho de la pantalla */}
        <div className="full-bleed">
          <CoverCarousel imageKeys={face.coverCarouselImageKeys ?? []} />
        </div>

        {/* Información del restaurante + QR, en grid desde tablet hacia arriba */}
        <div className="space-y-6 md:grid md:grid-cols-[1.6fr,1fr] md:items-center md:gap-8">
          <section className="space-y-4">
            <header className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-dark/70">
                Bienvenido
              </p>
              <h2 className="font-display text-2xl font-semibold text-slate-900 md:text-3xl">
                {face.title}
              </h2>
              {face.subtitle && (
                <p className="text-sm text-slate-600 md:text-base">
                  {face.subtitle}
                </p>
              )}
            </header>

            {face.coverDescription && (
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                {face.coverDescription}
              </p>
            )}

            {face.coverHighlights && face.coverHighlights.length > 0 && (
              <ul className="space-y-1.5 text-sm text-slate-600 md:text-base">
                {face.coverHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-3 space-y-1 text-xs text-slate-500 md:text-sm">
              <p>
                Escanea el código QR para ver más detalles, redes sociales y
                novedades.
              </p>
            </div>
          </section>

          <section className="mt-2 flex flex-col items-center gap-3 md:mt-0">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-40 w-40 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 shadow-inner md:h-52 md:w-52">
                <span className="text-xs font-medium text-slate-500 md:text-sm">
                  Aquí va tu
                  <br />
                  código QR
                </span>
              </div>
              <p className="text-center text-xs text-slate-500 md:text-sm">
                Conéctate a nuestras redes, consulta promociones y más.
              </p>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <header className="space-y-1 md:space-y-2">
        <h2 className="font-display text-xl font-semibold text-slate-900 md:text-2xl">
          {face.title}
        </h2>
        {face.subtitle && (
          <p className="text-sm text-slate-500 md:text-base">
            {face.subtitle}
          </p>
        )}
      </header>

      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
        {face.sections.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}

