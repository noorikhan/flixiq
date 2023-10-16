import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { getNowPlayingMovies, getTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
