import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllGames() {
  return await prisma.game.findMany({
    where: {
      published: true,
      game_url: {
        not: "your-game-here.zip",
      },
    },
  });
}

export async function getGamesByCategory(categorySlug, page = 1) {
  const ITEMS_PER_PAGE = 15;
  const skip = (page - 1) * ITEMS_PER_PAGE;

  const [games, totalCount] = await Promise.all([
    prisma.game.findMany({
      where: {
        categories: {
          some: {
            slug: categorySlug,
          },
        },
        published: true,
      },
      skip,
      take: ITEMS_PER_PAGE,
    }),

    prisma.game.count({
      where: {
        categories: {
          some: {
            slug: categorySlug,
          },
        },
        published: true,
      },
    }),
  ]);

  return {
    games,
    totalCount,
    totalPages: Math.ceil(totalCount / ITEMS_PER_PAGE),
    currentPage: page,
  };
}

export async function getGameBySlug(slug) {
  return await prisma.game.findUnique({
    where: {
      slug: slug,
    },
    include: {
      categories: true,
    },
  });
}

export async function getGamesBySelectedCategories(categoryIds) {
  return await prisma.category.findMany({
    where: {
      id: { in: categoryIds },
      games: {
        some: {
          published: true,
        },
      },
    },

    select: {
      title: true,
      slug: true,
      games: {
        where: {
          published: true,
        },
        take: 4,

        select: {
          id: true,
          title: true,
          slug: true,
          image: true,
          game_url: true,
          description: true,
          created_at: true,
        },
      },
    },
  });
}

export async function getGamesByCategoryId(categoryId) {
  return await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    select: {
      title: true,
      slug: true,
      games: {
        where: {
          published: true,
        },
        take: 4,
      },
    },
  });
}

export async function getGameCategories() {
  return await prisma.category.findMany({});
}

export async function getCategoryMenu() {
  return await prisma.category.findMany({
    include: {
      games: true,
    },
  });
}

export async function getSearchResults(params) {
  // Don't search if the term is too short
  // if (params.length < 2) {
  //   return [];
  // }

  return await prisma.game.findMany({
    where: {
      AND: [
        {
          title: {
            contains: params,
            mode: "insensitive",
          },
        },
        {
          published: true,
        },
      ],
    },
    orderBy: {
      title: "asc", // Alphabetical ordering makes results easier to scan
    },
    take: 100,
  });
}
