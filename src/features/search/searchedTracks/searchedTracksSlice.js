import { createSlice } from "@reduxjs/toolkit";

import { getSearchedTracks } from "./searchedTracksFunctions";

const searchedTracksSlice = createSlice({
  name: "searchedTracks",
  initialState: {
    searchedTracks: [],
    searchedTracksLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedTracks.pending, (state) => ({
        ...state,
        searchedTracksLoading: true,
      }))
      .addCase(getSearchedTracks.rejected, (state) => ({
        ...state,
        searchedTracksLoading: false,
        searchedTracks: [],
      }))
      .addCase(getSearchedTracks.fulfilled, (state, action) => ({
        ...state,
        searchedTracksLoading: false,
        searchedTracks: action.payload,
      }));
  },
});

export default searchedTracksSlice.reducer;
