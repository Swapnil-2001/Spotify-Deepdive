import { createAsyncThunk } from "@reduxjs/toolkit";

import spotify from "../../../utils/functions";

export const getSearchedTracks = createAsyncThunk(
  "searchedTracks/getSearchedTracks",
  async (searchTerm) => {
    try {
      const searchedTracks = await spotify.searchTracks(searchTerm);
      return searchedTracks.tracks?.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching track search results. ",
        error
      );
    }
  }
);
