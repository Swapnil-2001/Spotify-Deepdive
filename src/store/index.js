import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../features/user/userSlice";
import searchedTracksSlice from "../features/searchedTracks/searchedTracksSlice";

const reducer = {
  user: userSlice,
  searchedTracks: searchedTracksSlice,
};

const store = configureStore({
  reducer,
});

export default store;
