import { createSlice } from "@reduxjs/toolkit";

import {
  getSearchedTracks,
  getTrackAudioFeatures,
} from "./searchedTracksFunctions";

const searchedTracksSlice = createSlice({
  name: "searchedTracks",
  initialState: {
    searchedTracks: [],
    searchedTracksLoading: false,
    selectedTrackDetails: null,
    selectedTrackFeatures: null,
    selectedTrackFeaturesLoading: false,
  },
  reducers: {
    removeSearchedTracks: (state) => ({
      ...state,
      searchedTracks: [],
    }),
    removeSelectedTrackFeatures: (state) => ({
      ...state,
      selectedTrackFeatures: null,
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
      }))
      .addCase(getTrackAudioFeatures.pending, (state) => ({
        ...state,
        selectedTrackFeaturesLoading: true,
      }))
      .addCase(getTrackAudioFeatures.rejected, (state) => ({
        ...state,
        selectedTrackFeatures: null,
        selectedTrackFeaturesLoading: false,
      }))
      .addCase(getTrackAudioFeatures.fulfilled, (state, action) => ({
        ...state,
        selectedTrackFeatures: action.payload,
        selectedTrackFeaturesLoading: false,
      }));
  },
});

export const {
  setSelectedTrackDetails,
  removeSelectedTrackFeatures,
  removeSearchedTracks,
} = searchedTracksSlice.actions;

export default searchedTracksSlice.reducer;
