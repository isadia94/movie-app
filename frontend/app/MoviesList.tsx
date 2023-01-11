import Image from "next/image";
import { connectToDatabase } from "../lib/mongodb";
import { Movie } from "../typings";

const fetchMovies = async () => {
  const { db } = await connectToDatabase();

  const movies: Movie[] = await db
    .collection("movies")
    .find({ type: "Movie" })
    .sort()
    .limit(20)
    .toArray();

  return movies;
};

async function MoviesList() {
  const movies = await fetchMovies();
  return (
    <div className="mt-5 flex space-x-3">
      {movies.splice(0, 5).map((movie) => (
        <div key={movie._id}>
          <div className="relative w-[190px] h-[250px]">
            <Image className="" src={movie.image} alt="poster" fill loading="lazy" />
          </div>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
