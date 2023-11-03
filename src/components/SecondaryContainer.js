import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className=" -mt-8 md:-mt-40 lg:-mt-64 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
      </div>
      {/* 
      Movielist - Popular
        MovieCard * n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horro
      */}
    </div>
  );
};

export default SecondaryContainer;
