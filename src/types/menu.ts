export type PriceVariant = {
  /** Etiqueta opcional para tamaños o presentaciones, por ejemplo: "Chico", "Grande", "Con helado". */
  label?: string
  /** Precio numérico. La presentación formateada se controla desde los componentes. */
  price: number
}

export type MenuItem = {
  id: string
  name: string
  description?: string
  /** Clave para asociar una imagen (archivo local, URL o id de CMS). */
  imageKey?: string
  tags?: string[]
  variants: PriceVariant[]
}

export type MenuSection = {
  id: string
  title?: string
  subtitle?: string
  accent?: 'dessert' | 'drinkHot' | 'drinkCold' | 'food'
  items: MenuItem[]
}

export type MenuFace = {
  id: string
  /** Texto corto que verá el usuario en la navegación (pestañas/chips). */
  momentLabel: string
  /** Título principal de la cara, puede ser distinto al momentLabel. */
  title: string
  subtitle?: string
  /** Marca si esta cara funciona como portada (sin listado de precios). */
  isCover?: boolean
  /** Texto descriptivo principal para la portada. */
  coverDescription?: string
  /** Bloques de texto adicionales para la portada (valores, horarios, dirección, etc.). */
  coverHighlights?: string[]
  /** Claves para las imágenes del carrusel de portada (se mapearán a rutas reales). */
  coverCarouselImageKeys?: string[]
  /** Subcarpeta dentro de `public/menu/` donde viven las imágenes de los ítems. Ej: postres, bebidas-calientes. */
  imageFolder?: string
  /** Cada cara puede tener 1 o varias secciones internas. */
  sections: MenuSection[]
}

