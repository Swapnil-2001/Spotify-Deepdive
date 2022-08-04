import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  removeSearchedTracks,
  setSelectedTrackDetails,
} from "../../../features/search/searchedTracks/searchedTracksSlice";
import { addSearchedTerm } from "../../../features/search/searchedTerm/searchedTermSlice";
import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./TracksList.scss";

const TracksList = ({ tracks, removePreviousTracks }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectTrack = (artists, album, name, id, preview_url) => {
    if (removePreviousTracks) dispatch(removeSearchedTracks());
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
    <div className="tracks_wrapper_div">
      {previewUrl.length > 0 && (
        <audio src={previewUrl} autoPlay hidden={true} />
      )}
      {tracks.map(({ id, album, preview_url, name, artists }) => (
        <div
          key={id}
          className="individual_track"
          onClick={() => selectTrack(artists, album, name, id, preview_url)}
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
