import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function Banner() {
  return (
    <div>
      <div className="relative w-full h-[380px]">
        <div className="absolute h-full w-full bg-black z-10 opacity-40" />
        <div className="absolute top-1/4 z-50 px-10 ">
          <div className="text-white">
            <h1 className="text-5xl font-black max-w-[450px] mb-3">
              Thor: Love & Thunder
            </h1>
            <p className="max-w-[480px] text-xs line-clamp-3">
              Thor's retirement is interrupted by a galactic killer known as
              Gorr the God Butcher, who seeks the extinction of the gods. To
              combat the threat, Thor enlists the help of King Valkyrie, Korg
              and ex-girlfriend Jane Foster, who to Thor's surprise inexplicably
              wields his magical hammer, Mjolnir, as the Mighty Thor.
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-orange-600 btn space-x-5 font-bold">
                Watch
                <PlayCircleIcon className="h-5 ml-2" />
              </button>
              <button className="btn bg-gray-500">Trailer</button>
            </div>
          </div>
        </div>
        <Image
          src="/poster.jpg"
          alt="banner"
          fill
          className="shadow-md shadow-orange-600"
          priority

        />
      </div>
    </div>
  );
}

export default Banner;
