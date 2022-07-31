import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedAlbums } from "../../../features/search/searchedAlbums/searchedAlbumsFunctions";
import { addSearchedType } from "../../../features/search/searchedTerm/searchedTermSlice";
import SelectedAlbum from "./SelectedAlbum/SelectedAlbum";
import AlbumsList from "../../Lists/AlbumsList/AlbumsList";

const SearchAlbumsResult = () => {
  const dispatch = useDispatch();
  const { searchedAlbums } = useSelector((state) => state.searchedAlbums);
  const { searchedTerm, searchedType } = useSelector(
    (state) => state.searchedTerm
  );

  useEffect(() => {
    dispatch(addSearchedType("albums"));
    if (searchedTerm !== "" && searchedType === "albums")
      dispatch(getSearchedAlbums(searchedTerm));
  }, [searchedTerm, searchedType, searchedAlbums, dispatch]);

  return (
    <div>
      {searchedAlbums && <AlbumsList albums={searchedAlbums} />}
      <SelectedAlbum />
    </div>
  );
};

export default SearchAlbumsResult;
