import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";

import spotify, { isAccessTokenValid } from "../../utils/functions";
import { getUserProfile } from "../../features/user/userFunctions";
import { addSearchedTerm } from "../../features/search/searchedTerm/searchedTermSlice";
import User from "../../components/User/User";
import "./HomePage.scss";

const HomePage = () => {
  const [searchedTerm, setSearchedTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userProfile, userLoading } = useSelector((state) => state.user);
  const { searchedType } = useSelector((state) => state.searchedTerm);

  useEffect(() => {
    if (!isAccessTokenValid()) {
      localStorage.clear();
      navigate("/login");
    } else {
      const accessToken = localStorage.getItem("access_token");
      spotify.setAccessToken(accessToken);
      if (!userProfile) dispatch(getUserProfile());
    }
  }, [userProfile, navigate, dispatch]);

  const handleSearchedTypeTracks = () => {
    dispatch(addSearchedTerm(""));
    navigate(`/tracks`);
  };

  const handleSearchedTypeAlbums = () => {
    dispatch(addSearchedTerm(""));
    navigate(`/albums`);
  };

  const handleSearchedTypeArtists = () => {
    dispatch(addSearchedTerm(""));
    navigate(`/artists`);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(addSearchedTerm(searchedTerm));
  };

  return (
    <div className="home_wrapper_div">
      <div className="search_types_div">
        <button
          className={`search_types_button ${
            searchedType === "tracks" ? "selected" : ""
          }`}
          onClick={handleSearchedTypeTracks}
        >
          Tracks
        </button>
        <button
          className={`search_types_button ${
            searchedType === "albums" ? "selected" : ""
          }`}
          onClick={handleSearchedTypeAlbums}
        >
          Albums
        </button>
        <button
          className={`search_types_button ${
            searchedType === "artists" ? "selected" : ""
          }`}
          onClick={handleSearchedTypeArtists}
        >
          Artists
        </button>
      </div>
      <div className="right_section_div">
        {userLoading && <Audio color="#fff" height={60} width={60} />}
        {userProfile && <User userProfile={userProfile} />}
        <form onSubmit={handleSearch}>
          <input
            className="search_input"
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
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
