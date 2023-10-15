import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
