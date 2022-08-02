import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../LoadingSpinner";

import { getSearchedArtists } from "../../../features/search/searchedArtists/searchedArtistsFunctions";
import { removeSelectedArtist } from "../../../features/search/searchedArtists/searchedArtistsSlice";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import ArtistsList from "../../Lists/ArtistsList/ArtistsList";
import ArtistInfo from "./ArtistInfo/ArtistInfo";
import TopTracks from "./TopTracks/TopTracks";
import RelatedArtists from "./RelatedArtists/RelatedArtists";

const SearchArtistsResult = () => {
  const dispatch = useDispatch();
  const {
    searchedArtists,
    searchedArtistsLoading,
    selectedArtist,
    selectedArtistLoading,
    artistTopTracks,
    artistTopTracksLoading,
    relatedArtists,
    relatedArtistsLoading,
  } = useSelector((state) => state.searchedArtists);
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  useEffect(() => {
    dispatch(addSearchedType("artists"));
    if (searchedTerm !== "" && searchedType === "artists") {
      dispatch(getSearchedArtists(searchedTerm));
      dispatch(removeSelectedArtist());
    }
  }, [searchedTerm, searchedType, dispatch]);

  return (
    <div>
      {searchedArtistsLoading && <LoadingSpinner />}
      {searchedArtists && <ArtistsList artists={searchedArtists} />}
      {selectedArtistLoading && <LoadingSpinner />}
      {selectedArtist && <ArtistInfo selectedArtist={selectedArtist} />}
      {artistTopTracksLoading && <LoadingSpinner />}
      {artistTopTracks?.length > 0 && (
        <TopTracks artistTopTracks={artistTopTracks} />
      )}
      {relatedArtistsLoading && <LoadingSpinner />}
      {relatedArtists?.length > 0 && (
        <RelatedArtists relatedArtists={relatedArtists} />
      )}
    </div>
  );
};

export default SearchArtistsResult;
