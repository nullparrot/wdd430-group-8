const { db } = require('@vercel/postgres');
const {
  artisans,
  handcrafts,
  reviews
} = require('../app/lib/alt-placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedArtisans(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "artisans" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS artisans (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        fname VARCHAR(45) NOT NULL,
        lname VARCHAR(45) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "artisans" table`);

    // Insert data into the "artisans" table
    const insertedArtisans = await Promise.all(
      artisans.map(async (artisan) => {
        const hashedPassword = await bcrypt.hash(artisan.password, 10);
        return client.sql`
        INSERT INTO artisans (id, fname, lname, email, password)
        VALUES (${artisan.id}, ${artisan.fname}, ${artisan.lname}, ${artisan.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedArtisans.length} artisans`);

    return {
      createTable,
      artisans: insertedArtisans,
    };
  } catch (error) {
    console.error('Error seeding artisans:', error);
    throw error;
  }
}

async function seedHandcrafts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "handcrafts" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS handcrafts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        artisan_id UUID NOT NULL,
        title VARCHAR(45) NOT NULL,
        description VARCHAR(255) NOT NULL,
        price DECIMAL NOT NULL,
        category VARCHAR(45) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "handcrafts" table`);

    // Insert data into the "handcrafts" table
    const insertedHandcrafts = await Promise.all(
      handcrafts.map(async (handcraft) => {
        return client.sql`
        INSERT INTO handcrafts (id, name, email, password)
        VALUES (${handcraft.id}, ${handcraft.name}, ${handcraft.description}, 
                ${handcraft.price}, ${handcraft.category}, ${handcraft.image_url})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedHandcrafts.length} handcrafts`);

    return {
      createTable,
      handcrafts: insertedHandcrafts,
    };
  } catch (error) {
    console.error('Error seeding handcrafts:', error);
    throw error;
  }
}

async function seedReviews(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "reviews" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS reviews (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          handcraft_id UUID NOT NULL,
          name VARCHAR(45) NOT NULL,
          rating TINYINT NOT NULL,
          body VARCHAR(255) NOT NULL
        );
      `;
  
      console.log(`Created "handcrafts" table`);
  
      // Insert data into the "handcrafts" table
      const insertedReviews = await Promise.all(
        reviews.map(async (review) => {
          return client.sql`
          INSERT INTO handcrafts (id, name, email, password)
          VALUES (${review.id}, ${review.handcraftId}, ${review.name}, 
                  ${review.rating}, ${review.body})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedReviews.length} handcrafts`);
  
      return {
        createTable,
        handcrafts: insertedHandcrafts,
      };
    } catch (error) {
      console.error('Error seeding handcrafts:', error);
      throw error;
    }
  }

async function main() {
  const client = await db.connect();

  await seedArtisans(client);
  await seedHandcrafts(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
