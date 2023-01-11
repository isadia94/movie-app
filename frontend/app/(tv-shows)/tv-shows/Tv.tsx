import Image from "next/image";

function Tv({ movies }) {
  return (
    <div className="mt-5 grid-card mx-auto max-w-full">
      {movies.map((movie) => (
        <div key={movie._id} className="mt-4">
          <div className="relative w-[200px] h-[280px] rounded-md hover:scale-105 transition duration-150 ease-in">
            <Image className="rounded-md" src={movie.img} alt="poster" fill />
          </div>
          <p className="text-sm">{movie.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Tv;
