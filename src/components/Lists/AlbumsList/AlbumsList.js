import { useNavigate } from "react-router-dom";

import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./AlbumsList.css";

const AlbumsList = ({ albums }) => {
  const navigate = useNavigate();

  const selectAlbum = (albumId) => {
    navigate(`/album/${albumId}`);
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
            <img src={DEFAULT_TRACK_PICTURE} alt="Album Cover" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
