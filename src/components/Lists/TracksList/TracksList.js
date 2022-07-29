import { useState } from "react";

import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./TracksList.css";

const TracksList = ({ tracks }) => {
  const [previewUrl, setPreviewUrl] = useState("");

  return (
    <div className="tracks_wrapper_div">
      {previewUrl.length > 0 && (
        <audio src={previewUrl} autoPlay hidden={true} />
      )}
      {tracks.map(({ id, album, preview_url }) => (
        <div
          key={id}
          className="individual_track"
          onMouseEnter={() => {
            if (preview_url) setPreviewUrl(preview_url);
          }}
          onMouseLeave={() => setPreviewUrl("")}
        >
          {album?.images?.length > 0 ? (
            <img src={album.images[0].url} alt="Track" />
          ) : (
            <img src={DEFAULT_TRACK_PICTURE} alt="Track" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TracksList;
