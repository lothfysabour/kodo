export interface NotesPyramide {
  tete:  string[]
  coeur: string[]
  fond:  string[]
}

export interface Parfum {
  id: string
  name: string
  notes: string[]
  pyramide: NotesPyramide
  description: string
  images: string[]
  price: number
}

export const parfums: Parfum[] = [
  {
    id: 'apple-pie',
    name: 'APPLE PIE',
    notes: ['Pomme confite', 'Cannelle', 'Vanille'],
    pyramide: {
      tete:  ['Pomme', 'Litchi', 'Cassis'],
      coeur: ['Baie', 'Jasmin', 'Rose'],
      fond:  ['Ambre', 'Vanille', 'Musc'],
    },
    description: 'La chaleur d\'un souvenir gourmand, enveloppée dans une douceur familière.',
    images: [
      '/images/apple pie/1.jpeg',
      '/images/apple pie/2.jpeg',
      '/images/apple pie/3.jpeg',
      '/images/apple pie/4.jpeg'
    ],
    price: 195,
  },
  // {
  //   id: 'zephir',
  //   name: 'ZÉPHIR',
  //   notes: ['Notes fraîches', 'Agrumes', 'Bois léger'],
  //   description: 'Une brise légère et rafraîchissante, évasion délicate vers l\'infini.',
  //   images: [
  //     '/images/Zephir/1.jpeg',
  //   ],
  //   price: 195,
  // },
  {
    id: 'oud-vanille',
    name: 'OUD VANILLE',
    notes: ['Oud', 'Vanille de Madagascar', 'Musc blanc'],
    pyramide: {
      tete:  ['Orange amère', 'Bergamote', 'Sésame'],
      coeur: ['Cannelle', 'Oud du Laos', 'Bois de Gaïac'],
      fond:  ['Vanille', 'Benjoin', 'Patchouli', 'Caramel'],
    },
    description: 'La rencontre entre la force du bois et la tendresse sucrée.',
    images: [
      '/images/oud vanille/1.jpeg',
      '/images/oud vanille/2.jpeg',
      '/images/oud vanille/3.jpeg',
      '/images/oud vanille/4.jpeg',
    ],
    price: 195,
  },
  {
    id: 'ambre-elixir',
    name: 'AMBRE ELIXIR',
    notes: ['Ambre gris', 'Benjoin', 'Santal'],
    pyramide: {
      tete:  ['Ananas', 'Pêche', 'Cannelle', 'Pomme'],
      coeur: ['Miel', 'Rhum', 'Rose'],
      fond:  ['Ambre', 'Vanille', 'Musc'],
    },
    description: 'Un accord sensuel et doré, caresse orientale d\'un crépuscule infini.',
    images: [
      '/images/ambre elixir/1.jpeg',
      '/images/ambre elixir/2.jpeg',
      '/images/ambre elixir/3.jpeg',
      '/images/ambre elixir/4.jpeg'
        ],
    price: 195,
  },
]


