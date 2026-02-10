import type { MenuFace } from '../types/menu'

/** 
 * Configuración base de las 6 caras del menú.
 * 
 * - Puedes cambiar precios, nombres, descripciones o agregar items
 *   sin tocar los componentes.
 * - Para conectar imágenes reales, reutiliza la propiedad `imageKey`
 *   como ruta de imagen local, URL, o id en tu sistema de assets.
 */
export const menuFaces: MenuFace[] = [
  {
    id: 'cara-1-portada',
    momentLabel: 'Portada',
    title: 'Sweets & Coffee',
    subtitle: 'Postres, cafés y algo rico para cada momento del día.',
    isCover: true,
    coverDescription:
      'Bienvenido a Sweets & Coffee, un espacio para disfrutar fresas, postres, cafés y comidas casuales en un ambiente relajado.',
    coverHighlights: [
      'Postres con fresas, frappés y opciones dulces para consentirte.',
      'Bebidas calientes y frías para acompañar cada visita.',
      'Hamburguesas, paninis, picadas y opciones para niños.',
    ],
    // Claves para las imágenes del carrusel de portada.
    // Copia tus imágenes a `public/carrusel/` y nómbralas según estas claves,
    // por ejemplo: `public/carrusel/cover-1.jpg`, `public/carrusel/cover-2.jpg`, etc.
    coverCarouselImageKeys: ['cover-1', 'cover-2', 'cover-3', 'cover-4'],
    // La portada no muestra precios; las secciones comienzan a partir de la segunda cara.
    sections: [],
  },
  {
    id: 'cara-2-postres',
    momentLabel: 'Postres',
    title: 'Momentos dulces',
    subtitle: 'Fresas, frappés y otros postres para acompañar tu café.',
    sections: [
      {
        id: 'fresas-clasicas',
        title: 'Fresas clásicas',
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
            id: 'fresas-leche',
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
        ],
      },
      {
        id: 'frappes',
        title: 'Frappés',
        subtitle: 'Helados, cremosos y con mucho sabor',
        accent: 'dessert',
        items: [
          {
            id: 'frappe-fresa',
            name: 'Frappé de fresa',
            imageKey: 'frappe-fresa',
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
  },
  {
    id: 'cara-3-bebidas-calientes',
    momentLabel: 'Bebidas calientes',
    title: 'Momento café',
    subtitle: 'Tés, cafés y especialidades calientes',
    sections: [
      {
        id: 'cafes-clasicos',
        title: 'Cafés clásicos',
        accent: 'drinkHot',
        items: [
          {
            id: 'americano',
            name: 'Café americano',
            variants: [
              { label: 'Chico', price: 35 },
              { label: 'Grande', price: 45 },
            ],
          },
          {
            id: 'capuchino',
            name: 'Capuchino',
            variants: [
              { label: 'Chico', price: 42 },
              { label: 'Grande', price: 50 },
            ],
          },
          {
            id: 'mocachino',
            name: 'Mocachino',
            variants: [
              { label: 'Chico', price: 45 },
              { label: 'Grande', price: 55 },
            ],
          },
        ],
      },
      {
        id: 'tes',
        title: 'Tés e infusiones',
        accent: 'drinkHot',
        items: [
          {
            id: 'te-negro',
            name: 'Té negro',
            variants: [{ price: 35 }],
          },
          {
            id: 'te-frutal',
            name: 'Té frutal',
            variants: [{ price: 38 }],
          },
        ],
      },
    ],
  },
  {
    id: 'cara-4-bebidas-frias',
    momentLabel: 'Bebidas frías',
    title: 'Refrescos & cervezas',
    subtitle: 'Para acompañar tus comidas y picadas',
    sections: [
      {
        id: 'refrescos',
        title: 'Refrescos',
        accent: 'drinkCold',
        items: [
          {
            id: 'soda',
            name: 'Sodas variadas',
            variants: [{ price: 30 }],
          },
          {
            id: 'agua-saborizada',
            name: 'Aguas saborizadas',
            variants: [{ price: 28 }],
          },
        ],
      },
      {
        id: 'cervezas',
        title: 'Cervezas',
        accent: 'drinkCold',
        items: [
          {
            id: 'lager',
            name: 'Cerveza lager',
            variants: [{ price: 45 }],
          },
          {
            id: 'artesanal',
            name: 'Cerveza artesanal',
            variants: [{ price: 60 }],
          },
        ],
      },
    ],
  },
  {
    id: 'cara-5-comidas-adultos',
    momentLabel: 'Comidas',
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
  },
  {
    id: 'cara-6-comidas-ninos',
    momentLabel: 'Niños',
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
  },
]

