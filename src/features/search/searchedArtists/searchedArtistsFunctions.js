import { createAsyncThunk } from "@reduxjs/toolkit";

import spotify from "../../../utils/functions";

export const getSearchedArtists = createAsyncThunk(
  "searchedArtists/getSearchedArtists",
  async (searchTerm) => {
    try {
      const searchedArtists = await spotify.searchArtists(searchTerm, {
        limit: 6,
      });
      return searchedArtists.artists?.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching artist search results. ",
        error
      );
    }
  }
);

export const getArtist = createAsyncThunk(
  "searchedArtists/getArtist",
  async (artistId) => {
    try {
      const artist = await spotify.getArtist(artistId);
      return artist;
    } catch (error) {
      console.error(
        "An error occurred while fetching the artist details. ",
        error
      );
    }
  }
);

export const getArtistTopTracks = createAsyncThunk(
  "searchedArtists/getArtistTopTracks",
  async (artistId) => {
    try {
      const artistTopTracks = await spotify.getArtistTopTracks(artistId, "US");
      return artistTopTracks.tracks;
    } catch (error) {
      console.error(
        "An error occurred while fetching artist's top tracks. ",
        error
      );
    }
  }
);

export const getArtistAlbums = createAsyncThunk(
  "searchedArtists/getArtistAlbums",
  async (artistId) => {
    try {
      const artistAlbums = await spotify.getArtistAlbums(artistId);
      return artistAlbums.items;
    } catch (error) {
      console.error(
        "An error occurred while fetching artist's albums. ",
        error
      );
    }
  }
);

export const getRelatedArtists = createAsyncThunk(
  "searchedArtists/getRelatedArtists",
  async (artistId) => {
    try {
      const relatedArtists = await spotify.getArtistRelatedArtists(artistId);
      return relatedArtists.artists;
    } catch (error) {
      console.error(
        "An error occurred while fetching related artists. ",
        error
      );
    }
  }
);
