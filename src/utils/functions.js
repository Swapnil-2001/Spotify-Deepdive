import SpotifyWebApi from "spotify-web-api-js";

import {
  removeSearchedTracks,
  removeSelectedTrackData,
  setSelectedTrackDetails,
} from "../features/search/searchedTracks/searchedTracksSlice";
import {
  removeSearchedArtists,
  removeSelectedArtist,
} from "../features/search/searchedArtists/searchedArtistsSlice";
import {
  getArtist,
  getArtistAlbums,
  getArtistTopTracks,
  getRelatedArtists,
} from "../features/search/searchedArtists/searchedArtistsFunctions";
import {
  getTrackAudioFeatures,
  getTrackRecommendations,
} from "../features/search/searchedTracks/searchedTracksFunctions";
import { addSearchedTerm } from "../features/search/searchedTerm/searchedTermSlice";

//  Returns an object of the format:
//  {
//      access_token: some_value,
//      token_type: some_value,
//      expires_in: some_value
//  }
export const getAuthParamValues = (url) => {
  return url
    .slice(1)
    .split("&")
    .reduce((prevObjectState, currentKeyValuePair) => {
      const [key, value] = currentKeyValuePair.split("=");
      prevObjectState[key] = value;
      return prevObjectState;
    }, {});
};

export const isAccessTokenValid = () => {
  let tokenExpiryTime = "0";
  if (localStorage.getItem("expiry_time")) {
    tokenExpiryTime = JSON.parse(localStorage.getItem("expiry_time"));
  }
  const currentTime = new Date().getTime();
  return currentTime < tokenExpiryTime;
};

export const selectTrack = (
  dispatch,
  navigate,
  artists,
  images,
  trackName,
  trackId,
  preview_url,
  removePreviousTracks
) => {
  if (removePreviousTracks) dispatch(removeSearchedTracks());
  dispatch(removeSelectedTrackData());
  const trackDetails = {
    trackId,
    trackName,
    artistId: artists?.length > 0 ? artists[0].id : null,
    artistName: artists?.length > 0 ? artists[0].name : null,
    trackImgUrl: "",
    preview_url,
  };
  if (!trackDetails.artistId || !trackDetails.artistName) return;
  if (images?.length > 0) {
    trackDetails.trackImgUrl = images[0].url;
  }
  dispatch(addSearchedTerm(""));
  navigate("/tracks");
  dispatch(setSelectedTrackDetails(trackDetails));
  dispatch(getTrackAudioFeatures(trackId));
  dispatch(getTrackRecommendations(trackId));
};

export const selectArtist = (
  dispatch,
  navigate,
  artistId,
  removePreviousArtists
) => {
  if (removePreviousArtists) dispatch(removeSearchedArtists());
  dispatch(removeSelectedArtist());
  dispatch(getArtist(artistId));
  dispatch(getArtistTopTracks(artistId));
  dispatch(getArtistAlbums(artistId));
  dispatch(getRelatedArtists(artistId));
  navigate("/artists");
};

const spotify = new SpotifyWebApi();
export default spotify;
