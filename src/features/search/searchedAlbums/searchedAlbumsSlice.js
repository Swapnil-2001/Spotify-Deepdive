import { createSlice } from "@reduxjs/toolkit";

import { getSearchedAlbums, setSelectedAlbum } from "./searchedAlbumsFunctions";

const searchedAlbumsSlice = createSlice({
  name: "searchedAlbums",
  initialState: {
    selectedAlbum: null,
    selectedAlbumLoading: false,
    searchedAlbums: [],
    searchedAlbumsLoading: false,
  },
  reducers: {
    removeSelectedAlbum: (state) => ({
      ...state,
      selectedAlbum: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSelectedAlbum.pending, (state) => ({
        ...state,
        selectedAlbumLoading: true,
      }))
      .addCase(setSelectedAlbum.rejected, (state) => ({
        ...state,
        selectedAlbum: null,
        selectedAlbumLoading: false,
      }))
      .addCase(setSelectedAlbum.fulfilled, (state, action) => ({
        ...state,
        selectedAlbum: action.payload,
        selectedAlbumLoading: false,
      }))
      .addCase(getSearchedAlbums.pending, (state) => ({
        ...state,
        searchedAlbumsLoading: true,
      }))
      .addCase(getSearchedAlbums.rejected, (state) => ({
        ...state,
        searchedAlbumsLoading: false,
        searchedAlbums: [],
      }))
      .addCase(getSearchedAlbums.fulfilled, (state, action) => ({
        ...state,
        searchedAlbumsLoading: false,
        searchedAlbums: action.payload,
      }));
  },
});

export const { removeSelectedAlbum } = searchedAlbumsSlice.actions;

export default searchedAlbumsSlice.reducer;
