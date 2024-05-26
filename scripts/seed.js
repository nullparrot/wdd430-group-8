
require('dotenv').config();
const { Client } = require('pg');
const bcrypt = require('bcrypt');
const {
  artisans,
  products,
  reviews,
} = require('../app/lib/placeholder-data.js');  // Corrected path

async function dropTables(client) {
  try {
    await client.query(`
      DROP TABLE IF EXISTS reviews;
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS artisans;
    `);
    console.log(`Dropped existing tables`);
  } catch (error) {
    console.error('Error dropping tables:', error);
    throw error;
  }
}

async function createTables(client) {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS artisans (
        id SERIAL PRIMARY KEY,
        fname VARCHAR(100),
        lname VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        password VARCHAR(100)
      );
    `);
    console.log(`Created "artisans" table`);

    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100),
        description VARCHAR(255),
        price DECIMAL(10,2),
        category VARCHAR(45),
        image_url VARCHAR(100),
        artisan_id INT,
        FOREIGN KEY (artisan_id) REFERENCES artisans(id)
      );
    `);
    console.log(`Created "products" table`);

    await client.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        body TEXT,
        product_id INT,
        FOREIGN KEY (product_id) REFERENCES products(id)
      );
    `);
    console.log(`Created "reviews" table`);
  } catch (error) {
    console.error('Error creating tables:', error);
    throw error;
  }
}

async function seedArtisans(client) {
  try {
    const insertedArtisans = await Promise.all(
      artisans.map(async (artisan) => {
        const hashedPassword = await bcrypt.hash(artisan.password, 10);
        const existingArtisan = await client.query(`
          SELECT id, email FROM artisans WHERE email = $1;
        `, [artisan.email]);

        if (existingArtisan.rows.length > 0) {
          return existingArtisan.rows[0];
        } else {
          const result = await client.query(`
            INSERT INTO artisans (fname, lname, email, password)
            VALUES ($1, $2, $3, $4)
            RETURNING id, email;
          `, [artisan.fname, artisan.lname, artisan.email, hashedPassword]);
          return result.rows[0];
        }
      })
    );

    console.log(`Seeded ${insertedArtisans.length} artisans`);

    // Debug: log the insertedArtisans array
    console.log('Inserted artisans:', insertedArtisans);

    return insertedArtisans;
  } catch (error) {
    console.error('Error seeding artisans:', error);
    throw error;
  }
}

async function seedProducts(client, insertedArtisans) {
  try {
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        const artisan = insertedArtisans.find(a => a.email === product.artisan_email);

        // Debug: log the current product and the found artisan
        console.log('Product:', product);
        console.log('Found artisan:', artisan);

        if (!artisan) {
          throw new Error(`Artisan with email ${product.artisan_email} not found`);
        }
        const result = await client.query(`
          INSERT INTO products (title, description, price, category, image_url, artisan_id)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING id;
        `, [product.title, product.description, product.price, product.category, product.image_url, artisan.id]);
        return {
          ...result.rows[0],
          title: product.title,
          description: product.description,
        };
      })
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return insertedProducts;
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedReviews(client, insertedProducts) {
  try {
    const insertedReviews = await Promise.all(
      reviews.map(async (review) => {
        const product = insertedProducts[review.product_index];
        if (!product) {
          throw new Error(`Product with index ${review.product_index} not found`);
        }
        const result = await client.query(`
          INSERT INTO reviews (name, body, product_id)
          VALUES ($1, $2, $3)
          RETURNING id;
        `, [review.name, review.body, product.id]);
        return result.rows[0];
      })
    );

    console.log(`Seeded ${insertedReviews.length} reviews`);

    return insertedReviews;
  } catch (error) {
    console.error('Error seeding reviews:', error);
    throw error;
  }
}

async function main() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  await client.connect();

  await dropTables(client);
  await createTables(client);

  const insertedArtisans = await seedArtisans(client);
  const insertedProducts = await seedProducts(client, insertedArtisans);
  await seedReviews(client, insertedProducts);

  await client.end();
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err);
});
