const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const categories = [
    {
      id: 1,
      title: "Arcade",
      slug: "arcade",
      image: "arcade.jpg",
      core: "arcade",
    },
    {
      id: 2,
      title: "Atari",
      slug: "atari",
      image: "atari.jpg",
      core: "atari2600",
    },
    {
      id: 3,
      title: "MAME 2003",
      slug: "mame-2003",
      image: "mame.jpg",
      core: "mame2003",
    },
    {
      id: 4,
      title: "SNES",
      slug: "nes",
      image: "super-nintendo.jpg",
      core: "snes",
    },
    {
      id: 5,
      title: "Nintendo 64",
      slug: "nintendo-64",
      image: "n64.jpg",
      core: "n64",
    },
    {
      id: 6,
      title: "PlayStation",
      slug: "playstation",
      image: "playstation.jpg",
      core: "psx",
    },
    {
      id: 7,
      title: "SEGA",
      slug: "sega-mega-drive",
      image: "sega.jpg",
      core: "segaMD",
    },
  ];

  const games = [
    {
      id: 1,
      title: "Cadillacs and Dinosaurs",
      slug: "cadillacs-and-dinosaurs",
      image: "cadillacs-and-dinosaurs.jpg",
      description:
        "A beat 'em up arcade classic where players battle dinosaur riders in a post-apocalyptic world. Features colorful graphics and cooperative gameplay.",
      game_url: "dino.zip",
      published: true,
      categories: [1],
    },
    {
      id: 2,
      title: "Asterix and the Great Rescue",
      slug: "asterix-and-the-great-rescue",
      image: "asterix-and-the-great-rescue.jpg",
      description:
        "Join Asterix and Obelix in this side-scrolling adventure to rescue Getafix. Features classic Sega Mega Drive platforming and humor from the beloved comics.",
      game_url: "asterix-and-the-great-rescue.zip",
      published: true,
      categories: [7],
    },
    {
      id: 3,
      title: "Disney's Hercules",
      slug: "disney-s-hercules",
      image: "disney-s-hercules.jpg",
      description:
        "Disney's action platformer following Hercules' journey from zero to hero. Features fluid animation and memorable characters from the animated film.",
      game_url: "your-game-here.zip",
      published: false,
      categories: [1],
    },
    {
      id: 4,
      title: "Biaofeng Zhanjing",
      slug: "biaofeng-zhanjing",
      image: "biaofeng-zhanjing.jpg",
      description:
        "A fast-paced martial arts arcade game with unique Chinese warriors and special moves. Known for its challenging gameplay and distinctive art style.",
      game_url: "your-game-here.zip",
      published: false,
      categories: [1],
    },
    {
      id: 5,
      title: "Street Fighter II",
      slug: "street-fighter-ii",
      image: "street-fighter-ii.jpg",
      description:
        "The legendary fighting game that defined the genre. Choose from eight world warriors, each with their own special moves and fighting styles.",
      game_url: "street-fighter-5.zip",
      published: true,
      categories: [4],
    },
    {
      id: 6,
      title: "Captain Commando",
      slug: "captain-commando",
      image: "captain-commando.jpg",
      description:
        "A sci-fi beat 'em up where a futuristic super cop fights crime. Features four playable characters and power-ups to collect.",
      game_url: "captcomm.zip",
      published: true,
      categories: [1],
    },
    {
      id: 7,
      title: "Super Mario",
      slug: "super-mario-64",
      image: "super-mario-64.jpg",
      description:
        "Jump, run, and collect coins through colorful levels in the Mushroom Kingdom.",
      game_url: "super-mario-bros.zip",
      published: true,
      categories: [4],
    },

    {
      id: 8,
      title: "Automobili Lamborghini",
      slug: "automobili-lamborghini",
      image: "automobili-lamborghini.jpg",
      description:
        "High-speed racing game featuring authentic Lamborghini vehicles and tracks. Experience the thrill of driving exotic supercars.",
      game_url: "automobili-lamborghini.zip",
      published: true,
      categories: [5],
    },
    {
      id: 9,
      title: "Centre Court Tennis",
      slug: "centre-court-tennis",
      image: "centre-court-tennis.jpg",
      description:
        "A realistic tennis simulation for the N64. Features multiple game modes, tournaments, and precise ball physics.",
      game_url: "your-game-here.zip",
      published: false,
      categories: [5],
    },
    {
      id: 10,
      title: "Rayman 2 - The Great Escape",
      slug: "rayman-2-the-great-escape",
      image: "rayman-2-the-great-escape.jpg",
      description:
        "The beloved platforming hero returns in this 3D adventure. Explore magical worlds while collecting Lums and freeing imprisoned creatures.",
      game_url: "rayman-2-the-great-escape.zip",
      published: true,
      categories: [5],
    },
    {
      id: 11,
      title: "X-Men - Children Of The Atom",
      slug: "x-men-children-of-the-atom",
      image: "x-men-children-of-the-atom.jpg",
      description:
        "Marvel's mutant heroes clash in this arcade fighting game. Features comic-accurate special moves and stunning animations.",
      game_url: "xmcota.zip",
      published: true,
      categories: [1],
    },
    {
      id: 12,
      title: "Teenage Mutant Hero Turtles",
      slug: "teenage-mutant-hero-turtles",
      image: "teenage-mutant-hero-turtles.jpg",
      description:
        "Join the pizza-loving heroes in this classic arcade beat 'em up.",
      game_url: "teenage-mutant-hero-turtles.zip",
      published: false,
      categories: [1],
    },
    {
      id: 13,
      title: "Sonic The Hedgehog",
      slug: "sonic-the-hedgehog",
      image: "sonic-the-hedgehog.jpg",
      description:
        "SEGA's speedy mascot races through colorful zones collecting rings. A classic known for its fast-paced gameplay and catchy music.",
      game_url: "sonic-the-hedgehog.zip",
      published: true,
      categories: [7],
    },

    {
      id: 14,
      title: "Super Mario Kart",
      slug: "super-mario-kart",
      image: "super-mario-kart.jpg",
      description:
        "A classic kart racing game featuring beloved Nintendo characters.",
      game_url: "super-mario-kart.zip",
      published: true,
      categories: [4],
    },

    {
      id: 14,
      title: "Super Mario Kart",
      slug: "super-mario-kart",
      image: "super-mario-kart.jpg",
      description:
        "A classic kart racing game featuring beloved Nintendo characters.",
      game_url: "super-mario-kart.zip",
      published: true,
      categories: [4],
    },

    {
      id: 15,
      title: "Legend of the Zelda",
      slug: "legend-of-the-zelda",
      image: "legend-of-the-zelda.jpg",
      description:
        "Pay tribute to the classic by playing the very first Zelda game! Explore the huge overworld as a young boy in The Legend of Zelda!",
      game_url: "legend-of-the-zelda.zip",
      published: true,
      categories: [4],
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        id: category.id,
      },
      update: {
        title: category.title,
        image: category.image,
        core: category.core,
        slug: category.slug,
      },
      create: {
        id: category.id,
        title: category.title,
        image: category.image,
        core: category.core,
        slug: category.slug,
      },
    });
  }

  for (const game of games) {
    await prisma.game.upsert({
      where: {
        id: game.id,
      },
      update: {
        title: game.title,
        slug: game.slug,
        image: game.image,
        description: game.description,
        game_url: game.game_url,
        published: game.published,
        categories: {
          set: game.categories.map((categoryId) => ({ id: categoryId })),
        },
      },
      create: {
        id: game.id,
        title: game.title,
        slug: game.slug,
        image: game.image,
        description: game.description,
        game_url: game.game_url,
        published: game.published,
        categories: {
          connect: game.categories.map((categoryId) => ({ id: categoryId })),
        },
      },
    });
  }
}

//   const password = await bcrypt.hash("password", 12);
//   const email = "admin@admin.com";

//   const user = await prisma.user.upsert({
//     where: { email: email },
//     update: {},
//     create: {
//       name: "Admin",
//       email: email,
//       password: password,
//       role: "admin",
//     },
//   });
// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
