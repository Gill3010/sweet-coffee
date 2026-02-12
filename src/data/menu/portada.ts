import type { MenuFace } from '../../types/menu'

export const portada: MenuFace = {
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
  coverCarouselImageKeys: ['cover-1', 'cover-2', 'cover-3', 'cover-4'],
  sections: [],
}
