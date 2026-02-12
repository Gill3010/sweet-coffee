import type { MenuFace } from '../../types/menu'
import { portada } from './portada'
import { postres } from './postres'
import { bebidasCalientes } from './bebidas-calientes'
import { bebidasFrias } from './bebidas-frias'
import { comidas } from './comidas'
import { ninos } from './ninos'

/**
 * Menú completo como array de caras.
 * Orden: Portada → Postres → Bebidas calientes → Bebidas frías → Comidas → Niños
 */
export const menuFaces: MenuFace[] = [
  portada,
  postres,
  bebidasCalientes,
  bebidasFrias,
  comidas,
  ninos,
]
