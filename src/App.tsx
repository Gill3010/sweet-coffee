import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { MenuShell } from './components/layout/MenuShell'
import { MenuFaceView } from './components/menu/MenuFaceView'
import { ProductDetailModal } from './components/ProductDetailModal'
import { menuFaces } from './data/menu'
import type { MenuItem } from './types/menu'

const HASH_TO_FACE_ID: Record<string, string> = {
  portada: 'cara-1-portada',
  postres: 'cara-2-postres',
  'bebidas-calientes': 'cara-3-bebidas-calientes',
  'bebidas-frias': 'cara-4-bebidas-frias',
  comidas: 'cara-5-comidas-adultos',
  ninos: 'cara-6-comidas-ninos',
}

const FACE_ID_TO_HASH: Record<string, string> = Object.fromEntries(
  Object.entries(HASH_TO_FACE_ID).map(([k, v]) => [v, k]),
)

function getFaceIdFromHash(): string | null {
  const hash = window.location.hash.slice(1).toLowerCase()
  return (hash && HASH_TO_FACE_ID[hash]) || null
}

function App() {
  const [activeFaceId, setActiveFaceId] = useState(
    () => getFaceIdFromHash() ?? menuFaces[0]?.id ?? '',
  )
  const [selectedItem, setSelectedItem] = useState<{
    item: MenuItem
    imageFolder?: string
  } | null>(null)

  const handleItemClick = useCallback(
    (item: MenuItem, imageFolder?: string) => {
      setSelectedItem({ item, imageFolder })
    },
    [],
  )

  useEffect(() => {
    const onHashChange = () => {
      const faceId = getFaceIdFromHash()
      if (faceId) setActiveFaceId(faceId)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const activeFace = menuFaces.find((face) => face.id === activeFaceId)

  return (
    <MenuShell
      // Reemplaza este slot con tu logo real si lo deseas
      logoSlot={
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
          SC
        </div>
      }
      headerTitle="Sweets & Coffee"
      headerSubtitle="Explora el menú por momentos: desliza las pestañas o toca para cambiar de cara."
      navigation={
        <nav className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-1 pt-1">
          {menuFaces.map((face) => {
            const isActive = face.id === activeFaceId
            return (
              <button
                key={face.id}
                type="button"
                onClick={() => {
                  setActiveFaceId(face.id)
                  const slug = FACE_ID_TO_HASH[face.id]
                  if (slug) window.location.hash = slug
                }}
                className={[
                  'whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors',
                  isActive
                    ? 'bg-brand text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
                ].join(' ')}
              >
                {face.momentLabel}
              </button>
            )
          })}
        </nav>
      }
    >
      {activeFace && (
        <MenuFaceView face={activeFace} onItemClick={handleItemClick} />
      )}
      {selectedItem && (
        <ProductDetailModal
          item={selectedItem.item}
          imageFolder={selectedItem.imageFolder}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </MenuShell>
  )
}

export default App

