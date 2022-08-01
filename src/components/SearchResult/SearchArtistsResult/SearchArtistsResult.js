import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedArtists } from "../../../features/search/searchedArtists/searchedArtistsFunctions";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import ArtistsList from "../../Lists/ArtistsList/ArtistsList";
import ArtistInfo from "./ArtistInfo/ArtistInfo";
import TopTracks from "./TopTracks/TopTracks";
import RelatedArtists from "./RelatedArtists/RelatedArtists";

const SearchArtistsResult = () => {
  const dispatch = useDispatch();
  const { searchedArtists } = useSelector((state) => state.searchedArtists);
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  useEffect(() => {
    dispatch(addSearchedType("artists"));
    if (searchedTerm !== "" && searchedType === "artists")
      dispatch(getSearchedArtists(searchedTerm));
  }, [searchedTerm, searchedType, dispatch]);

  return (
    <div>
      {searchedArtists && <ArtistsList artists={searchedArtists} />}
      <ArtistInfo />
      <TopTracks />
      <RelatedArtists />
    </div>
  );
};

export default SearchArtistsResult;
