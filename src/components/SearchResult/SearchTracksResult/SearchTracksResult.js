import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedTracks } from "../../../features/search/searchedTracks/searchedTracksFunctions";
import TracksList from "../../Lists/TracksList/TracksList";

const SearchTracksResult = () => {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  const { searchedTracks } = useSelector((state) => state.searchedTracks);

  useEffect(() => {
    dispatch(getSearchedTracks(searchTerm));
  }, [dispatch, searchTerm]);

  return <div>{searchedTracks && <TracksList tracks={searchedTracks} />}</div>;
};

export default SearchTracksResult;
