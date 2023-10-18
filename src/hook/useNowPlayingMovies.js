import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  useEffect(() => {
    !nowPlayingMovies && getMovies();
  }, []);

  const getMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?&page=1";

    const response = await fetch(url, API_OPTIONS);
    const movies = await response.json();
    dispatch(getNowPlayingMovies(movies.results));
  };
};

export default useNowPlayingMovies;
