import { createAsyncThunk } from "@reduxjs/toolkit";

import spotify from "../../../utils/functions";

export const getSearchedTracks = createAsyncThunk(
  "searchedTracks/getSearchedTracks",
  async (searchTerm) => {
    try {
      const searchedTracks = await spotify.searchTracks(searchTerm, {
        limit: 49,
      });
      return searchedTracks.tracks?.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching track search results. ",
        error
      );
    }
  }
);

export const getTrackAudioFeatures = createAsyncThunk(
  "searchedTracks/getTrackAudioFeatures",
  async (trackId) => {
    try {
      const trackAudioFeatures = await spotify.getAudioFeaturesForTrack(
        trackId
      );
      return trackAudioFeatures;
    } catch (error) {
      console.error(
        "An error occurred while fetching track's audio features. ",
        error
      );
    }
  }
);
