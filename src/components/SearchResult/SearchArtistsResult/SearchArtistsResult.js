import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../LoadingSpinner";

import { getSearchedArtists } from "../../../features/search/searchedArtists/searchedArtistsFunctions";
import { removeSelectedArtist } from "../../../features/search/searchedArtists/searchedArtistsSlice";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import ArtistsList from "../../Lists/ArtistsList/ArtistsList";
import ArtistInfo from "./ArtistInfo/ArtistInfo";
import TopTracks from "./TopTracks/TopTracks";
import ArtistAlbums from "./ArtistAlbums/ArtistAlbums";
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
    artistAlbums,
    artistAlbumsLoading,
    relatedArtists,
    relatedArtistsLoading,
  } = useSelector((state) => state.searchedArtists);
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  const artistsRef = useRef(null);
  const scrollToView = () => {
    artistsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (
      selectedArtist &&
      artistTopTracks?.length > 0 &&
      artistAlbums?.length > 0 &&
      relatedArtists?.length > 0
    )
      scrollToView();
  }, [selectedArtist, artistTopTracks, artistAlbums, relatedArtists]);

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
      {selectedArtist && (
        <ArtistInfo artistsRef={artistsRef} selectedArtist={selectedArtist} />
      )}
      {artistTopTracksLoading && <LoadingSpinner />}
      {artistTopTracks?.length > 0 && (
        <TopTracks artistTopTracks={artistTopTracks} />
      )}
      {artistAlbumsLoading && <LoadingSpinner />}
      {artistAlbums?.length > 0 && <ArtistAlbums artistAlbums={artistAlbums} />}
      {relatedArtistsLoading && <LoadingSpinner />}
      {relatedArtists?.length > 0 && (
        <RelatedArtists relatedArtists={relatedArtists} />
      )}
    </div>
  );
};

export default SearchArtistsResult;
