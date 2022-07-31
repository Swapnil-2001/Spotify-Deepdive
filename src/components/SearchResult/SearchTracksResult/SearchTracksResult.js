import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedTracks } from "../../../features/search/searchedTracks/searchedTracksFunctions";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import TracksList from "../../Lists/TracksList/TracksList";

const SearchTracksResult = () => {
  const dispatch = useDispatch();
  const { searchedTracks } = useSelector((state) => state.searchedTracks);
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  useEffect(() => {
    dispatch(addSearchedType("tracks"));
    if (searchedTerm !== "" && searchedType === "tracks")
      dispatch(getSearchedTracks(searchedTerm));
  }, [searchedTerm, searchedType, searchedTracks, dispatch]);

  return <div>{searchedTracks && <TracksList tracks={searchedTracks} />}</div>;
};

export default SearchTracksResult;
