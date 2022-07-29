import DEFAULT_TRACK_PICTURE from "../../../../assets/music.png";
import "./SelectedAlbum.css";

const SelectedAlbum = ({ album }) => {
  return (
    <div className="all_tracks_in_album">
      {album.tracks?.items?.map(({ id }) => (
        <div key={id}>
          {album.images?.length > 0 ? (
            <img src={album.images[0].url} alt="Track" />
          ) : (
            <img src={DEFAULT_TRACK_PICTURE} alt="Track" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectedAlbum;
