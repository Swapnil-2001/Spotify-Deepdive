import { createSlice } from "@reduxjs/toolkit";

import {
  getUserProfile,
  getUserRecentTracks,
  getUserTopTracks,
} from "./userFunctions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    page: "",
    userProfile: null,
    userLoading: false,
    userRecentTracks: [],
    userRecentTracksLoading: false,
    userTopTracks: [],
    userTopTracksLoading: false,
  },
  reducers: {
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => ({
        ...state,
        userLoading: true,
      }))
      .addCase(getUserProfile.rejected, (state) => ({
        ...state,
        userLoading: false,
        userProfile: null,
      }))
      .addCase(getUserProfile.fulfilled, (state, action) => ({
        ...state,
        userLoading: false,
        userProfile: action.payload,
      }))
      .addCase(getUserRecentTracks.pending, (state) => ({
        ...state,
        userRecentTracksLoading: true,
      }))
      .addCase(getUserRecentTracks.rejected, (state) => ({
        ...state,
        userRecentTracks: [],
        userRecentTracksLoading: false,
      }))
      .addCase(getUserRecentTracks.fulfilled, (state, action) => ({
        ...state,
        userRecentTracks: action.payload,
        userRecentTracksLoading: false,
      }))
      .addCase(getUserTopTracks.pending, (state) => ({
        ...state,
        userTopTracksLoading: true,
      }))
      .addCase(getUserTopTracks.rejected, (state) => ({
        ...state,
        userTopTracks: [],
        userTopTracksLoading: false,
      }))
      .addCase(getUserTopTracks.fulfilled, (state, action) => ({
        ...state,
        userTopTracks: action.payload,
        userTopTracksLoading: false,
      }));
  },
});

export const { setPage } = userSlice.actions;

export default userSlice.reducer;
