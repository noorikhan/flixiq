import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const url = "https://api.themoviedb.org/3/movie/now_playing?&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzA3NmQ0YWE0YTdjYzc1OTZiMmU4NTY4ZDc2Njc5NiIsInN1YiI6IjY1MmJmNDJmZjI4ODM4MDJhMzI4MmM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JyxLqYVOzD-4-aK9XRaQCzRpip5sIktPClIcJ0xdcsM",
      },
    };

    const response = await fetch(url, options);
    const movies = await response.json();
    dispatch(getNowPlayingMovies(movies.results));
    console.log(movies.results);
  }
};

export default useNowPlayingMovies;
