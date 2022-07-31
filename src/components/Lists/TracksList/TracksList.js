import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";

import { setSelectedTrackDetails } from "../../../features/search/searchedTracks/searchedTracksSlice";
import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./TracksList.scss";

const TracksList = ({ tracks }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  // {
  //    artists: {
  //        name
  //        id
  //    }
  // }
  const dispatch = useDispatch();

  const selectTrack = (artists, album, name) => {
    const trackDetails = {
      trackName: name,
      artistId: artists?.length > 0 ? artists[0].id : null,
      artistName: artists?.length > 0 ? artists[0].name : null,
      trackImgUrl: "",
    };
    if (!trackDetails.artistId || !trackDetails.artistName) return;
    if (album?.images?.length > 0) {
      trackDetails.trackImgUrl = album.images[0].url;
    }
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
          onClick={() => selectTrack(artists, album, name)}
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
