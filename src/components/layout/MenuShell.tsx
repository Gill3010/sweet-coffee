import type { ReactNode } from 'react'
import { FooterSpark } from './FooterSpark'

type MenuShellProps = {
  logoSlot?: ReactNode
  headerTitle?: string
  headerSubtitle?: string
  navigation: ReactNode
  children: ReactNode
}

/**
 * Contenedor principal del menú.
 * 
 * - Centraliza el diseño mobile first (max-width, padding, sombras).
 * - En el futuro puede reutilizarse como layout en una SPA o app móvil.
 */
export function MenuShell({
  logoSlot,
  headerTitle,
  headerSubtitle,
  navigation,
  children,
}: MenuShellProps) {
  return (
    <div className="page-shell">
      <main className="menu-card">
        <header className="relative flex flex-col gap-3 px-4 pt-4 pb-3 md:flex-row md:items-end md:justify-between md:gap-4 md:px-6 md:pt-6 md:pb-4 lg:px-8">
          <div className="flex items-center justify-between gap-3 md:justify-start">
            <div className="flex items-center gap-2 md:gap-3">
              {logoSlot ? (
                logoSlot
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-xs font-semibold text-brand-dark">
                  Logo
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand-dark/80">
                  Menú
                </span>
                {headerTitle && (
                  <h1 className="font-display text-lg font-semibold leading-tight text-slate-900 md:text-xl">
                    {headerTitle}
                  </h1>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 md:items-end md:text-right">
            {headerSubtitle && (
              <p className="text-xs text-slate-500 md:max-w-xs md:text-[13px]">
                {headerSubtitle}
              </p>
            )}
            <div className="mt-1 md:mt-0">{navigation}</div>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto px-4 pb-6 pt-2 md:px-6 md:pb-8 md:pt-3 lg:px-8">
          {children}
        </section>

        <FooterSpark />
      </main>
    </div>
  )
}

