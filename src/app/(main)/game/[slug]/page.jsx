import GameEmulator from "@/components/GameEmulator";
import { getGameBySlug } from "@/lib/gameQueries";

export async function generateMetadata({ params }) {
  const game = await getGameBySlug(params.slug);
  const title =
    game?.title + " - Retro King" || "Retro King - Free Retro Games";
  const description = game?.description || "Discover the best free Retro Games";

  return {
    title,
    description,
  };
}

export default async function Page({ params }) {
  const game = await getGameBySlug(params.slug);

  return (
    <div className="mb-8">
      <nav className="rounded-md w-full mb-4">
        <ol className="list-reset flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li>
            <a href={`${game.categories[0]?.title.toLowerCase()}`}>
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

      <GameEmulator game={game} />
    </div>
  );
}
