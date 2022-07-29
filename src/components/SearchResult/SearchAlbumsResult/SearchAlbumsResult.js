import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSearchedAlbums } from "../../../features/search/searchedAlbums/searchedAlbumsFunctions";
import AlbumsList from "../../Lists/AlbumsList/AlbumsList";

const SearchAlbumsResult = () => {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  const { searchedAlbums } = useSelector((state) => state.searchedAlbums);

  useEffect(() => {
    dispatch(getSearchedAlbums(searchTerm));
  }, [dispatch, searchTerm]);

  return <div>{searchedAlbums && <AlbumsList albums={searchedAlbums} />}</div>;
};

export default SearchAlbumsResult;
