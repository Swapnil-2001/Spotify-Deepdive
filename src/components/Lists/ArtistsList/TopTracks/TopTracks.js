import { useState } from "react";
import { useSelector } from "react-redux";

import DEFAULT_TRACK_PICTURE from "../../../../assets/music.png";
import "./TopTracks.css";

const TopTracks = () => {
  const [previewUrl, setPreviewUrl] = useState("");

  const { artistTopTracks, artistTopTracksLoading } = useSelector(
    (state) => state.searchedArtists
  );
  return (
    <div>
      {previewUrl.length > 0 && (
        <audio src={previewUrl} autoPlay hidden={true} />
      )}
      {artistTopTracksLoading && <p>Loading top tracks...</p>}
      {artistTopTracks && (
        <div style={{ display: "flex" }}>
          {artistTopTracks.map(({ id, album, preview_url }) => (
            <div
              key={id}
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
      )}
    </div>
  );
};

export default TopTracks;
