import Disqus from "@/components/Disqus";
import GameEmulator from "@/components/GameEmulator";
import { getGameBySlug } from "@/lib/gameQueries";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  // Await fetching of game data before accessing properties
  const game = await getGameBySlug(params.slug);
  const title = game
    ? `${game.title} - Retro King`
    : "Retro King - Free Retro Games";
  const description = game
    ? game.description
    : "Discover the best free Retro Games";

  return {
    title,
    description,
  };
}

export default async function Page({ params }) {
  // Fetch game data based on the slug
  const game = await getGameBySlug(params.slug);

  // If no game data is found, return a not-found component
  if (!game) {
    return (
      <div className="flex items-center justify-center text-xl text-accent uppercase h-screen">
        <span className="font-sans mb-20"> Error: Page not found</span>
      </div>
    );
  }

  return (
    <div className="mb-8">
      {/* Breadcrumb navigation */}
      <nav className="rounded-md w-full mb-4">
        <ol className="list-reset flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li>
            <a href={`/${game.categories[0]?.title.toLowerCase()}`}>
              {game.categories[0]?.title}
            </a>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li>
            <span className="text-gray-500">{game.title}</span>
          </li>
        </ol>
      </nav>

      {/* Game emulator component */}
      <GameEmulator game={game} />
      <h3 className="font-display text-3xl mb-2 mt-12">Discussions</h3>
      <hr className="border-accent" />

      {/* Disqus comments section with Suspense loader */}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center min-h-[100px] space-y-2">
            <div className="w-9 h-9 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-blue-500 font-medium">
              Loading comments...
            </span>
          </div>
        }
      >
        <Disqus
          url={`${process.env.NEXT_WEBSITE_URL}/game/${game.slug}`}
          identifier={game.id}
          title={game.title}
        />
      </Suspense>
    </div>
  );
}
