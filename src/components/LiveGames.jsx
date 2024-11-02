import Image from "next/image";

export default function LiveGames({ allGames }) {
  return (
    <div className="p-4 mb-16">
      <h1 className="font-display text-3xl mb-2">Live Games</h1>
      <p className="font-sans text-sm md:text-lg text-accent mb-6">
        Dive into the vast collection of popular games that are available right
        now!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allGames.map((game) => (
          <a
            key={game.id}
            href={`/game/${game.slug}`}
            className="group"
            aria-label={`View details of ${game.title}`}
          >
            <div className="overflow-hidden rounded-lg border border-accent-secondary mb-2">
              <Image
                src={`/game/${game.image}`}
                alt={game.title}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <p className="text-accent font-sans text-sm"></p>
            <h1 className=" font-sans text-sm md:text-md mt-2">{game.title}</h1>
          </a>
        ))}
      </div>
    </div>
  );
}
