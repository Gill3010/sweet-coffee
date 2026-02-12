import type { MenuFace } from '../../types/menu'

export const ninos: MenuFace = {
  id: 'cara-6-comidas-ninos',
  momentLabel: 'Niños',
  imageFolder: 'ninos',
  title: 'Menú para peques',
  subtitle: 'Porciones pensadas para niños',
  sections: [
    {
      id: 'kids-bites',
      title: 'Opciones infantiles',
      accent: 'food',
      items: [
        {
          id: 'mini-hamburguesa',
          name: 'Mini hamburguesa',
          variants: [{ price: 70 }],
        },
        {
          id: 'dedos-pollo',
          name: 'Dedos de pollo',
          variants: [{ price: 72 }],
        },
      ],
    },
  ],
}
