"use client";

import {
  Menu,
  X,
  House,
  Flame,
  LayoutList,
  MapPinHouse,
  BookA,
} from "lucide-react";
import { useState } from "react";
import "../components/css/MobileNav.css"; // Make sure to import the CSS file

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavItems = [
    {
      name: "Home",
      path: "/",
      icon: House,
      slug: null,
    },
    {
      name: "New",
      path: "/new-games",
      icon: Flame,
      slug: "new-games",
    },
    {
      name: "Categories",
      path: "/categories",
      icon: LayoutList,
      slug: "categories",
    },
    {
      name: "About",
      path: "/about",
      icon: BookA,
      slug: "about",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: MapPinHouse,
      slug: "contact",
    },
  ];

  return (
    <>
      {!isOpen ? (
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6" aria-label="Open Mobile Menu" />
        </button>
      ) : (
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <X className="w-6 h-6" aria-label="Close Mobile Menu" />
        </button>
      )}

      {isOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu fixed top-[57px] h-dvh left-0 right-0 z-50 bg-main p-4 lg:hidden"
        >
          <ul className="bg-muted flex flex-col gap-4" role="menu">
            {mobileNavItems.map((item) => (
              <li key={item.name} className="border-accent" role="none">
                <a
                  href={item.path}
                  className="text-md font-medium hover:bg-accent rounded-md flex gap-4 items-center border-b border-accent px-6 py-4"
                  role="menuitem"
                >
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                  <span className="font-sans font-light">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
