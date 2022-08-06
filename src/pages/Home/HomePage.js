import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import spotify, { isAccessTokenValid } from "../../utils/functions";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getUserProfile } from "../../features/user/userFunctions";
import { removeSearchedTracks } from "../../features/search/searchedTracks/searchedTracksSlice";
import { removeSearchedAlbums } from "../../features/search/searchedAlbums/searchedAlbumsSlice";
import { removeSearchedArtists } from "../../features/search/searchedArtists/searchedArtistsSlice";
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
    const isHomeRoute =
      window.location.pathname === "/" || window.location.pathname === "";
    if (isHomeRoute) {
      navigate("tracks");
    }
  }, [navigate]);

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
    switch (searchedType) {
      case "albums":
        dispatch(removeSearchedAlbums());
        break;
      case "artists":
        dispatch(removeSearchedArtists());
        break;
      case "tracks":
      default:
        dispatch(removeSearchedTracks());
    }
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
      <div className="home_right_section_div">
        {userLoading && <LoadingSpinner />}
        {userProfile && <User userProfile={userProfile} />}
        <form onSubmit={handleSearch}>
          <input
            className="search_input"
            placeholder={
              searchedType === "tracks"
                ? "Search tracks"
                : searchedType === "albums"
                ? "Search albums"
                : "Search artists"
            }
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
          />
          <button className="styled_button" type="submit">
            Search
          </button>
        </form>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
