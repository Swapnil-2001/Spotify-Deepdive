import { createAsyncThunk } from "@reduxjs/toolkit";

import spotify from "../../utils/functions";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async () => {
    try {
      const userProfile = await spotify.getMe();
      return userProfile;
    } catch (error) {
      console.error(
        "An error occurred while fetching the user's profile. ",
        error
      );
    }
  }
);

export const getUserRecentTracks = createAsyncThunk(
  "user/getUserRecentTracks",
  async () => {
    try {
      const userRecentTracks = await spotify.getMyRecentlyPlayedTracks({
        limit: 50,
      });
      return userRecentTracks.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching user's recently played tracks. ",
        error
      );
    }
  }
);

export const getUserTopTracks = createAsyncThunk(
  "user/getUserTopTracks",
  async () => {
    try {
      const userTopTracks = await spotify.getMyTopTracks({ limit: 50 });
      return userTopTracks.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching user's top tracks. ",
        error
      );
    }
  }
);

export const getUserTopArtists = createAsyncThunk(
  "user/getUserTopArtists",
  async () => {
    try {
      const userTopArtists = await spotify.getMyTopArtists();
      return userTopArtists.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching user's top artists. ",
        error
      );
    }
  }
);

export const getUserRecommendations = createAsyncThunk(
  "user/getUserRecommendations",
  async (userInput) => {
    const { artistsSeed, tracksSeed, genresSeed } = userInput;
    try {
      const userRecommendations = await spotify.getRecommendations({
        seed_artists: artistsSeed,
        seed_genres: genresSeed,
        seed_tracks: tracksSeed,
        limit: 100,
      });
      return userRecommendations.tracks;
    } catch (error) {
      console.error(
        "An error occurred while fetching recommended tracks for user. ",
        error
      );
    }
  }
);
