import { createSlice } from "@reduxjs/toolkit";

const searchedVideoSlice = createSlice({
  name: "searchedVideo",
  initialState: {},
  reducers: {
    searchedVideos: (state, action) => {
      state = action.payload;
    },
  },
});

export const { searchedVideos } = searchedVideoSlice.actions;
export default searchedVideoSlice.reducer;
