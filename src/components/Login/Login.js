import { auth_endpoint, redirect_uri, scopes } from "../../utils/config";

const Login = () => {
  const { REACT_APP_CLIENT_ID } = process.env;

  const loginToSpotify = (event) => {
    event.preventDefault();
    window.location =
      `${auth_endpoint}?client_id=${REACT_APP_CLIENT_ID}` +
      `&redirect_uri=${redirect_uri}&response_type=token` +
      `&scope=${scopes.join("%20")}&show_dialog=true`;
  };

  return (
    <form onSubmit={loginToSpotify}>
      <button type="submit">Login to Spotify</button>
    </form>
  );
};

export default Login;
