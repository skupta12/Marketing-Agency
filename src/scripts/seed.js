const { db } = require("@vercel/postgres");
const { blogs, portfolios } = require("../lib/createTablesForFetch");

async function seedBlog(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS blogs (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            src VARCHAR(255) NOT NULL,
            label VARCHAR(255) NOT NULL,
            text VARCHAR(255) NOT NULL,
            date VARCHAR(255) NOT NULL
        );
      `;

    console.log(`Created "blog" table`);

    // Insert data into the "blog" table

    const insertedBlog = await Promise.all(
      blogs.map(
        (blog) => client.sql`
          INSERT INTO blogs (id, src, label, text, date)
          VALUES (${blog.id}, ${blog.src}, ${blog.label}, ${blog.text}, ${blog.date})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedBlog.length} blogs`);

    return {
      createTable,
      blogs: insertedBlog,
    };
  } catch (error) {
    console.error("Error seeding blog:", error);
    throw error;
  }
}


main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});

async function seedPortfolio(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS portfolios (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            src VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            href VARCHAR(255) NOT NULL
        );
      `;

    console.log(`Created "portfolio" table`);

    // Insert data into the "portfolio" table

    const insertedPortfolio = await Promise.all(
      portfolios.map(
        (portfolio) => client.sql`
          INSERT INTO portfolios (id, src, title, href)
          VALUES (${portfolio.id}, ${portfolio.src}, ${portfolio.title}, ${portfolio.href})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedPortfolio.length} portfolio items`);

    return {
      createTable,
      blogs: insertedPortfolio,
    };
  } catch (error) {
    console.error("Error seeding portfolio:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedBlog(client);
  await seedPortfolio(client);

  await client.end();
}