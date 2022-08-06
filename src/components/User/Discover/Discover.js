import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../../LoadingSpinner";
import SearchBox from "./SearchBox/SearchBox";
import GenresModal from "./SearchBox/GenresModal/GenresModal";
import TracksModal from "./SearchBox/TracksModal/TracksModal";
import ArtistsModal from "./SearchBox/ArtistsModal/ArtistsModal";
import {
  setPage,
  setPickArtists,
  setPickGenres,
  setPickTracks,
} from "../../../features/user/userSlice";
import {
  getUserTopArtists,
  getUserTopTracks,
} from "../../../features/user/userFunctions";
import "./Discover.scss";

const Discover = () => {
  const dispatch = useDispatch();
  const {
    userTopTracks,
    userTopTracksLoading,
    userTopArtists,
    userTopArtistsLoading,
    pickGenres,
    pickArtists,
    pickTracks,
  } = useSelector((state) => state.user);

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
      dispatch(setPickGenres(false));
      dispatch(setPickTracks(false));
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
        </div>
      )}
      {(pickArtists || pickGenres || pickTracks) && (
        <div onClick={closeModal} className="modal_bg">
          {pickArtists && <ArtistsModal />}
          {pickGenres && <GenresModal />}
          {pickTracks && <TracksModal />}
        </div>
      )}
    </div>
  );
};

export default Discover;
