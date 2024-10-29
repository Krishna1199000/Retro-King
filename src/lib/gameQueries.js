import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCategoryMenu() {
  return await prisma.category.findMany({
    include: {
      games: true,
    },
  });
}

export async function getSearchResults(params) {
  return await prisma.game.findMany({
    where: {
      title: {
        contains: params,
      },
    },
    take: 100,
  });
}
