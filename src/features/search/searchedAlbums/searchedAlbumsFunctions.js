import { createAsyncThunk } from "@reduxjs/toolkit";

import spotify from "../../../utils/functions";

export const getSearchedAlbums = createAsyncThunk(
  "searchedAlbums/getSearchedAlbums",
  async (searchTerm) => {
    try {
      const searchedAlbums = await spotify.searchAlbums(searchTerm);
      return searchedAlbums.albums?.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching album search results. ",
        error
      );
    }
  }
);
