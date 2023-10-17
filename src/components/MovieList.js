import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-6">
      <h1 className="py-3 text-2xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex shrink-0">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
