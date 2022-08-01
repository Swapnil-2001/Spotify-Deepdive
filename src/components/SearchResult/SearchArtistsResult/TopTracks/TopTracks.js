import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";

import TracksList from "../../../Lists/TracksList/TracksList";

const TopTracks = () => {
  const { artistTopTracks, artistTopTracksLoading } = useSelector(
    (state) => state.searchedArtists
  );
  return (
    <>
      {artistTopTracksLoading && <Audio color="#fff" height={60} width={60} />}
      {artistTopTracks?.length > 0 && (
        <h2
          style={{
            color: "#eeeeee",
          }}
        >
          Top Tracks
        </h2>
      )}
      {artistTopTracks?.length > 0 && <TracksList tracks={artistTopTracks} />}
    </>
  );
};

export default TopTracks;
