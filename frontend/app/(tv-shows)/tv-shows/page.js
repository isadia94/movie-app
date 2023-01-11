"use client";

import { useState, useEffect } from "react";
import SecondaryHeader from "../../SecondaryHeader";
import Tv from "./Tv";
import axios from "axios";

function TvPage() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });

  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [isGenreOpen, setIsGenreOpen] = useState(false);

  function handleClick() {
    setFilterGenre(filterGenre.push("Action"));
  }

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `api/movies?page=${page}&sort=${sort.sort},${
          sort.order
        }&genre=${filterGenre.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllMovies();
  }, [sort, filterGenre, page, search]);

  return (
    <div className="p-4">
      <SecondaryHeader
        placeholder="Search Tv..."
        setSearch={(search) => setSearch(search)}
      />
      <div className="mt-8">
        <h1 className="text-xl">Tv-Shows</h1>
      </div>

      <div className="mt-4 flex space-x-2">
        <div className="relative">
          <button
            onClick={() => setIsGenreOpen(!isGenreOpen)}
            className="bg-orange-600  w-[100px] rounded-md text-white text-sm font-bold py-[10px]"
          >
            Genre
          </button>
          {isGenreOpen && (
            <ul className="absolute -bottom-32  text-xs  z-30 bg-black text-white grid grid-cols-3 w-max gap-4 p-4">
              <p onClick={handleClick}>Action</p>
              <li>Action</li>
              <li>Action</li>
              <li>Action</li>
              <li>Action</li>
              <li>Action</li>
              <li>Action</li>
              <li>Action</li>
            </ul>
          )}
        </div>

        <button
          onClick={() => setIsGenreOpen(false)}
          className="bg-orange-600  w-[100px] rounded-md text-white text-sm font-bold py-[10px]"
        >
          Year
        </button>
        <button className="bg-orange-600  w-[100px] rounded-md text-white text-sm font-bold py-[10px]">
          Quality
        </button>
      </div>

      <div>
        {/* @ts-ignore */}
        <Tv movies={obj.movies ? obj.movies : []} />
      </div>
    </div>
  );
}

export default TvPage;
