import TracksList from "../../../Lists/TracksList/TracksList";

const RecommendedTracks = ({ tracks }) => {
  return (
    <div>
      <h2 style={{ marginTop: "30px", marginBottom: "10px" }}>
        Recommended Tracks
      </h2>
      <TracksList tracks={tracks} removePreviousTracks={false} />
    </div>
  );
};

export default RecommendedTracks;
