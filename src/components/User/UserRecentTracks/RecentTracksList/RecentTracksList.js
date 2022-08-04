import UserTrack from "../../UserTrack/UserTrack";
import "./RecentTracksList.scss";

const RecentTracksList = ({ tracks }) => {
  return (
    <div className="user_recent_tracks_div">
      <h1 style={{ marginBottom: "30px" }}>Your Recently Played Tracks</h1>
      <div>
        {tracks.map(({ track, played_at }) => (
          <span key={played_at}>
            <UserTrack track={track} played_at={played_at} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecentTracksList;
