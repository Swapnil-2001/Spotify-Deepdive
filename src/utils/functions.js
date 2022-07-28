import SpotifyWebApi from "spotify-web-api-js";

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

const spotify = new SpotifyWebApi();
export default spotify;
