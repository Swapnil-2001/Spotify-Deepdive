import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SelectedAlbum from "./SelectedAlbum/SelectedAlbum";
import { setSelectedAlbum } from "../../../features/search/searchedAlbums/searchedAlbumsFunctions";
import { removeSelectedAlbum } from "../../../features/search/searchedAlbums/searchedAlbumsSlice";
import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./AlbumsList.css";

const AlbumsList = ({ albums }) => {
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const { selectedAlbum, selectedAlbumLoading } = useSelector(
    (state) => state.searchedAlbums
  );

  const dispatch = useDispatch();

  const selectAlbum = (albumId) => {
    dispatch(removeSelectedAlbum());
    dispatch(setSelectedAlbum(albumId));
    setSelectedAlbumId(albumId);
  };

  return (
    <div className="albums_wrapper_div">
      {albums.map((album) => (
        <div
          key={album.id}
          className="individual_album"
          onClick={() => selectAlbum(album.id)}
        >
          {album.images?.length > 0 ? (
            <div>
              <img src={album.images[0].url} alt="Album Cover" />
              {selectedAlbumId === album.id && selectedAlbumLoading && (
                <p>Loading</p>
              )}
              {selectedAlbumId === album.id && selectedAlbum && (
                <SelectedAlbum album={selectedAlbum} />
              )}
            </div>
          ) : (
            <img src={DEFAULT_TRACK_PICTURE} alt="Album Cover" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
