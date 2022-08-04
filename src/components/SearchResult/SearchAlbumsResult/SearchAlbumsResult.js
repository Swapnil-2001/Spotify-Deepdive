import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../LoadingSpinner";

import { getSearchedAlbums } from "../../../features/search/searchedAlbums/searchedAlbumsFunctions";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import SelectedAlbum from "./SelectedAlbum/SelectedAlbum";
import AlbumsList from "../../Lists/AlbumsList/AlbumsList";

const SearchAlbumsResult = () => {
  const dispatch = useDispatch();
  const {
    searchedAlbums,
    searchedAlbumsLoading,
    selectedAlbum,
    selectedAlbumLoading,
  } = useSelector((state) => state.searchedAlbums);
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  const albumsRef = useRef(null);
  const scrollToView = () => {
    albumsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToView();
  }, [selectedAlbum]);

  useEffect(() => {
    dispatch(addSearchedType("albums"));
    if (searchedTerm !== "" && searchedType === "albums")
      dispatch(getSearchedAlbums(searchedTerm));
  }, [searchedTerm, searchedType, dispatch]);

  return (
    <div>
      {searchedAlbumsLoading && <LoadingSpinner />}
      {searchedAlbums && (
        <AlbumsList removePreviousAlbums={false} albums={searchedAlbums} />
      )}
      {selectedAlbumLoading && <LoadingSpinner />}
      {selectedAlbum && (
        <SelectedAlbum albumsRef={albumsRef} selectedAlbum={selectedAlbum} />
      )}
    </div>
  );
};

export default SearchAlbumsResult;
