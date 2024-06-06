// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const artisans = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    fname: 'user',
    lname: 'name',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const handcrafts = [
  {
    id: '1958dc9e-712f-4377-85e9-fec4b6a6442a',
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Cranium : Huichol Art',
    description:
      'Craneo: Huichol miniatures can represent a wide range of subjects, from animals and plants to geometric figures and cultural symbols.',
    price: 3500,
    category: 'Huichol Art Figures',
    image_url:
      'https://nierika.com.mx/wp-content/uploads/2024/05/ahf-00013-300x300.jpg',
  },
  {
    id: '2958dc9e-742f-4377-85e9-fec4b6a6442a',
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Cranium : Huichol Art',
    description:
      'Corazón.- Figure decorated using the artistic technique of the Huichol (Wixarika) people.',
    price: 3500,
    category: 'Huichol Art Figures',
    image_url:
      'https://nierika.com.mx/wp-content/uploads/2023/01/ahf-00555-300x300.jpg',
  },
  {
    id: '4958dc9e-712f-4377-85e9-fec4b6a6442x',
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Yarn paintings',
    description:
      'The "nierikas" are important ritual and spiritual art objects in the Huichol culture. They are also known as "tablas de estambre" in Spanish..',
    price: 4500,
    category: 'Huichol Art Figures',
    image_url:
      'https://nierika.com.mx/wp-content/uploads/2024/05/ahc-00120-300x300.jpg',
  },
  {
    id: '4358dc9e-712f-4377-85e9-fec4b6a6442h',
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'worsted board ',
    description:
      'The "nierikas" are important ritual and spiritual art objects in the Huichol culture. They are also known as "tablas de estambre" in Spanish.',
    price: 520000,
    category: 'Huichol Art Figures',
    image_url:
      'https://nierika.com.mx/wp-content/uploads/2024/02/ahc-00511-300x300.jpg',
  },
  {
    id: '8558dc9e-712f-4377-85e9-fec4b6a6442g',
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Huichol Art Backpack ',
    description:
      'Huichol art yarn backpacks are traditional handcrafted pieces of the Huichol culture, an indigenous ethnic group that inhabits the mountainous region of the Sierra Madre Occidental in Mexico.',
    price: 70000,
    category: 'Accessories',
    image_url:
      'https://nierika.com.mx/wp-content/uploads/2024/03/ahar-00713-300x300.jpg.',
  },
  {
    id: '7158dc9e-712f-4377-85e9-fec4b6a6442f',
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Beads bracelet : Huichol ',
    description:
      'These bracelets stand out for their vibrant colors and intricate designs, often representing traditional symbols, elements of nature or spiritual motifs significant to the Huichol culture.',
    price: 30000,
    category: 'Accessories',
    image_url:
      'https://nierika.com.mx/wp-content/uploads/2024/04/ahar-00480-300x300.jpg',
  },
  {
    id: '5858dc9e-712f-4377-85e9-fec4b6a6442e',
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Microchaquira earrings : Huichol',
    description:
      'Huichol art microchaquira earrings; handmade artisan jewelry pieces that reflect the rich tradition and artistic skill of the Huichol culture.',
    price: 25000,
    category: 'Accessories',
    image_url:
      'https://nierika.com.mx/wp-content/uploads/2024/04/ahar-00480-300x300.jpg',
  },
];

const reviews = [
  {
    id: 'ab5a6279-1d33-4f34-8a7d-bea60c835821',
    handcraft_id: '5858dc9e-712f-4377-85e9-fec4b6a6442e',
    name: 'James',
    rating: '4',
    body: 'Pretty design'
  },
  {
    id: 'aa6bf207-52b1-4582-81c4-5b8932e3e132',
    handcraft_id: '5858dc9e-712f-4377-85e9-fec4b6a6442e',
    name: 'Rachel',
    rating: '5',
    body: 'LOVE THEM!!!!!!'
  },
  {
    id: '049e2c14-8edf-47a7-875a-5738ea33a605',
    handcraft_id: '7158dc9e-712f-4377-85e9-fec4b6a6442f',
    name: 'Michael',
    rating: '3',
    body: 'Fell apart after one month'
  },
  {
    id: '5f912f64-d62e-472f-a562-fc109c4336f7',
    handcraft_id: '7158dc9e-712f-4377-85e9-fec4b6a6442f',
    name: 'Jessica',
    rating: '5',
    body: 'My favorite accessory!'
  },
  {
    id: 'ba991746-a033-4459-96cf-6f9a0694fc4f',
    handcraft_id: '8558dc9e-712f-4377-85e9-fec4b6a6442g',
    name: 'Andrew',
    rating: '5',
    body: 'I use it everyday and it holds everything I need.'
  },
  {
    id: '',
    handcraft_id: '',
    name: '',
    rating: '',
    body: ''
  }
]

module.exports = {
  artisans,
  handcrafts,
  reviews
};
