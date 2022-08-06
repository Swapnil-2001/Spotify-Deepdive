import { createSlice } from "@reduxjs/toolkit";

import {
  getUserProfile,
  getUserRecentTracks,
  getUserTopTracks,
  getUserTopArtists,
  getUserRecommendations,
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
    pickGenre: false,
    chosenGenre: "",
    pickArtists: false,
    chosenArtists: [],
    pickTracks: false,
    chosenTracks: [],
    userRecommendations: [],
    userRecommendationsLoading: false,
  },
  reducers: {
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    setPickGenre: (state, action) => ({
      ...state,
      pickGenre: action.payload,
    }),
    setPickArtists: (state, action) => ({
      ...state,
      pickArtists: action.payload,
    }),
    addArtist: (state, action) => ({
      ...state,
      chosenArtists: [...state.chosenArtists, action.payload],
    }),
    removeArtist: (state, action) => ({
      ...state,
      chosenArtists: state.chosenArtists.filter(
        (artist) => artist.id !== action.payload
      ),
    }),
    addTrack: (state, action) => ({
      ...state,
      chosenTracks: [...state.chosenTracks, action.payload],
    }),
    removeTrack: (state, action) => ({
      ...state,
      chosenTracks: state.chosenTracks.filter(
        (track) => track.id !== action.payload
      ),
    }),
    addGenre: (state, action) => ({
      ...state,
      chosenGenre: action.payload,
    }),
    removeGenre: (state) => ({
      ...state,
      chosenGenre: "",
    }),
    removePrevRecommendations: (state) => ({
      ...state,
      userRecommendations: [],
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
      }))
      .addCase(getUserRecommendations.pending, (state) => ({
        ...state,
        userRecommendationsLoading: true,
      }))
      .addCase(getUserRecommendations.rejected, (state) => ({
        ...state,
        userRecommendations: [],
        userRecommendationsLoading: false,
      }))
      .addCase(getUserRecommendations.fulfilled, (state, action) => ({
        ...state,
        userRecommendations: action.payload,
        userRecommendationsLoading: false,
      }));
  },
});

export const {
  setPage,
  setPickArtists,
  addArtist,
  removeArtist,
  addTrack,
  removeTrack,
  addGenre,
  removeGenre,
  setPickGenre,
  setPickTracks,
  removePrevRecommendations,
} = userSlice.actions;

export default userSlice.reducer;
