import { createSlice } from "@reduxjs/toolkit";

import {
  getArtistTopTracks,
  getSearchedArtists,
} from "./searchedArtistsFunctions";

const searchedArtistsSlice = createSlice({
  name: "searchedArtists",
  initialState: {
    selectedArtist: null,
    selectedArtistLoading: false,
    searchedArtists: [],
    searchedArtistsLoading: false,
    artistTopTracks: [],
    artistTopTracksLoading: false,
    artistAlbums: [],
    artistAlbumsLoading: false,
    relatedArtists: [],
    relatedArtistsLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedArtists.pending, (state) => ({
        ...state,
        searchedArtistsLoading: true,
      }))
      .addCase(getSearchedArtists.rejected, (state) => ({
        ...state,
        searchedArtists: [],
        searchedArtistsLoading: false,
      }))
      .addCase(getSearchedArtists.fulfilled, (state, action) => ({
        ...state,
        searchedArtists: action.payload,
        searchedArtistsLoading: false,
      }))
      .addCase(getArtistTopTracks.pending, (state) => ({
        ...state,
        artistTopTracksLoading: true,
      }))
      .addCase(getArtistTopTracks.rejected, (state) => ({
        ...state,
        artistTopTracks: [],
        artistTopTracksLoading: false,
      }))
      .addCase(getArtistTopTracks.fulfilled, (state, action) => ({
        ...state,
        artistTopTracks: action.payload,
        artistTopTracksLoading: false,
      }));
  },
});

export default searchedArtistsSlice.reducer;
