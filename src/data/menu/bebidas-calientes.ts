import type { MenuFace } from '../../types/menu'

export const bebidasCalientes: MenuFace = {
  id: 'cara-3-bebidas-calientes',
  momentLabel: 'Bebidas calientes',
  imageFolder: 'bebidas-calientes',
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
}
