import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../features/user/userSlice";
import searchedTermSlice from "../features/search/searchedTerm/searchedTermSlice";
import searchedTracksSlice from "../features/search/searchedTracks/searchedTracksSlice";
import searchedAlbumsSlice from "../features/search/searchedAlbums/searchedAlbumsSlice";
import searchedArtistsSlice from "../features/search/searchedArtists/searchedArtistsSlice";

const reducer = {
  user: userSlice,
  searchedTerm: searchedTermSlice,
  searchedTracks: searchedTracksSlice,
  searchedAlbums: searchedAlbumsSlice,
  searchedArtists: searchedArtistsSlice,
};

const store = configureStore({
  reducer,
});

export default store;
