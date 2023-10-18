import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptMovieSuggesions from "./GptMovieSuggesions";
import { LOGIN_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={LOGIN_BG} alt="bg" />
      </div>
      <GptSearchbar />
      <GptMovieSuggesions />
    </div>
  );
};

export default GptSearch;
