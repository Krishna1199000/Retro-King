"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative flex-1 max-w-md mx-auto ">
      <div className="flex gap-2 items-center justify-center w-full rounded-[24px] bg-main border border-accent px-3 h-8">
        <SearchIcon className="text-white w-4 h-4 self-center" />
        <input
          className="w-full h-full bg-main border-none outline-none"
          type="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search games... (eg: Mario)"
        />
      </div>
    </form>
  );
}
