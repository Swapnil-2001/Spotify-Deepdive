import { spotify_popup_url } from "../../utils/config";

const Login = () => {
  const loginToSpotify = (event) => {
    event.preventDefault();
    window.location = spotify_popup_url;
  };

  return (
    <form onSubmit={loginToSpotify}>
      <button type="submit">Login to Spotify</button>
    </form>
  );
};

export default Login;
