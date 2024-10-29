import { getCategoryMenu } from "@/lib/gameQueries";
import SideBarNav from "./SideBarNav";

export default async function SibeBar() {
  const categoryMenu = await getCategoryMenu();
  return (
    <aside className="w-64 p-4 hidden lg:flex flex-col">
      <SideBarNav categoryMenu={categoryMenu} />
    </aside>
  );
}
