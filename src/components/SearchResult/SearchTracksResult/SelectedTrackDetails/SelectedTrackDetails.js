import { useState } from "react";
import "./SelectedTrackDetails.scss";

const SelectedTrackDetails = ({ tracksRef, trackDetails }) => {
  const [playPreview, setPlayPreview] = useState(false);
  const { trackName, artistName, trackImgUrl, preview_url } = trackDetails;

  return (
    <div ref={tracksRef} className="selected_track_details_div">
      <div className="track_img_div">
        <img src={trackImgUrl} alt="Track" className="selected_track_img" />
      </div>
      <div className="track_name_and_artist">
        <h1>{trackName}</h1>
        <h2>{artistName}</h2>
      </div>
      {playPreview && <audio src={preview_url} autoPlay hidden={true} />}
      {preview_url && (
        <button onClick={() => setPlayPreview(!playPreview)}>Play</button>
      )}
    </div>
  );
};

export default SelectedTrackDetails;
