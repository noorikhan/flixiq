import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { searchMovies } from "../utils/gptSlice";

const GptSearchbar = () => {
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    const promise = await fetch(url, API_OPTIONS);
    const response = await promise.json();
    const data = response.results;

    return data;
  };

  const handleSearch = async () => {
    const searchQuery =
      "Act as a Movie Recommendation." +
      searchText.current.value +
      "Give result of only Five Movie names in a single line separated by commas. Ex: Done, Shole, Pherapheri, kal ho na ho, Barish";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      // error handle;
    }

    // Andaz Apna Apna, Bhoot, etc
    const getMovies = gptResult.choices[0].message.content.split(","); //["Andaz Apna Apna", "Bhoot",...]

    // console.log(getMovies);

    //For each movie search in TMDB Api
    const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie)); //[Promise, Promise,...]

    const tmdbResult = await Promise.all(promiseArray);

    dispatch(searchMovies({ movieName: getMovies, movieResults: tmdbResult }));
    // console.log(tmdbResult);
  };

  return (
    <div className="flex justify-center">
      <form
        className="pt-[40%] md:pt-[20%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" px-3 py-2 md:text-2xl w-60 md:w-96"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleSearch}
          className="md:text-2xl bg-red-500 px-3 py-2 "
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
