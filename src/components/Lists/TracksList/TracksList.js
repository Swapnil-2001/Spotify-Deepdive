import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectTrack } from "../../../utils/functions";
import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./TracksList.scss";

const TracksList = ({ tracks, removePreviousTracks }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="tracks_list_div">
      {previewUrl.length > 0 && (
        <audio src={previewUrl} autoPlay hidden={true} />
      )}
      {tracks.map(({ id, album, preview_url, name, artists }) => (
        <div
          key={id}
          className="individual_track_in_list"
          onClick={() =>
            selectTrack(
              dispatch,
              navigate,
              artists,
              album?.images,
              name,
              id,
              preview_url,
              removePreviousTracks
            )
          }
          onMouseEnter={() => {
            if (preview_url) setPreviewUrl(preview_url);
          }}
          onMouseLeave={() => setPreviewUrl("")}
        >
          {album?.images?.length > 0 ? (
            <img className="track_img" src={album.images[0].url} alt="Track" />
          ) : (
            <img
              className="track_img"
              src={DEFAULT_TRACK_PICTURE}
              alt="Track"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TracksList;
