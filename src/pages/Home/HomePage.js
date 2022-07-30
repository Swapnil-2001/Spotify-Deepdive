import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import spotify, { isAccessTokenValid } from "../../utils/functions";
import { getUserProfile } from "../../features/user/userFunctions";
import User from "../../components/User/User";
import "./HomePage.scss";

const HomePage = () => {
  const [searchType, setSearchType] = useState("tracks");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userProfile, userLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAccessTokenValid()) {
      localStorage.clear();
      navigate("/login");
    } else {
      const accessToken = localStorage.getItem("access_token");
      spotify.setAccessToken(accessToken);
      dispatch(getUserProfile());
    }
  }, [navigate, dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    switch (searchType) {
      case "albums":
        navigate(`/albums/${searchTerm}`);
        break;
      case "artists":
        navigate(`/artists/${searchTerm}`);
        break;
      case "tracks":
      default:
        navigate(`/tracks/${searchTerm}`);
    }
  };

  return (
    <div className="home_wrapper_div">
      {userLoading && "Loading"}
      {userProfile && <User userProfile={userProfile} />}
      <div>
        <button onClick={() => setSearchType("tracks")}>Tracks</button>
        <button onClick={() => setSearchType("albums")}>Albums</button>
        <button onClick={() => setSearchType("artists")}>Artists</button>
      </div>
      <form onSubmit={handleSearch}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </div>
  );
};

export default HomePage;
