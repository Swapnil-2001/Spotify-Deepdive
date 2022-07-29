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

export const setSelectedAlbum = createAsyncThunk(
  "searchedAlbums/setSelectedAlbum",
  async (albumId) => {
    try {
      const selectedAlbum = await spotify.getAlbum(albumId);
      return selectedAlbum;
    } catch (error) {
      console.error(
        "An error occurred while fetching the desired album. ",
        error
      );
    }
  }
);
