import { useSelector } from "react-redux";

import DEFAULT_PICTURE from "../../../../assets/music.png";
import "./SelectedAlbum.scss";

const SelectedAlbum = () => {
  const { selectedAlbum, selectedAlbumLoading } = useSelector(
    (state) => state.searchedAlbums
  );

  return (
    <div className="all_tracks_in_album">
      {selectedAlbumLoading && <div>Loading</div>}
      {selectedAlbum?.tracks?.items?.map(({ id }) => (
        <div key={id}>
          {selectedAlbum.images?.length > 0 ? (
            <img src={selectedAlbum.images[0].url} alt="Track" />
          ) : (
            <img src={DEFAULT_PICTURE} alt="Track" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectedAlbum;
