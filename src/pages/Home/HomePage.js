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
      <div className="search_types_div">
        <button
          className={`search_types_button ${
            searchType === "tracks" ? "selected" : ""
          }`}
          onClick={() => setSearchType("tracks")}
        >
          Tracks
        </button>
        <button
          className={`search_types_button ${
            searchType === "albums" ? "selected" : ""
          }`}
          onClick={() => setSearchType("albums")}
        >
          Albums
        </button>
        <button
          className={`search_types_button ${
            searchType === "artists" ? "selected" : ""
          }`}
          onClick={() => setSearchType("artists")}
        >
          Artists
        </button>
      </div>
      <div className="right_section_div">
        {userLoading && "Loading"}
        {userProfile && <User userProfile={userProfile} />}
        <form onSubmit={handleSearch}>
          <input
            className="search_input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search_button" type="submit">
            Search
          </button>
        </form>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
