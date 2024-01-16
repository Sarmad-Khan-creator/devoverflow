import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="flex gap-3 items-center bg-gray-100 px-3 py-1 rounded-md w-[350px]">
      <Image
        src="/assets/icons/search.svg"
        width={28}
        height={28}
        alt="search"
      />
      <Input
        className="outline-none w-full border-none focus-visible:ring-0 bg-gray-50"
        placeholder="search for anything"
      />
    </div>
  );
};

export default GlobalSearch;
