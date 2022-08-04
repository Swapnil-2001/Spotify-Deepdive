import TracksList from "../../../Lists/TracksList/TracksList";

const TopTracks = ({ artistTopTracks }) => {
  return (
    <>
      <h2 style={{ color: "#eeeeee" }}>Top Tracks</h2>
      <TracksList removePreviousTracks={true} tracks={artistTopTracks} />
    </>
  );
};

export default TopTracks;
