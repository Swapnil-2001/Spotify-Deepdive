import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addSearchedTerm } from "../../../features/search/searchedTerm/searchedTermSlice";
import {
  removeSearchedTracks,
  setSelectedTrackDetails,
} from "../../../features/search/searchedTracks/searchedTracksSlice";
import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./UserTrack.scss";

const UserTrack = ({ track, played_at }) => {
  const [previewUrl, setPreviewUrl] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectTrack = (artists, album, name, id, preview_url) => {
    dispatch(removeSearchedTracks());
    const trackDetails = {
      trackId: id,
      trackName: name,
      artistId: artists?.length > 0 ? artists[0].id : null,
      artistName: artists?.length > 0 ? artists[0].name : null,
      trackImgUrl: "",
      preview_url,
    };
    if (!trackDetails.artistId || !trackDetails.artistName) return;
    if (album?.images?.length > 0) {
      trackDetails.trackImgUrl = album.images[0].url;
    }
    dispatch(addSearchedTerm(""));
    navigate("/tracks");
    dispatch(setSelectedTrackDetails(trackDetails));
  };

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
        className="individual_track_recent"
        onClick={() =>
          selectTrack(
            track?.artists,
            track?.album,
            track?.name,
            track?.id,
            track?.preview_url
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
