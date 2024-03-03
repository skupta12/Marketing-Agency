import { unstable_noStore as noStore } from "next/cache";
import { Blog } from "../lib/definitions";
import { sql } from "@vercel/postgres";

export async function fetchBlog() {
  noStore();
  try {
    const data = await sql<Blog>`
      SELECT blogs.id, blogs.url, blogs.src, blogs.label, blogs.text, blogs.date
      FROM blogs
      ORDER BY blogs.date DESC
      LIMIT 6`;

    const latestBlogs = data.rows.map((item) => ({
      ...item,
    }));

    return latestBlogs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest blog posts.");
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredBlogs(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const blogs = await sql<Blog>`
      SELECT
        blogs.id,
        blogs.url,
        blogs.src,
        blogs.label,
        blogs.text,
        blogs.date
      FROM blogs
      WHERE
      blogs.url::text ILIKE ${`%${query}%`} OR
      blogs.src ILIKE ${`%${query}%`} OR
      blogs.label::text ILIKE ${`%${query}%`} OR
      blogs.text::text ILIKE ${`%${query}%`} OR
      blogs.date::text ILIKE ${`%${query}%`}
      ORDER BY blogs.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return blogs.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch filtered blogs.");
  }
}

export async function fetchBlogPages(query: string) {
  noStore();
  try {
    const count = await sql`
      SELECT COUNT(*)
      FROM blogs
      WHERE
        blogs.src ILIKE ${`%${query}%`} OR
        blogs.label::text ILIKE ${`%${query}%`} OR
        blogs.text::text ILIKE ${`%${query}%`} OR
        blogs.date::text ILIKE ${`%${query}%`}
    `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of blogs.');
  }
}

export async function fetchCurrentPost() {
  noStore();
  try {
    const data = await sql<Blog>`
      SELECT blogs.url, blogs.src, blogs.label, blogs.text
      FROM blogs
      `;

    const currentBlogs = data.rows.map((item) => ({
      ...item,
    }));

    return currentBlogs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the current post.");
  }
}



// export async function fetchPortfolio() {
//   noStore();
//   try {
//     const data = await sql<Portfolio>`
//       SELECT portfolios.id, portfolios.src, portfolios.title, portfolios.href 
//       FROM portfolios`;

//     const latestPortfolio = data.rows.map((item) => ({
//       ...item
//     }))

//     return latestPortfolio;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch the portfolio items.");
//   }
// }
