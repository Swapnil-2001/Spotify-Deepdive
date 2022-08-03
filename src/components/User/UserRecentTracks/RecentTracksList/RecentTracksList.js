import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addSearchedTerm } from "../../../../features/search/searchedTerm/searchedTermSlice";
import { setSelectedTrackDetails } from "../../../../features/search/searchedTracks/searchedTracksSlice";
import DEFAULT_TRACK_PICTURE from "../../../../assets/music.png";
import "./RecentTracksList.scss";

const RecentTracksList = ({ tracks }) => {
  const [previewUrl, setPreviewUrl] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectTrack = (artists, album, name, id) => {
    const trackDetails = {
      trackId: id,
      trackName: name,
      artistId: artists?.length > 0 ? artists[0].id : null,
      artistName: artists?.length > 0 ? artists[0].name : null,
      trackImgUrl: "",
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
    <div className="recent_tracks_header">
      <h1 style={{ marginBottom: "30px" }}>Your Recently Played Tracks</h1>
      {previewUrl.length > 0 && (
        <audio src={previewUrl} autoPlay hidden={true} />
      )}
      <div>
        {tracks.map(({ track, played_at }) => (
          <div
            key={played_at}
            onMouseEnter={() => {
              if (track?.preview_url) setPreviewUrl(track.preview_url);
            }}
            onMouseLeave={() => setPreviewUrl("")}
            className="individual_track_recent"
            onClick={() =>
              selectTrack(track?.artists, track?.album, track?.name, track?.id)
            }
          >
            {track?.album?.images?.length > 0 ? (
              <img
                src={track.album.images[0].url}
                alt="Track"
                className="track_img"
              />
            ) : (
              <img
                src={DEFAULT_TRACK_PICTURE}
                alt="Track"
                className="track_img"
              />
            )}
            <div>
              <div className="track_name">{track?.name}</div>
              <div className="track_artist">
                {track?.artists?.length > 0 && track.artists[0].name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTracksList;
