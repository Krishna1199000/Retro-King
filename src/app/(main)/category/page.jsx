import { getGameCategories } from "@/lib/gameQueries";
import Image from "next/image";

export default async function Page() {
  const categories = await getGameCategories();

  return (
    <div className=" mb-16">
      <h1 className="font-display text-3xl mb-4">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
        {categories.map((game) => (
          <a key={game.id} href={`/category/${game.slug}`} className="group">
            <div className="overflow-hidden rounded-lg border-accent-secondary border">
              <Image
                src={`/category/${game.image}`}
                alt={game.title}
                width={270}
                height={270}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <h1 className="text-center font-sans text-lg mt-2">{game.title}</h1>
          </a>
        ))}
      </div>
    </div>
  );
}
