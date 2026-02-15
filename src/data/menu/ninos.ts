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
          id: 'deditos-pollo',
          name: 'Deditos de pollo',
          description: 'Deditos de pollo apanados con el acompañamiento de su gusto. El favorito de los pequeños de la casa.',
          imageKey: 'mini-hamburguesa',
          variants: [{ price: 70 }],
        },
        {
          id: 'queso-burger',
          name: 'Queso Burger',
          description: 'Pan, queso americano, salsa de tomate y carne.',
          imageKey: 'queso-burger',
          variants: [{ price: 72 }],
        },
      ],
    },
  ],
}
