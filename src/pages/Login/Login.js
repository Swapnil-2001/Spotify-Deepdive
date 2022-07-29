import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { spotify_popup_url } from "../../utils/config";
import { isAccessTokenValid } from "../../utils/functions";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAccessTokenValid()) {
      navigate("/");
    }
  }, [navigate]);

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
