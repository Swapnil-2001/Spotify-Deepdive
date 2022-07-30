import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedArtists } from "../../../features/search/searchedArtists/searchedArtistsFunctions";
import ArtistsList from "../../Lists/ArtistsList/ArtistsList";
import TopTracks from "./TopTracks/TopTracks";
import RelatedArtists from "./RelatedArtists/RelatedArtists";

const SearchArtistsResult = () => {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  const { searchedArtists } = useSelector((state) => state.searchedArtists);

  useEffect(() => {
    dispatch(getSearchedArtists(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <div>
      {searchedArtists && <ArtistsList artists={searchedArtists} />}
      <TopTracks />
      <RelatedArtists />
    </div>
  );
};

export default SearchArtistsResult;
