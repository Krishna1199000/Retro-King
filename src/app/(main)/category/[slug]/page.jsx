import { getGamesByCategory } from "@/lib/gameQueries";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default async function Page({ params, searchParams }) {
  const page = (await parseInt(searchParams.page)) || 1;
  const { games, totalPages, currentPage } = await getGamesByCategory(
    params.slug,
    page
  );

  return (
    <div className="mb-16 h-screen">
      <h1 className="font-display text-3xl mb-4 capitalize">{params.slug}</h1>
      <nav className="rounded-md w-full">
        <ol className="list-reset flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>

          <li>
            <span className="text-gray-500">
              {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
            </span>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4   gap-4 mb-6 mt-4">
        {games.length === 0 ? (
          <div className="h-[70vh] text-md text-accent mt-4 ">
            No games found in this category.
          </div>
        ) : (
          games.map((game) => (
            <a key={game.id} href={`/game/${game.slug}`} className="group">
              <div className="overflow-hidden rounded-lg border-accent-secondary border">
                <Image
                  src={`/game/${game.image}`}
                  alt={game.title}
                  width={250}
                  height={270}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  loading="lazy"
                  quality={80}
                />
              </div>
              <h1 className=" font-sans text-md mt-2">{game.title}</h1>
              <p className="text-accent text-sm line-clamp-3 overflow-hidden text-ellipsis ">
                {game.description}
              </p>
            </a>
          ))
        )}
      </div>

      {/* CODE FOR PAGINATION */}

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex justify-center items-center space-x-2 mt-8">
            {currentPage > 1 && (
              <a
                href={`/category/${params.slug}?page=${currentPage - 1}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <ChevronLeftIcon className="w-5 h-5 mr-2" />
                Previous
              </a>
            )}
            {[...Array(totalPages).keys()].map((pageNum) => (
              <a
                href={`/category/${params.slug}?page=${pageNum + 1}`}
                key={pageNum + 1}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  currentPage === pageNum + 1
                    ? "text-white bg-primary hover:bg-primary/90"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {pageNum + 1}
              </a>
            ))}

            {currentPage < totalPages && (
              <a
                href={`/category/${params.slug}?page=${currentPage + 1}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </a>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
