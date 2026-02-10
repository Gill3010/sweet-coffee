import type { MenuSection as MenuSectionType } from '../../types/menu'
import { MenuItemCard } from './MenuItemCard'

type MenuSectionProps = {
  section: MenuSectionType
}

const accentClasses: Record<
  NonNullable<MenuSectionType['accent']>,
  string
> = {
  dessert:
    'bg-accent-dessert/10 text-accent-dessert border-accent-dessert/30',
  drinkHot:
    'bg-accent-drinkHot/10 text-accent-drinkHot border-accent-drinkHot/30',
  drinkCold:
    'bg-accent-drinkCold/10 text-accent-drinkCold border-accent-drinkCold/30',
  food: 'bg-accent-food/10 text-accent-food border-accent-food/30',
}

export function MenuSection({ section }: MenuSectionProps) {
  const pillClassName = section.accent
    ? accentClasses[section.accent]
    : 'bg-slate-100 text-slate-500 border-slate-200'

  return (
    <section className="space-y-3">
      {(section.title || section.subtitle) && (
        <header className="space-y-1">
          {section.title && (
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
              <span className={pillClassName}>{section.title}</span>
            </div>
          )}
          {section.subtitle && (
            <p className="text-xs text-slate-500">{section.subtitle}</p>
          )}
        </header>
      )}

      <div className="space-y-3">
        {section.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

