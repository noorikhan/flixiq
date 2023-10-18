import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggesions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);

  if (!movieName) return null;

  return (
    <div className="bg-black bg-opacity-90 m-6 px-12 text-white">
      {movieName.map((name, index) => (
        <MovieList title={name} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggesions;
