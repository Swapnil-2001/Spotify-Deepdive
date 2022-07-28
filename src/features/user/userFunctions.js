import { createAsyncThunk } from "@reduxjs/toolkit";

import spotify from "../../utils/functions";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async () => {
    const userProfile = await spotify.getMe();
    return userProfile;
  }
);
