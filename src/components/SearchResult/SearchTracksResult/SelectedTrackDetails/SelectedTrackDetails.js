import "./SelectedTrackDetails.scss";

const SelectedTrackDetails = ({ trackDetails }) => {
  const { trackName, artistName, trackImgUrl } = trackDetails;

  return (
    <div className="selected_track_details_div">
      <div className="track_img">
        <img src={trackImgUrl} alt="Track" />
      </div>
      <div className="track_name_and_artist">
        <h1>{trackName}</h1>
        <h2>{artistName}</h2>
      </div>
    </div>
  );
};

export default SelectedTrackDetails;
