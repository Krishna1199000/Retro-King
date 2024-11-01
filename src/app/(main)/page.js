import GameCategory from "@/components/GameCategory";
import CategorySlider from "@/components/Sliders/CategorySlider";
import HeroSlider from "@/components/Sliders/HeroSlider";
import {
  getGameCategories,
  getGamesByCategoryId,
  getGamesBySelectedCategories,
} from "@/lib/gameQueries";
import { Gamepad } from "lucide-react";

export default async function Home() {
  // const allCategories = await getGameCategories();
  // const category = await getGamesByCategoryId(5);

  const [allCategories, category] = await Promise.all([
    getGameCategories(),
    // getGamesByCategoryId(5),
  ]);

  const selectedCategories = [1, 5];

  const multipleCategories = await getGamesBySelectedCategories(
    selectedCategories
  );

  return (
    <>
      <HeroSlider />
      <CategorySlider categories={allCategories} />
      <div className="flex justify-center items-center gap-4 shadow-xl">
        <h1 className="mt-6 md:mt-16  uppercase font-logo text-center text-2xl md:text-3xl mb-4">
          Most Popular <Gamepad className="inline-block w-12  h-12 ml-2 " />
        </h1>
      </div>
      <GameCategory category={multipleCategories[0]} />
      <GameCategory category={multipleCategories[1]} />
    </>
  );
}
