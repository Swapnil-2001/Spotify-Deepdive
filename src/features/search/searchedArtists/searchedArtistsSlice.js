import { createSlice } from "@reduxjs/toolkit";

import {
  getSearchedArtists,
  getArtist,
  getArtistTopTracks,
  getRelatedArtists,
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
  reducers: {
    removeSelectedArtist: (state) => ({
      ...state,
      selectedArtist: null,
      artistTopTracks: [],
      relatedArtists: [],
      artistAlbums: [],
    }),
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
      .addCase(getArtist.pending, (state) => ({
        ...state,
        selectedArtistLoading: true,
      }))
      .addCase(getArtist.rejected, (state) => ({
        ...state,
        selectedArtist: null,
        selectedArtistLoading: false,
      }))
      .addCase(getArtist.fulfilled, (state, action) => ({
        ...state,
        selectedArtist: action.payload,
        selectedArtistLoading: false,
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
      }))
      .addCase(getRelatedArtists.pending, (state) => ({
        ...state,
        relatedArtistsLoading: true,
      }))
      .addCase(getRelatedArtists.rejected, (state) => ({
        ...state,
        relatedArtists: [],
        relatedArtistsLoading: false,
      }))
      .addCase(getRelatedArtists.fulfilled, (state, action) => ({
        ...state,
        relatedArtists: action.payload,
        relatedArtistsLoading: false,
      }));
  },
});

export const { removeSelectedArtist } = searchedArtistsSlice.actions;

export default searchedArtistsSlice.reducer;
