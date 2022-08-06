import UserTrack from "../../UserTrack/UserTrack";
import "./RecommendedTracks.scss";

const RecommendedTracks = ({ tracks }) => {
  return (
    <div className="user_recommended_tracks_div">
      <h1 style={{ marginBottom: "30px" }}>Recommended Tracks</h1>
      <div>
        {tracks.map((track) => (
          <span key={track.id}>
            <UserTrack track={track} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecommendedTracks;
