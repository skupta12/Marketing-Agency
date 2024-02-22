import { unstable_noStore as noStore } from "next/cache";
import { Blog, Portfolio } from "../lib/definitions";
import { sql } from "@vercel/postgres";

export async function fetchBlog() {
  noStore();
  try {
    const data = await sql<Blog>`
      SELECT blogs.id, blogs.src, blogs.label, blogs.text, blogs.date
      FROM blogs
      ORDER BY blogs.date DESC
      LIMIT 6`;

    const latestBlogs = data.rows.map((item) => ({
      ...item,
    }));

    return latestBlogs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function fetchPortfolio() {
  // noStore();
  try {
    const data = await sql<Portfolio>`
      SELECT portfolios.id, portfolios.src, portfolios.title, portfolios.href 
      FROM portfolios`;

    const latestPortfolio = data.rows.map((item) => ({
      ...item
    }))

    return latestPortfolio;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the portfolio items.");
  }
}
