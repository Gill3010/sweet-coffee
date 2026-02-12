import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { MenuItem } from '../../types/menu'
import { formatCurrency } from '../../utils/formatCurrency'

export type ProductDetailModalProps = {
  item: MenuItem
  imageFolder?: string
  onClose: () => void
}

export function ProductDetailModal({
  item,
  imageFolder,
  onClose,
}: ProductDetailModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement | null
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
      previousActiveElement.current?.focus()
    }
  }, [onClose])

  const hasMultipleVariants = item.variants.length > 1
  const imageSrc =
    item.imageKey && imageFolder
      ? `/menu/${imageFolder}/${item.imageKey}.jpg`
      : null

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      ref={dialogRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className="relative z-10 flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-soft-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex min-h-[12rem] max-h-[50vh] w-full flex-shrink-0 items-center justify-center overflow-hidden rounded-t-2xl bg-slate-200">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={item.name}
              className="max-h-[50vh] w-full object-contain object-center"
            />
          ) : (
            <div className="flex h-48 items-center justify-center md:h-56">
              <span className="text-sm text-slate-500">Sin imagen</span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 md:p-5">
          <div className="flex items-start justify-between gap-3">
            <h2
              id="product-modal-title"
              className="font-display text-xl font-semibold text-slate-900 md:text-2xl"
            >
              {item.name}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="flex-shrink-0 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              aria-label="Cerrar"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>

          {item.description && (
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              {item.description}
            </p>
          )}

          <div className="mt-auto space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Precio
            </p>
            {hasMultipleVariants ? (
              <div className="flex flex-wrap gap-2">
                {item.variants.map((variant) => (
                  <span
                    key={`${item.id}-${variant.label ?? variant.price}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-900"
                  >
                    {variant.label && (
                      <span className="uppercase tracking-wide">
                        {variant.label}
                      </span>
                    )}
                    <span>{formatCurrency(variant.price)}</span>
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-lg font-semibold text-slate-900">
                {formatCurrency(item.variants[0]?.price)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
