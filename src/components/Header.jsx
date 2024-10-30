import Image from "next/image";
import Search from "./Search";
import { Settings } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="px-4 flex h-14 shrink-0 items-center gap-2">
      <a href="/" className="flex items-center gap-1  ">
        <Image
          src="/logo.svg"
          alt="TheRetroKing"
          width={40.56}
          height={33.8}
          loading="eager"
        />
        <span className="font-logo shadow-lg text-2xl tracking-tighter hidden md:block uppercase">
          Retro King<span className="font-sans text-accent">™</span>
        </span>
      </a>
      <Search />

      <nav className=" flex items-center justify-center gap-4 md:gap-6">
        <a href="#">
          <Settings className="w-5 h-5" />
        </a>
        <MobileNav />
      </nav>
    </header>
  );
}
