import type { MenuFace } from '../../types/menu'

export const bebidasFrias: MenuFace = {
  id: 'cara-4-bebidas-frias',
  momentLabel: 'Bebidas frías',
  imageFolder: 'bebidas-frias',
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
}
