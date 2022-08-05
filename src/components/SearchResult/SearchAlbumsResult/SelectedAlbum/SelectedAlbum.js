import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { selectTrack } from "../../../../utils/functions";
import DEFAULT_PICTURE from "../../../../assets/music.png";
import "./SelectedAlbum.scss";

const SelectedAlbum = ({ albumsRef, selectedAlbum }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [hoveredTrackId, setHoveredTrackId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div ref={albumsRef} className="all_tracks_in_album_div">
      <div className="album_image_and_name_div">
        <h2 className="album_heading">Album</h2>
        {selectedAlbum.images?.length > 0 ? (
          <img
            className="album_img"
            src={selectedAlbum.images[0].url}
            alt="Album"
          />
        ) : (
          <img className="album_img" src={DEFAULT_PICTURE} alt="Album" />
        )}
        <h2 className="album_name">{selectedAlbum.name}</h2>
        <h4>
          {selectedAlbum.artists?.length > 0 && selectedAlbum.artists[0].name}
        </h4>
      </div>
      {previewUrl.length > 0 && (
        <audio src={previewUrl} autoPlay hidden={true} />
      )}
      <div className="track_names_in_album">
        <h2 className="tracks_heading">Tracks</h2>
        {selectedAlbum.tracks?.items?.map(({ id, name, preview_url }) => (
          <div
            onMouseEnter={() => {
              if (preview_url) setPreviewUrl(preview_url);
              setHoveredTrackId(id);
            }}
            onMouseLeave={() => {
              setPreviewUrl("");
              setHoveredTrackId(null);
            }}
            className="individual_track_in_selected_album"
            key={id}
          >
            <span className="track_name_in_selected_album">{name}</span>
            <button
              className={
                id === hoveredTrackId
                  ? "track_info_button"
                  : "track_info_button hide"
              }
              onClick={() =>
                selectTrack(
                  dispatch,
                  navigate,
                  selectedAlbum.artists,
                  selectedAlbum.images,
                  name,
                  id,
                  preview_url,
                  true
                )
              }
            >
              More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedAlbum;
