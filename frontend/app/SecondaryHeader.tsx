"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function SecondaryHeader({ placeholder, setSearch }) {
  const [value, setValue] = useState("");
  return (
    <div className="border-b pb-2 border-gray-400">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="logo text-3xl font-bold text-orange-600 border-b-[0.5px]">
            STREMIO
          </h1>
        </Link>

        <div className="flex items-center flex-1 ml-16">
          <MagnifyingGlassIcon className="h-5" />
          <input
            type="text"
            placeholder={placeholder}
            className="px-2 py-4 placeholder:text-xs flex-1 outline-none bg-transparent"
            onChange={({ currentTarget: input }) => setSearch(input.value)}
          />
        </div>
        <div className="ml-4">
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
      </div>
    </div>
  );
}

export default SecondaryHeader;
