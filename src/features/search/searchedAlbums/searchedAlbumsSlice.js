import { createSlice } from "@reduxjs/toolkit";

import { getSearchedAlbums } from "./searchedAlbumsFunctions";

const searchedAlbumsSlice = createSlice({
  name: "searchedAlbums",
  initialState: {
    searchedAlbums: [],
    searchedAlbumsLoading: false,
  },
  extraReducers: (builder) => {
    builder
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

export default searchedAlbumsSlice.reducer;
