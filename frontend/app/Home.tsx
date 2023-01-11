import Image from "next/image";

import Link from "next/link";
import Banner from "./Banner";
import MoviesList from "./MoviesList";
import TvList from "./TvList";

function Home() {
  return (
    <div className="h-full pt-10 px-4 bg-white">
      <Banner />
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="font-medium ">Movies</p>
          <Link href="/movies" className="text-xs text-gray-500">
            See all
          </Link>
        </div>
        <hr className="border-gray-400 border-[0.02px]" />
      </div>
      {/*@ts-ignore*/}
      <MoviesList />
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="font-medium ">Tv Shows</p>
          <Link href="/tv-shows" className="text-xs text-gray-500">
            See all
          </Link>
        </div>
        <hr className="border-gray-400 border-[0.02px]" />
      </div>
      {/*@ts-ignore*/}
      <TvList />
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="font-medium ">Trending</p>
          <Link href="/" className="text-xs text-gray-500">
            See all
          </Link>
        </div>
        <hr className="border-gray-400 border-[0.02px]" />
      </div>
      {/*@ts-ignore*/}
      <TvList />
    </div>
  );
}

export default Home;
