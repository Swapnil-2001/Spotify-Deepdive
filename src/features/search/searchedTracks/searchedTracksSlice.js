import { createSlice } from "@reduxjs/toolkit";

import {
  getSearchedTracks,
  getTrackAudioFeatures,
  getTrackRecommendations,
} from "./searchedTracksFunctions";

const searchedTracksSlice = createSlice({
  name: "searchedTracks",
  initialState: {
    searchedTracks: [],
    searchedTracksLoading: false,
    selectedTrackDetails: null,
    selectedTrackFeatures: null,
    selectedTrackFeaturesLoading: false,
    selectedTrackRecommendations: [],
    selectedTrackRecommendationsLoading: false,
  },
  reducers: {
    removeSearchedTracks: (state) => ({
      ...state,
      searchedTracks: [],
    }),
    removeSelectedTrackData: (state) => ({
      ...state,
      selectedTrackFeatures: null,
      selectedTrackRecommendations: [],
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
      }))
      .addCase(getTrackRecommendations.pending, (state) => ({
        ...state,
        selectedTrackRecommendationsLoading: true,
      }))
      .addCase(getTrackRecommendations.rejected, (state) => ({
        ...state,
        selectedTrackRecommendations: [],
        selectedTrackRecommendationsLoading: false,
      }))
      .addCase(getTrackRecommendations.fulfilled, (state, action) => ({
        ...state,
        selectedTrackRecommendations: action.payload,
        selectedTrackRecommendationsLoading: false,
      }));
  },
});

export const {
  setSelectedTrackDetails,
  removeSelectedTrackData,
  removeSearchedTracks,
} = searchedTracksSlice.actions;

export default searchedTracksSlice.reducer;
