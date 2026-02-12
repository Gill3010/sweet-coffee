import type { MenuItem } from '../../types/menu'
import { formatCurrency } from '../../utils/formatCurrency'

type MenuItemCardProps = {
  item: MenuItem
  imageFolder?: string
  onItemClick?: (item: MenuItem, imageFolder?: string) => void
}

export function MenuItemCard({
  item,
  imageFolder,
  onItemClick,
}: MenuItemCardProps) {
  const hasMultipleVariants = item.variants.length > 1
  const isClickable = Boolean(onItemClick)

  return (
    <article
      className={`flex gap-3 rounded-2xl bg-slate-50 px-3 py-3 md:gap-4 md:px-4 md:py-4 ${isClickable ? 'cursor-pointer' : ''}`}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={
        isClickable ? () => onItemClick?.(item, imageFolder) : undefined
      }
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onItemClick?.(item, imageFolder)
              }
            }
          : undefined
      }
    >
      <div className="relative aspect-[3/4] w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-200 md:w-24 lg:w-28">
        {item.imageKey && imageFolder ? (
          <img
            src={`/menu/${imageFolder}/${item.imageKey}.jpg`}
            alt={item.name}
            className="h-full w-full object-contain"
          />
        ) : null}
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

