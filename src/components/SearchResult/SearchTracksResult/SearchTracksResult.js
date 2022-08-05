import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedTracks } from "../../../features/search/searchedTracks/searchedTracksFunctions";
import {
  setSelectedTrackDetails,
  removeSelectedTrackData,
} from "../../../features/search/searchedTracks/searchedTracksSlice";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import LoadingSpinner from "../../LoadingSpinner";
import TracksList from "../../Lists/TracksList/TracksList";
import SelectedTrackDetails from "./SelectedTrackDetails/SelectedTrackDetails";
import SelectedTrackFeatures from "./SelectedTrackFeatures/SelectedTrackFeatures";
import RecommendedTracks from "./RecommendedTracks/RecommendedTracks";

const SearchTracksResult = () => {
  const dispatch = useDispatch();
  const {
    searchedTracks,
    searchedTracksLoading,
    selectedTrackDetails,
    selectedTrackFeatures,
    selectedTrackFeaturesLoading,
    selectedTrackRecommendations,
    selectedTrackRecommendationsLoading,
  } = useSelector((state) => state.searchedTracks);
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  const tracksRef = useRef(null);
  const scrollToView = () => {
    tracksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (
      selectedTrackFeatures &&
      selectedTrackDetails &&
      selectedTrackRecommendations?.length > 0
    )
      scrollToView();
  }, [
    selectedTrackFeatures,
    selectedTrackDetails,
    selectedTrackRecommendations,
  ]);

  useEffect(() => {
    dispatch(addSearchedType("tracks"));
    if (searchedTerm !== "" && searchedType === "tracks") {
      dispatch(setSelectedTrackDetails(null));
      dispatch(removeSelectedTrackData());
      dispatch(getSearchedTracks(searchedTerm));
    }
  }, [searchedTerm, searchedType, dispatch]);

  return (
    <div>
      {searchedTracksLoading && <LoadingSpinner />}
      {searchedTracks && (
        <TracksList removePreviousTracks={false} tracks={searchedTracks} />
      )}
      {selectedTrackDetails && (
        <SelectedTrackDetails
          tracksRef={tracksRef}
          trackDetails={selectedTrackDetails}
        />
      )}
      {selectedTrackFeaturesLoading && <LoadingSpinner />}
      {selectedTrackFeatures && (
        <SelectedTrackFeatures features={selectedTrackFeatures} />
      )}
      {selectedTrackRecommendationsLoading && <LoadingSpinner />}
      {selectedTrackRecommendations?.length > 0 && (
        <RecommendedTracks tracks={selectedTrackRecommendations} />
      )}
    </div>
  );
};

export default SearchTracksResult;
