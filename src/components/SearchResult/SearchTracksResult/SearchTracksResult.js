import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedTracks } from "../../../features/search/searchedTracks/searchedTracksFunctions";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import TracksList from "../../Lists/TracksList/TracksList";
import SelectedTrackDetails from "./SelectedTrackDetails/SelectedTrackDetails";

const SearchTracksResult = () => {
  const dispatch = useDispatch();
  const { searchedTracks, selectedTrackDetails } = useSelector(
    (state) => state.searchedTracks
  );
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  const tracksRef = useRef(null);
  const scrollToView = () => {
    tracksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToView();
  }, [selectedTrackDetails]);

  useEffect(() => {
    dispatch(addSearchedType("tracks"));
    if (searchedTerm !== "" && searchedType === "tracks")
      dispatch(getSearchedTracks(searchedTerm));
  }, [searchedTerm, searchedType, dispatch]);

  return (
    <div>
      {searchedTracks && <TracksList tracks={searchedTracks} />}
      {selectedTrackDetails && (
        <SelectedTrackDetails
          tracksRef={tracksRef}
          trackDetails={selectedTrackDetails}
        />
      )}
    </div>
  );
};

export default SearchTracksResult;
