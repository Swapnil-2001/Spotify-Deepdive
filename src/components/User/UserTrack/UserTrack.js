import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { selectTrack } from "../../../utils/functions";
import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./UserTrack.scss";

const UserTrack = ({ track, played_at }) => {
  const [previewUrl, setPreviewUrl] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {previewUrl.length > 0 && (
        <audio src={previewUrl} autoPlay hidden={true} />
      )}
      <div
        onMouseEnter={() => {
          if (track?.preview_url) setPreviewUrl(track.preview_url);
        }}
        onMouseLeave={() => setPreviewUrl("")}
        className="individual_user_track_div"
        onClick={() =>
          selectTrack(
            dispatch,
            navigate,
            track?.artists,
            track?.album?.images,
            track?.name,
            track?.id,
            track?.preview_url,
            true
          )
        }
      >
        {track?.album?.images?.length > 0 ? (
          <img
            src={track.album.images[0].url}
            alt="Track"
            className="track_img"
          />
        ) : (
          <img src={DEFAULT_TRACK_PICTURE} alt="Track" className="track_img" />
        )}
        <div>
          <div className="track_name">{track?.name}</div>
          <div className="track_artist">
            {track?.artists?.length > 0 && track.artists[0].name}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTrack;
