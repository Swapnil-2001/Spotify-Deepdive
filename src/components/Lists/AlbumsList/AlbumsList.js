import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { removeSelectedAlbum } from "../../../features/search/searchedAlbums/searchedAlbumsSlice";
import { addSearchedTerm } from "../../../features/search/searchedTerm/searchedTermSlice";
import { setSelectedAlbum } from "../../../features/search/searchedAlbums/searchedAlbumsFunctions";
import DEFAULT_PICTURE from "../../../assets/music.png";
import "./AlbumsList.scss";

const AlbumsList = ({ albums }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectAlbum = (albumId) => {
    dispatch(removeSelectedAlbum());
    dispatch(addSearchedTerm(""));
    navigate("/albums");
    dispatch(setSelectedAlbum(albumId));
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
            </div>
          ) : (
            <img src={DEFAULT_PICTURE} alt="Album Cover" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
