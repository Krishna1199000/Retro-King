import LiveGames from "@/components/LiveGames";
import { getAllGames } from "@/lib/gameQueries";

export default async function Page() {
  const allGames = await getAllGames();
  allGames.sort(() => Math.random() - 0.5);

  return <LiveGames allGames={allGames} />;
}
