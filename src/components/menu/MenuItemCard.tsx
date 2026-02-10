import type { MenuItem } from '../../types/menu'

type MenuItemCardProps = {
  item: MenuItem
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const hasMultipleVariants = item.variants.length > 1

  return (
    <article className="flex gap-3 rounded-2xl bg-slate-50 px-3 py-3 md:gap-4 md:px-4 md:py-4">
      {/* Slot de imagen: aquí puedes reemplazar por una <img> real usando item.imageKey */}
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-200 md:h-20 md:w-20">
        {/* 
          Ejemplo futuro:
          <img src={images[item.imageKey]} alt={item.name} className="h-full w-full object-cover" />
        */}
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2 md:gap-3">
          <h3 className="font-medium text-slate-900 md:text-base">
            {item.name}
          </h3>
          <div className="text-right text-sm font-semibold text-slate-900 md:text-base">
            {hasMultipleVariants ? (
              <span>
                desde{' '}
                {formatCurrency(
                  Math.min(...item.variants.map((v) => v.price)),
                )}
              </span>
            ) : (
              <span>{formatCurrency(item.variants[0]?.price)}</span>
            )}
          </div>
        </div>

        {item.description && (
          <p className="text-xs text-slate-500 md:text-[13px]">
            {item.description}
          </p>
        )}

        {hasMultipleVariants && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {item.variants.map((variant) => (
              <span
                key={`${item.id}-${variant.label ?? variant.price}`}
                className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600 shadow-sm"
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
        )}
      </div>
    </article>
  )
}

function formatCurrency(value?: number) {
  if (value == null) return '—'
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(value)
}

