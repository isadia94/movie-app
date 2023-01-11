import Image from "next/image";
import { connectToDatabase } from "../lib/mongodb";
import { Movie } from "../typings";

const fetchSeries = async () => {
  const { db } = await connectToDatabase();

  const series: Movie[] = await db
    .collection("movies")
    .find({ type: "Tv-Show" })
    .sort()
    .limit(20)
    .toArray();

  return series;
};

async function TvList() {
  const series = await fetchSeries();
  return (
    <div className="mt-5 flex space-x-3">
      {series.splice(0, 5).map((serie) => (
        <div key={serie._id}>
          <div className="relative w-[190px] h-[250px]">
            <Image className="" src={serie.image} alt="poster" fill loading="lazy" />
          </div>
          <p>{serie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TvList;
