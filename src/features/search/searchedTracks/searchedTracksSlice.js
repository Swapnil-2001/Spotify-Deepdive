import { createSlice } from "@reduxjs/toolkit";

import { getSearchedTracks } from "./searchedTracksFunctions";

const searchedTracksSlice = createSlice({
  name: "searchedTracks",
  initialState: {
    searchedTracks: [],
    searchedTracksLoading: false,
    selectedTrackDetails: null,
  },
  reducers: {
    removeSearchedTracks: (state) => ({
      ...state,
      searchedTracks: [],
    }),
    setSelectedTrackDetails: (state, action) => ({
      ...state,
      selectedTrackDetails: action.payload,
    }),
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

export const { setSelectedTrackDetails, removeSearchedTracks } =
  searchedTracksSlice.actions;

export default searchedTracksSlice.reducer;
