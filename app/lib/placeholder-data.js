const users = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'John Smith',
    email: 'John_Smith@gmail.com',
    password: '123456',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Emily Davis',
    email: 'Emily_Davis@gmail.com',
    password: '123456',
  },
  {
    id: '50ca3e20-62cd-11ee-8c99-0242ac120002',
    name: 'Michael Miller',
    email: 'Michael_Miller@gmail.com',
    password: '123456',
  },
  {
    id: '50ca3e19-62cd-11ee-8c99-0242ac120002',
    name: 'Sarah Thompson',
    email: 'Sarah_Thompson@gmail.com',
    password: '123456',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Olivia White',
    email: 'Olivia_White@gmail.com',
    password: '123456',
  }
];

const sellers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'John Smith',
    sellerThumbnail:
      'https://cdn-icons-png.flaticon.com/128/2202/2202112.png',
    sellerImage:
      'https://cdn-icons-png.flaticon.com/128/2202/2202112.png',
    sellerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Emily Davis',
    sellerThumbnail:
      'https://cdn-icons-png.flaticon.com/128/706/706830.png',
    sellerImage:
      'https://cdn-icons-png.flaticon.com/128/706/706830.png',
    sellerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
  },
  {
    id: '50ca3e20-62cd-11ee-8c99-0242ac120002',
    name: 'Michael Miller',
    sellerThumbnail:
      'https://cdn-icons-png.flaticon.com/128/4333/4333609.png',
    sellerImage:
      'https://cdn-icons-png.flaticon.com/128/4333/4333609.png',
    sellerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
  },
  {
    id: '50ca3e19-62cd-11ee-8c99-0242ac120002',
    name: 'Sarah Thompson',
    sellerThumbnail:
      'https://cdn-icons-png.flaticon.com/128/921/921124.png',
    sellerImage:
      'https://cdn-icons-png.flaticon.com/128/921/921124.png',
    sellerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Olivia White',
    sellerThumbnail:
      'https://cdn-icons-png.flaticon.com/128/706/706816.png',
    sellerImage:
      'https://cdn-icons-png.flaticon.com/128/706/706816.png',
    sellerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
  }
];

const products = [
  {
    sellerId: sellers[0].id,
    name: 'Cranium : Huichol Art',
    description: 'Craneo: Huichol miniatures can represent a wide range of subjects, from animals and plants to geometric figures and cultural symbols.',
    price: 3500,
    imageUrl:
      'https://nierika.com.mx/wp-content/uploads/2024/05/ahf-00013-300x300.jpg',
  },
  {
    sellerId: sellers[1].id,
    name: 'Cranium : Huichol Art',
    description: 'Corazón.- Figure decorated using the artistic technique of the Huichol (Wixarika) people.',
    price: 3500,
    imageUrl:
      'https://nierika.com.mx/wp-content/uploads/2023/01/ahf-00555-300x300.jpg',
  },
  {
    sellerId: sellers[2].id,
    name: 'Yarn paintings',
    description:
      'The "nierikas" are important ritual and spiritual art objects in the Huichol culture. They are also known as "tablas de estambre" in Spanish..',
    price: 4500,
    imageUrl:
      'https://nierika.com.mx/wp-content/uploads/2024/05/ahc-00120-300x300.jpg',
  },
  {
    sellerId: sellers[3].id,
    name: 'worsted board ',
    description: 'The "nierikas" are important ritual and spiritual art objects in the Huichol culture. They are also known as "tablas de estambre" in Spanish.',
    price: 520000,
    imageUrl:
      'https://nierika.com.mx/wp-content/uploads/2024/02/ahc-00511-300x300.jpg',
  },
  {
    sellerId: sellers[4].id,
    name: 'Huichol Art Backpack',
    description:
      'Huichol art yarn backpacks are traditional handcrafted pieces of the Huichol culture, an indigenous ethnic group that inhabits the mountainous region of the Sierra Madre Occidental in Mexico.',
    price: 70000,
    imageUrl:
      'https://nierika.com.mx/wp-content/uploads/2024/03/ahar-00713-300x300.jpg.',
  },
  {
    sellerId: sellers[0].id,
    name: 'Beads bracelet : Huichol',
    description: 'These bracelets stand out for their vibrant colors and intricate designs, often representing traditional symbols, elements of nature or spiritual motifs significant to the Huichol culture.',
    price: 30000,
    imageUrl:
      'https://nierika.com.mx/wp-content/uploads/2024/04/ahar-00480-300x300.jpg',
  },
  {
    sellerId: sellers[1].id,
    name: 'Microchaquira earrings : Huichol',
    description: 'Huichol art microchaquira earrings; handmade artisan jewelry pieces that reflect the rich tradition and artistic skill of the Huichol culture.',
    price: 25000,
    imageUrl:
      'https://nierika.com.mx/wp-content/uploads/2024/04/ahar-00480-300x300.jpg',
  },
];

const reviews = [];

module.exports = {
  products,
  sellers,
  users,
};
