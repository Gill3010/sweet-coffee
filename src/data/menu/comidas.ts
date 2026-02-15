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
          id: 'comando-burger',
          name: 'Comando Burger',
          description: 'Deliciosa carne ahumada, queso americano, macarrón frito para su toque crocante, cebollas caramelizadas, tocino, lechuga, tomate, pan y salsa de la casa.',
          imageKey: 'comando-burger',
          variants: [{ price: 95 }],
        },
        {
          id: 'hamburguesa de pollo',
          name: 'Hamburguesa de pollo',
          description: 'Filete de pollo apanado, queso americano, lechuga, tomate, cebolla morada, aderezo dulce-picante y pepinillo dulce.',
          imageKey: 'hamburguesa-pollo',
          variants: [{ price: 95 }],
        },
        {
          id: 'good-burger',
          name: 'The Good Burger',
          description: 'Carne de res, queso mozzarella, huevo, tajadas maduras, lechuga, tomate, cebolla morada y salsa del campo. ',
          imageKey: 'good-burger',
          variants: [{ price: 95 }],
        },
        {
          id: 'hamburguesa-sencila',
          name: 'Hamburguesa Sencilla',
          description: 'Carne de res, queso americano, lechuga, tomate y salsa de tomate.',
          imageKey: 'hamburguesa-vegana',
          variants: [{ price: 95 }],
        },
        {
          id: 'mini-comando',
          name: 'Mini comando',
          description: 'El mismo sabor inigualable de la Comando pero más pequeña.',
          imageKey: 'mini-comando',
          variants: [{ price: 95 }],
        },
        {
          id: 'hamburguesa-pollo',
          name: 'Hamburguesa BBQ',
          description: 'Con cebolla caramelizada y salsa BBQ.',
          imageKey: 'hamburguesa-pollo',
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
          description: 'Pan especial, salsa verde, pollo a la plancha, queso mozzarella, lechuga, tomate y cebolla morada.',
          imageKey: 'panini-pollo',
          variants: [{ price: 90 }],
        },
        {
          id: 'panini-carnes-frias',
          name: 'Panini de Carnes Frias',
          description: 'Pan especial, mayonesa, jamón de pierna, jamón serrano, chorizo nobleza y chorizo italiano.',
          imageKey: 'panini-carnes-frias',
          variants: [{ price: 88 }],
        },
        {
          id: 'panini-carne',
          name: 'Panini de Carne',
          description: 'Pan especial, carne en corte macedonia, cebolla, pimentón, queso mozzarella, salsa de tomate de árbol.',
          imageKey: 'panini-carne',
          variants: [{ price: 90 }],
        },
      ],
    },
    {
      id: 'picadas',
      title: 'Picadas',
      accent: 'food',
      items: [
        {
          id: 'picada-chica',
          name: 'Picada Chica',
          description: 'Pollo, cerdo, carne de res, patacones, yucas y papas fritas (para 2 personas ).',
          imageKey: 'picada-chica',
          variants: [{ price: 150 }],
        },
        {
          id: 'picada-grande',
          name: 'Picada Grande',
          description: 'Pollo, cerdo, carne de res, patacones, yucas y papas fritas (para 4 personas ).',
          imageKey: 'picada-grande',
          variants: [{ price: 250 }],
        },
      ],
    },
    {
      id: 'plancha-ahumado',
      title: 'A la plancha y ahumado a la leña',
      accent: 'food',
      items: [
        {
          id: 'pollo-plancha',
          name: 'Pollo a la plancha',
          description: 'Filete de pollo a la plancha, con su acompañamiento y ensalada verde.',
          imageKey: 'pollo-plancha',
          variants: [{ price: 95 }],
        },
        {
          id: 'pollo-cerdo-ahumado',
          name: 'Pollo o cerdo ahumado a la leña',
          description: 'Orden de cerdo o pollo ahumado a la leña.',
          imageKey: 'pollo-cerdo-ahumado',
          variants: [
            { label: 'Orden de cerdo', price: 6.95 },
            { label: 'Orden de pollo', price: 7.25 },
          ],
        },
      ],
    },
  ],
}
