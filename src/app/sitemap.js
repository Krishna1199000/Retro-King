// import { getAllGames } from "@/lib/gameQueries";

// export const revalidate = 60 * 60; // 1 hour
// export default async function sitemap() {
//   const games = await getAllGames();

//   const items = games.map((game) => ({
//     url: `${process.env.NEXT_WEBSITE_URL}/game/${game.slug}`,
//     lastmodified: game.created_at,
//     changefreq: "monthly",
//     priority: 0.6,
//   }));

//   return [
//     {
//       url: `${process.env.NEXT_WEBSITE_URL}/`,
//       lastmodified: new Date().toISOString(),
//       changefreq: "weekly",
//       priority: 1.0,
//     },

//     {
//       url: `${process.env.NEXT_WEBSITE_URL}/category`,
//       lastmodified: new Date().toISOString(),
//       changefreq: "weekly",
//       priority: 1.0,
//     },

//     ...items,
//   ];
// }
