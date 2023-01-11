import Image from "next/image";
import { connectToDatabase } from "../../../lib/mongodb";
import { Movie } from "../../../typings";

const fetchMovies = async () => {
  const { db } = await connectToDatabase();

  const movies: Movie[] = await db
    .collection("movies")
    .find({})
    .sort()
    .limit(20)
    .toArray();

  return movies;
};

async function Movies() {
  const movies = await fetchMovies();
  return (
    <div className="mt-5 grid-card mx-auto max-w-full">
      {movies.map((movie) => (
        <div key={movie._id} className="mt-4">
          <div className="relative w-[200px] h-[280px] rounded-md hover:scale-105 transition duration-150 ease-in">
            <Image className="rounded-md" src={movie.image} alt="poster" fill placeholder="blur" loading="lazy" blurDataURL="color" />
          </div>
          <p className="text-sm">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
