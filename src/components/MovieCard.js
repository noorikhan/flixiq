import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="pr-4 w-36">
      <img alt="movie poster" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
