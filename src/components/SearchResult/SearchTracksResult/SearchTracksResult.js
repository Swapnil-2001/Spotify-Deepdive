import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../../LoadingSpinner";
import { getSearchedTracks } from "../../../features/search/searchedTracks/searchedTracksFunctions";
import {
  setSelectedTrackDetails,
  removeSelectedTrackData,
} from "../../../features/search/searchedTracks/searchedTracksSlice";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import TracksList from "../../Lists/TracksList/TracksList";
import SelectedTrackDetails from "./SelectedTrackDetails/SelectedTrackDetails";
import SelectedTrackFeatures from "./SelectedTrackFeatures/SelectedTrackFeatures";

const SearchTracksResult = () => {
  const dispatch = useDispatch();
  const {
    searchedTracks,
    searchedTracksLoading,
    selectedTrackDetails,
    selectedTrackFeatures,
    selectedTrackFeaturesLoading,
  } = useSelector((state) => state.searchedTracks);
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  const tracksRef = useRef(null);
  const scrollToView = () => {
    tracksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (selectedTrackFeatures && selectedTrackDetails) scrollToView();
  }, [selectedTrackFeatures, selectedTrackDetails]);

  useEffect(() => {
    dispatch(addSearchedType("tracks"));
    if (searchedTerm !== "" && searchedType === "tracks") {
      dispatch(getSearchedTracks(searchedTerm));
      dispatch(setSelectedTrackDetails(null));
      dispatch(removeSelectedTrackData());
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
    </div>
  );
};

export default SearchTracksResult;
