import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearchbar from "./GptSearchbar";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gpt = useSelector((store) => store.gpt);

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {gpt?.showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
      
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - MovieList * n
          - Cards * n

      */}
    </div>
  );
};

export default Browse;
