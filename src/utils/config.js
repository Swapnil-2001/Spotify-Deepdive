const auth_endpoint = "https://accounts.spotify.com/authorize";
const redirect_uri = "http://localhost:3000/redirect";

const { REACT_APP_CLIENT_ID } = process.env;

const scopes = ["user-top-read", "user-read-currently-playing"];

export const spotify_popup_url =
  `${auth_endpoint}?client_id=${REACT_APP_CLIENT_ID}` +
  `&redirect_uri=${redirect_uri}&response_type=token` +
  `&scope=${scopes.join("%20")}&show_dialog=true`;
