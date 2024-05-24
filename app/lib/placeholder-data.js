// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const artisans = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const handcrafts = [	
  {	
    id: '123e4567-e89b-42d3-a456-556642440000',	
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',	
    name: 'Cranium : Huichol Art',	
    description: 'Craneo: Huichol miniatures can represent a wide range of subjects, from animals and plants to geometric figures and cultural symbols.',	
    price: 3500,	
    category: 'Huichol Art Figures',	
    image_url: 'https://nierika.com.mx/wp-content/uploads/2024/05/ahf-00013-300x300.jpg',	
    type: 'Cranium',	
    review: 'Good product',	
   rate: 4,	
  },	
  {	
    id: '216749c7-1a6a-4a5e-8a23-123456789012',	
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',	
    name: 'Cranium : Huichol Art',	
    description: 'Corazón.- Figure decorated using the artistic technique of the Huichol (Wixarika) people.',	
    price: 3500,	
    category: 'Huichol Art Figures',	
    image_url: 'https://nierika.com.mx/wp-content/uploads/2023/01/ahf-00555-300x300.jpg',	
    type: 'Heart',	
    review: 'Good product',	
   rate: 3,	
  },	
  {	
    id: '34198c2e-5f6a-4b4e-8a23-123456789012',	
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',	
    name: 'Yarn paintings',	
    description: 'The "nierikas" are important ritual and spiritual art objects in the Huichol culture. They are also known as "tablas de estambre" in Spanish..',	
    price: 4500,	
    category: 'Huichol Art Figures',	
    image_url: 'https://nierika.com.mx/wp-content/uploads/2024/05/ahc-00120-300x300.jpg',	
    type: 'Yarn painting (15 x 15 cms)',	
    review: 'Good product',	
   rate: 4,	
  },	
  {	
    id: '45678901-23e4-5678-9a23-123456789012',	
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',	
    name: 'worsted board ',	
    description: 'The "nierikas" are important ritual and spiritual art objects in the Huichol culture. They are also known as "tablas de estambre" in Spanish.',	
    price: 520000,	
    category: 'Huichol Art Figures',	
    image_url: 'https://nierika.com.mx/wp-content/uploads/2024/02/ahc-00511-300x300.jpg',	
    type: 'worsted board  (60x 60 cms)',	
    review: 'Good product',	
   rate: 4,	
  },	
  {	
    id: '56789012-34e5-6789-9a23-123456789012',	
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',	
    name:'Huichol Art Backpack ',	
    description: 'Huichol art yarn backpacks are traditional handcrafted pieces of the Huichol culture, an indigenous ethnic group that inhabits the mountainous region of the Sierra Madre Occidental in Mexico.',	
    price: 70000,	
    category: 'Accessories',	
    image_url: 'https://nierika.com.mx/wp-content/uploads/2024/03/ahar-00713-300x300.jpg.',	
    type: 'Backpack',	
    review: 'Good product',	
   rate: 4,	
  },	
  {	
    id: '67890123-45e6-7890-9a23-123456789012',	
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',	
    name: 'Beads bracelet : Huichol ',	
    description: 'These bracelets stand out for their vibrant colors and intricate designs, often representing traditional symbols, elements of nature or spiritual motifs significant to the Huichol culture.',	
    price: 30000,	
    category: 'Accessories',	
    image_url: 'https://nierika.com.mx/wp-content/uploads/2024/04/ahar-00480-300x300.jpg',	
    type: 'Beads bracelet',	
    review: 'Good product',	
   rate: 4,	
  },	
  {	
    id: '78901234-56e7-8901-9a23-123456789012',	
    artisan_id: '410544b2-4001-4271-9855-fec4b6a6442a',	
    name: 'Microchaquira earrings : Huichol',	
    description: 'Huichol art microchaquira earrings; handmade artisan jewelry pieces that reflect the rich tradition and artistic skill of the Huichol culture.',	
    price: 25000,	
    category: 'Accessories',	
    image_url: 'https://nierika.com.mx/wp-content/uploads/2024/04/ahar-00480-300x300.jpg',	
    type: 'Earrings',	
    review: 'Good product',	
   rate: 4,	
  },	
];	




const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[6].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  artisans,
  handcrafts,
  invoices,
  customers,
  revenue,
};
