import SearchResults from "@/components/SearchResults";
import { getSearchResults } from "@/lib/gameQueries";

export default async function Page(req) {
  const searchQuery = await req.searchParams.q;

  let games = [];

  if (searchQuery) {
    games = await getSearchResults(searchQuery);
  }
  return <SearchResults searchQuery={searchQuery} games={games} />;
}
