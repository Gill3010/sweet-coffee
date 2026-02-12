import type { MenuFace } from '../../types/menu'

export const postres: MenuFace = {
  id: 'cara-2-postres',
  momentLabel: 'Postres',
  imageFolder: 'postres',
  title: 'Momentos dulces',
  subtitle: 'Fresas, frappés y otros postres para acompañar tu café.',
  sections: [
    {
      id: 'fresas',
      title: 'Fresas',
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
          name: 'Fresas con chocolate',
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
      id: 'chocolates',
      title: 'Chocolates',
      subtitle: 'Para los amantes del cacao',
      accent: 'dessert',
      items: [
        {
          id: 'chocolate-malva',
          name: 'Chocolate con malva',
          imageKey: 'chocolate-malva',
          variants: [{ price: 65 }],
        },
        {
          id: 'chocolate',
          name: 'Chocolate',
          imageKey: 'chocolate',
          variants: [{ price: 65 }],
        },
      ],
    },
    {
      id: 'dulces',
      title: 'Dulces',
      subtitle: 'Postres dulces y tentadores',
      accent: 'dessert',
      items: [
        {
          id: 'bizcocho-helado',
          name: 'Bizcocho con helado',
          imageKey: 'bizcocho-helado',
          variants: [{ price: 65 }],
        },
      ],
    },
    {
      id: 'batidos',
      title: 'Batidos',
      subtitle: 'Cremosos y refrescantes',
      accent: 'dessert',
      items: [
        {
          id: 'batido-fresa',
          name: 'Batido de fresa',
          imageKey: 'batido-fresa',
          variants: [{ price: 65 }],
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
