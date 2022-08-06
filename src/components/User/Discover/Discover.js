import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../../LoadingSpinner";
import SearchBox from "./SearchBox/SearchBox";
import GenresModal from "./SearchBox/GenresModal/GenresModal";
import TracksModal from "./SearchBox/TracksModal/TracksModal";
import ArtistsModal from "./SearchBox/ArtistsModal/ArtistsModal";
import RecommendedTracks from "./RecommendedTracks/RecommendedTracks";
import {
  setPage,
  setPickArtists,
  setPickGenre,
  setPickTracks,
  removePrevRecommendations,
} from "../../../features/user/userSlice";
import {
  getUserTopArtists,
  getUserTopTracks,
  getUserRecommendations,
} from "../../../features/user/userFunctions";
import "./Discover.scss";

const Discover = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {
    userTopTracks,
    userTopTracksLoading,
    userTopArtists,
    userTopArtistsLoading,
    userRecommendations,
    userRecommendationsLoading,
    pickGenre,
    pickArtists,
    pickTracks,
    chosenTracks,
    chosenGenre,
    chosenArtists,
  } = useSelector((state) => state.user);

  const recommendedTracksRef = useRef(null);
  const scrollToView = () => {
    recommendedTracksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (userRecommendations?.length > 0) scrollToView();
  }, [userRecommendations]);

  useEffect(() => {
    dispatch(setPage("discover"));
    if (!userTopTracks || userTopTracks.length === 0) {
      dispatch(getUserTopTracks());
    }
    if (!userTopArtists || userTopArtists.length === 0) {
      dispatch(getUserTopArtists());
    }
  }, [dispatch, userTopTracks, userTopArtists]);

  const closeModal = (e) => {
    if (e.target.classList.contains("modal_bg")) {
      dispatch(setPickArtists(false));
      dispatch(setPickGenre(false));
      dispatch(setPickTracks(false));
    }
  };

  const searchRecommendations = () => {
    if (
      chosenArtists.length === 0 &&
      chosenGenre.length === 0 &&
      chosenTracks.length === 0
    ) {
      setError("Please select at least 1 artist/track/genre.");
    } else {
      setError("");
      dispatch(removePrevRecommendations());
      const artistsSeed = chosenArtists.map((artist) => artist.id).join(",");
      const tracksSeed = chosenTracks.map((track) => track.id).join(",");
      const genresSeed = chosenGenre;
      dispatch(getUserRecommendations({ artistsSeed, tracksSeed, genresSeed }));
    }
  };

  return (
    <div>
      {(userTopTracksLoading || userTopArtistsLoading) && <LoadingSpinner />}
      {userTopTracks?.length > 0 && userTopArtists?.length > 0 && (
        <div className="user_recommendations_div">
          <h1>Get Recommendations</h1>
          <p className="user_recommendations_info">
            Recommendations are generated based on the available information for
            a given seed entity and matched against similar artists and tracks.
            If there is sufficient information about the provided seeds, a list
            of tracks will be returned.
          </p>
          <h3 className="disclaimer">
            For artists and tracks that are very new or obscure there might not
            be enough data to generate a list of tracks.
          </h3>
          <SearchBox />
          {error.length > 0 && <span className="error_message">{error}</span>}
          <div className="search_recommendations_button_div">
            <h2 style={{ marginRight: "15px" }}>Let's go!</h2>
            <button
              onClick={searchRecommendations}
              className="search_recommendations_button"
            >
              Search
            </button>
          </div>
          {userRecommendationsLoading && <LoadingSpinner />}
          <div ref={recommendedTracksRef} />
          {userRecommendations?.length > 0 && (
            <RecommendedTracks tracks={userRecommendations} />
          )}
        </div>
      )}
      {(pickArtists || pickGenre || pickTracks) && (
        <div onClick={closeModal} className="modal_bg">
          {pickArtists && <ArtistsModal />}
          {pickGenre && <GenresModal />}
          {pickTracks && <TracksModal />}
        </div>
      )}
    </div>
  );
};

export default Discover;
