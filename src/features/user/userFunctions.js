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
      const userRecentTracks = await spotify.getMyRecentlyPlayedTracks();
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
      const userTopTracks = await spotify.getMyTopTracks();
      return userTopTracks.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching user's top tracks. ",
        error
      );
    }
  }
);
