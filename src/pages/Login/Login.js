import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { spotify_popup_url } from "../../utils/config";
import { isAccessTokenValid } from "../../utils/functions";
import "./Login.scss";

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
    <form className="login_form" onSubmit={loginToSpotify}>
      <h1 className="login_text">
        Discover new songs, artists and albums. All in one place.
      </h1>
      <button className="login_button" type="submit">
        Log In with Spotify
      </button>
    </form>
  );
};

export default Login;
