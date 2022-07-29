import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../features/user/userSlice";
import searchedTracksSlice from "../features/search/searchedTracks/searchedTracksSlice";
import searchedAlbumsSlice from "../features/search/searchedAlbums/searchedAlbumsSlice";

const reducer = {
  user: userSlice,
  searchedTracks: searchedTracksSlice,
  searchedAlbums: searchedAlbumsSlice,
};

const store = configureStore({
  reducer,
});

export default store;
