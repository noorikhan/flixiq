import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    switchLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { switchLanguage } = configSlice.actions;

export default configSlice.reducer;
