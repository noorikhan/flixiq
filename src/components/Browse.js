import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
      
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - MovieList * n
          - Cards * n

      */}

      <MainContainer />
    </div>
  );
};

export default Browse;
