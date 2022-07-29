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
