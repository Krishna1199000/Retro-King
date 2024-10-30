import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function GameCategory({ category }) {
  return (
    <section className=" mb-16">
      <div className="flex justify-between gap-4 bg-[url('/slide/slide-3.jpg')] bg-cover md:bg-auto bg-top md:bg-left px-2 pt-1 rounded-lg">
        <h2 className="font-display uppercase text-2xl mb-2 flex items-center">
          {category.title}
        </h2>
        <a
          href={`/category/${category.slug}`}
          className="text-sm font-lg hover:underline underline-offset-4"
          aria-label={`View all games in ${category.title} category`}
        >
          View All <ChevronRight className="inline-block w-4 h-4 text-white" />
        </a>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.games.map((game) => (
          <a
            href={`/game/${game.slug}`}
            key={game.id}
            className="group"
            aria-label={`View details of ${game.title}`}
          >
            <div className="overflow-hidden rounded-lg border border-accent-secondary mb-2">
              <Image
                src={`/game/${game.image}`}
                alt={game.title}
                width={400}
                height={400}
                loading="lazy"
                quality={80}
                className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-accent">{category.title}</p>
            <h3 className="font-medium text-lg mb-2">{game.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
