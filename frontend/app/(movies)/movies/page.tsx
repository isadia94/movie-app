import SecondaryHeader from "../../SecondaryHeader";
import Movies from "./Movies";
import { useState } from "react";

export default function Page() {
  return (
    <div className="p-4">
      <SecondaryHeader placeholder="Search Movie..." setSearch="" />
      <div className="mt-8">
        <h1 className="text-xl">Movies</h1>
      </div>

      <div>
        {/* @ts-ignore */}
        <Movies />
      </div>
    </div>
  );
}
