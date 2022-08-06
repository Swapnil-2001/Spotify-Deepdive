import { useDispatch, useSelector } from "react-redux";

import { addTrack, removeTrack } from "../../../../../features/user/userSlice";
import DEFAULT_IMAGE from "../../../../../assets/music.png";
import "./TracksModal.scss";

const TracksModal = () => {
  const dispatch = useDispatch();
  const { chosenTracks, userTopTracks } = useSelector((state) => state.user);

  const handleTrackChosen = (track) => {
    const hasTrackBeenChosen =
      chosenTracks.filter((chosenTrack) => track.id === chosenTrack.id).length >
      0;
    if (hasTrackBeenChosen) {
      dispatch(removeTrack(track.id));
    } else if (chosenTracks.length < 2) {
      dispatch(addTrack(track));
    }
  };

  return (
    <div className="modal">
      <h3 className="select_tracks_heading">Select Tracks (upto 2)</h3>
      {chosenTracks.length > 0 && (
        <div className="chosen_tracks_div">
          {chosenTracks.map((chosenArtist) => (
            <span className="chosen_track" key={chosenArtist.id}>
              {chosenArtist.name.length > 20
                ? chosenArtist.name.substring(0, 20) + "..."
                : chosenArtist.name}
            </span>
          ))}
        </div>
      )}
      <div className="top_tracks_list_modal">
        {userTopTracks.map((track) => (
          <div
            onClick={() => handleTrackChosen(track)}
            className={`artist_in_modal ${
              chosenTracks.filter(
                (chosenArtist) => track.id === chosenArtist.id
              ).length > 0
                ? "chosen"
                : "not_chosen"
            }`}
            key={track.id}
          >
            {track.album?.images?.length > 0 ? (
              <img
                className="artist_img_modal"
                src={track.album.images[0].url}
                alt="Artist"
              />
            ) : (
              <img
                className="artist_img_modal"
                src={DEFAULT_IMAGE}
                alt="Artist"
              />
            )}
            <span className="artist_name_modal">
              {track.name.length > 40
                ? track.name.substring(0, 40) + "..."
                : track.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TracksModal;
