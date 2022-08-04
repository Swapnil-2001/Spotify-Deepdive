import UserTrack from "../../UserTrack/UserTrack";
import "./UserTopTracksList.scss";

const UserTopTracksList = ({ tracks }) => {
  return (
    <div className="user_top_tracks_div">
      <h1 style={{ marginBottom: "30px" }}>Your Favourite Tracks</h1>
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

export default UserTopTracksList;
