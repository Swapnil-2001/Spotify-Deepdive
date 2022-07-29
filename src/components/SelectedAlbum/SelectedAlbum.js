import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DEFAULT_TRACK_PICTURE from "../../assets/music.png";
import { setSelectedAlbum } from "../../features/search/searchedAlbums/searchedAlbumsFunctions";
import { removeSelectedAlbum } from "../../features/search/searchedAlbums/searchedAlbumsSlice";
import "./SelectedAlbum.css";

const SelectedAlbum = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const { selectedAlbum, selectedAlbumLoading } = useSelector(
    (state) => state.searchedAlbums
  );

  useEffect(() => {
    dispatch(removeSelectedAlbum());
    dispatch(setSelectedAlbum(albumId));
  }, [dispatch, albumId]);

  return (
    <div className="all_tracks_in_album">
      {selectedAlbumLoading && <div>Loading</div>}
      {selectedAlbum?.tracks?.items?.map(({ id }) => (
        <div key={id}>
          {selectedAlbum.images?.length > 0 ? (
            <img src={selectedAlbum.images[0].url} alt="Track" />
          ) : (
            <img src={DEFAULT_TRACK_PICTURE} alt="Track" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectedAlbum;
