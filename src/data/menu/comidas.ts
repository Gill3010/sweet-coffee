import type { MenuFace } from '../../types/menu'

export const comidas: MenuFace = {
  id: 'cara-5-comidas-adultos',
  momentLabel: 'Comidas',
  imageFolder: 'comidas',
  title: 'Para compartir',
  subtitle: 'Hamburguesas, paninis y picadas',
  sections: [
    {
      id: 'hamburguesas',
      title: 'Hamburguesas',
      accent: 'food',
      items: [
        {
          id: 'hamburguesa-clasica',
          name: 'Hamburguesa clásica',
          description: 'Carne de res, queso, lechuga, tomate y aderezo.',
          variants: [{ price: 95 }],
        },
        {
          id: 'hamburguesa-bbq',
          name: 'Hamburguesa BBQ',
          description: 'Con cebolla caramelizada y salsa BBQ.',
          variants: [{ price: 105 }],
        },
      ],
    },
    {
      id: 'paninis',
      title: 'Paninis',
      accent: 'food',
      items: [
        {
          id: 'panini-pollo',
          name: 'Panini de pollo',
          variants: [{ price: 90 }],
        },
        {
          id: 'panini-vegetariano',
          name: 'Panini vegetariano',
          variants: [{ price: 88 }],
        },
      ],
    },
    {
      id: 'picadas',
      title: 'Picadas',
      accent: 'food',
      items: [
        {
          id: 'picada-clasica',
          name: 'Picada clásica',
          description: 'Quesos, embutidos, dips y pan.',
          variants: [{ price: 150 }],
        },
      ],
    },
  ],
}
