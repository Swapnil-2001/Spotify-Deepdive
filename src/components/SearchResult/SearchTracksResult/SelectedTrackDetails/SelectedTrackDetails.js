import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectArtist } from "../../../../utils/functions";
import "./SelectedTrackDetails.scss";

const SelectedTrackDetails = ({ tracksRef, trackDetails }) => {
  const { trackName, artistName, artistId, trackImgUrl, preview_url } =
    trackDetails;
  const [playPreview, setPlayPreview] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div ref={tracksRef} className="selected_track_details_div">
      <div className="track_img_div">
        <img src={trackImgUrl} alt="Track" className="selected_track_img" />
      </div>
      <div className="selected_track_name_and_artist">
        <h1 className="selected_track_name">{trackName}</h1>
        <div className="selected_track_artist_div">
          <h2 className="selected_track_artist_name">{artistName}</h2>
          <button
            onClick={() => selectArtist(dispatch, navigate, artistId, true)}
            className="styled_button"
          >
            More
          </button>
        </div>
      </div>
      {playPreview && <audio src={preview_url} autoPlay hidden={true} />}
      {preview_url && (
        <button
          style={{ marginLeft: "auto" }}
          className="styled_button"
          onClick={() => setPlayPreview(!playPreview)}
        >
          {playPreview ? "Stop" : "Play"}
        </button>
      )}
    </div>
  );
};

export default SelectedTrackDetails;
