import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchedVideoSlice from "./searchedVideoSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchedVideo: searchedVideoSlice,
    chat: chatSlice,
  },
});

export default store;
