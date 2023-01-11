"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function Header() {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.length > 0) {
    }
  }, []);

  return (
    <div className="bg-white px-6 h-[94px] flex items-center space-x-1">
      <MagnifyingGlassIcon className="h-5" />
      <input
        type="text"
        placeholder="Search Movie, Tv Show .........."
        className="px-2 py-4 placeholder:text-xs flex-1 outline-none"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div className="flex items-center space-x-2">
        <p className="flex flex-col text-sm text-orange-600 font-bold">
          <span className="text-xs font-normal text-gray-500 ">Hello,</span>
          Brian Lusigi
        </p>
        <div className="relative rounded-full  h-[40px] w-[40px]">
          <Image
            src="/profile.jpg"
            alt="profile"
            fill
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
