import type { MenuFace } from '../../types/menu'

export const postres: MenuFace = {
  id: 'cara-2-postres',
  momentLabel: 'Postres',
  imageFolder: 'postres',
  title: 'Momentos dulces',
  subtitle: 'Fresas, frappés y otros postres para acompañar tu café.',
  sections: [
    {
      id: 'fresas-cremas',
      title: 'Fresas con crema',
      subtitle: 'La base de nuestros postres',
      accent: 'dessert',
      items: [
        {
          id: 'fresas-crema',
          name: 'Fresas con crema',
          description: 'Fresas frescas con crema batida ligeramente dulce.',
          imageKey: 'fresas-crema',
          variants: [{ price: 55 }],
        },
        {
          id: 'fresas-leche-condensada',
          name: 'Fresas con leche',
          description: 'Fresas en leche cremosa, perfectas para compartir.',
          imageKey: 'fresas-leche',
          variants: [{ price: 55 }],
        },
        {
          id: 'fresas-helado',
          name: 'Fresas con helado',
          description: 'Servidas con bola de helado de vainilla.',
          imageKey: 'fresas-helado',
          variants: [{ price: 65 }],
        },
        {
          id: 'fresas-beileys',
          name: 'Fresas con chocolcate',
          description: 'Fresas frescas con frambuesa, perfectas para compartir.',
          imageKey: 'fresas-beileys',
          variants: [{ price: 65 }],
        },
      ],
    },
    {
      id: 'frappes',
      title: 'Frappés',
      subtitle: 'Helados, cremosos y con mucho sabor',
      accent: 'dessert',
      items: [
        {
          id: 'frappe-chocolate',
          name: 'Frappé de chocolate',
          imageKey: 'frappe-chocolate',
          variants: [{ price: 65 }],
        },
        {
          id: 'frappe-oreo',
          name: 'Frappé de Oreo',
          imageKey: 'frappe-oreo',
          variants: [{ price: 69 }],
        },
      ],
    },
    {
      id: 'postres-cafeteria',
      title: 'Otros postres',
      subtitle: 'Para acompañar tu café o té',
      accent: 'dessert',
      items: [
        {
          id: 'cheesecake',
          name: 'Cheesecake',
          imageKey: 'cheesecake',
          variants: [{ price: 70 }],
        },
        {
          id: 'brownie',
          name: 'Brownie con helado',
          imageKey: 'brownie-helado',
          variants: [{ price: 75 }],
        },
      ],
    },
  ],
}
