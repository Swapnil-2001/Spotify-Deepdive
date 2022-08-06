import { createSlice } from "@reduxjs/toolkit";

import {
  getUserProfile,
  getUserRecentTracks,
  getUserTopTracks,
  getUserTopArtists,
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
    userTopArtists: [],
    userTopArtistsLoading: false,
    pickGenres: false,
    chosenGenres: [],
    pickArtists: false,
    chosenArtists: [],
    pickTracks: false,
    chosenTracks: [],
  },
  reducers: {
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    setPickGenres: (state, action) => ({
      ...state,
      pickGenres: action.payload,
    }),
    setPickArtists: (state, action) => ({
      ...state,
      pickArtists: action.payload,
    }),
    setPickTracks: (state, action) => ({
      ...state,
      pickTracks: action.payload,
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
      }))
      .addCase(getUserTopArtists.pending, (state) => ({
        ...state,
        userTopArtistsLoading: true,
      }))
      .addCase(getUserTopArtists.rejected, (state) => ({
        ...state,
        userTopArtists: [],
        userTopArtistsLoading: false,
      }))
      .addCase(getUserTopArtists.fulfilled, (state, action) => ({
        ...state,
        userTopArtists: action.payload,
        userTopArtistsLoading: false,
      }));
  },
});

export const { setPage, setPickArtists, setPickGenres, setPickTracks } =
  userSlice.actions;

export default userSlice.reducer;
