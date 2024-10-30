"use client";

import { AlignStartVertical, House, Star } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SideBarNav({ categoryMenu }) {
  const activeSegment = usePathname();

  const mainMenuItems = [
    {
      name: "Home",
      icon: House,
      slug: "/",
    },
    {
      name: "New",
      icon: Star,
      slug: "/new-games",
    },
  ];

  return (
    <>
      <div className="text-accent text-xs mb-2 cursor-default">MENU</div>

      <ul className="bg-muted flex flex-col gap-2 mb-6">
        {mainMenuItems.map((item, i) => (
          <a
            href={item.slug}
            key={i}
            className={`text-sm tracking-wide flex gap-2 items-center p-1 px-2 ${
              activeSegment === `${item.slug}`
                ? "active bg-primary rounded-md"
                : "inactive hover:bg-primary rounded-md"
            }`}
          >
            <item.icon className="w-4 h-4 text-accent" />
            {item.name}
          </a>
        ))}
      </ul>

      <div className="text-accent text-xs mb-2 cursor-default">CATEGORIES</div>

      <ul className="bg-muted flex flex-col gap-2 mb-6">
        {categoryMenu.map((item, i) => (
          <li key={i}>
            <a
              href={`/category/${item.slug}`}
              className={`text-sm tracking-wide flex gap-2 items-center p-1 px-1 ${
                activeSegment === `/category/${item.slug}`
                  ? "active bg-primary rounded-md"
                  : "inactive hover:bg-primary rounded-md"
              }`}
            >
              <div className={`categoryIcon ${item.slug}`}>
                {/* <img
                  src={`/icons/${
                    item.slug === "arcade" ? "arcade" : "default"
                  }.svg`}
                /> */}

                {item.slug === "mame-2003" ? (
                  <img src={`/icons/default.svg`} width={24} height={24} />
                ) : (
                  <img src={`/icons/${item.slug}.svg`} width={24} height={24} />
                )}
              </div>
              {item.title}
              <span className="text-accent">({item?.games?.length})</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
