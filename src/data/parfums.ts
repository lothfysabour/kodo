export interface Parfum {
  id: string
  name: string
  notes: string[]
  description: string
  image: string
}

export const parfums: Parfum[] = [
  {
    id: 'oud-vanille',
    name: 'OUD VANILLE',
    notes: ['Oud', 'Vanille de Madagascar', 'Musc blanc'],
    description: 'La rencontre entre la force du bois et la tendresse sucrée.',
    image: '/images/oud-vanille.jpg',
  },
  {
    id: 'apple-pie',
    name: 'APPLE PIE',
    notes: ['Pomme confite', 'Cannelle', 'Vanille'],
    description: 'La chaleur d\'un souvenir gourmand, enveloppée dans une douceur familière.',
    image: '/images/apple-pie.jpg',
  },
  {
    id: 'ambre-elixir',
    name: 'AMBRE ELIXIR',
    notes: ['Ambre gris', 'Benjoin', 'Santal'],
    description: 'Un accord sensuel et doré, caresse orientale d\'un crépuscule infini.',
    image: '/images/ambre-elixir.jpg',
  },
]


