import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

    const data = await fetch(url, API_OPTIONS);
    const videos = await data.json();

    const filterData = videos.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : videos.results[0];

    dispatch(getTrailerVideo(trailer));
  };
};

export default useTrailerVideo;
