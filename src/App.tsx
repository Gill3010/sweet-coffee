import { useState } from 'react'
import './App.css'
import { MenuShell } from './components/layout/MenuShell'
import { MenuFaceView } from './components/menu/MenuFaceView'
import { menuFaces } from './data/menu'

function App() {
  const [activeFaceId, setActiveFaceId] = useState(menuFaces[0]?.id)

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
                onClick={() => setActiveFaceId(face.id)}
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
      {activeFace && <MenuFaceView face={activeFace} />}
    </MenuShell>
  )
}

export default App

