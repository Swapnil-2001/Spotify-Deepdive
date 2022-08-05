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
      return {
        danceability: trackAudioFeatures.danceability,
        energy: trackAudioFeatures.energy,
        valence: trackAudioFeatures.valence,
        duration: trackAudioFeatures.duration_ms,
        loudness: trackAudioFeatures.loudness,
        acousticness: trackAudioFeatures.acousticness,
      };
    } catch (error) {
      console.error(
        "An error occurred while fetching track's audio features. ",
        error
      );
    }
  }
);

export const getTrackRecommendations = createAsyncThunk(
  "searchedTracks/getTrackRecommendations",
  async (trackId) => {
    try {
      const trackRecommendations = await spotify.getRecommendations({
        seed_tracks: trackId,
        limit: 50,
      });
      return trackRecommendations.tracks;
    } catch (error) {
      console.error(
        "An error occurred while fetching recommended tracks for the selected track. ",
        error
      );
    }
  }
);
