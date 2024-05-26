const { db } = require('@vercel/postgres');
const { sellers, products, users } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        seller_id UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      )
    `;

    // Insert sample product into the "products" table
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        client.sql`
      INSERT INTO products (seller_id, name, description, price, image_url)
      VALUES (
        ${product.sellerId},
        ${product.name},
        ${product.description},
        ${product.price},
        ${product.imageUrl}
      )
    `;
      }),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error.message);
    throw Error;
  }
}

async function seedSellers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sellers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        seller_thumbnail VARCHAR(255),
        seller_image VARCHAR(255),
        seller_bio TEXT
      )
    `;

    // Insert sample sellers into the "sellers" table
    const insertedSellers = await Promise.all(
      sellers.map(async (seller) => {
        const insertedSeller = await client.sql`
          INSERT INTO sellers (id, name, seller_thumbnail, seller_image, seller_bio)
          VALUES (
            ${seller.id},
            ${seller.name},
            ${seller.sellerThumbnail || null},
            ${seller.sellerImage || null},
            ${seller.sellerBio || null}
          )
        `;

        return insertedSeller[0];
      }),
    );

    console.log(`Seeded ${insertedSellers.length} sellers`);

    return {
      createTable,
      sellers: insertedSellers,
    };
  } catch (error) {
    console.error('Error seeding sellers:', error.message);
    throw error;
  }
}

async function seedReviews(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID,
      username VARCHAR(25) NOT NULL,
      product_id UUID NOT NULL,
      rating INT CHECK (rating >= 1 AND rating <= 5) NOT NULL,
      comment TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    console.log('Reviews table created successfully.');

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding reviews:', error.message);
    throw error;
  }
}

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )
    `;

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES (
            ${user.id || null},  -- Assuming user.id is provided in your data
            ${user.name},
            ${user.email},
            ${hashedPassword}
          )
        `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error.message);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedSellers(client);
  await seedProducts(client);
  await seedReviews(client);
  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
