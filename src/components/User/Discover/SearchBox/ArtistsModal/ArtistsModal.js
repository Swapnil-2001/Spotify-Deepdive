import { useSelector, useDispatch } from "react-redux";

import {
  addArtist,
  removeArtist,
} from "../../../../../features/user/userSlice";
import DEFAULT_IMAGE from "../../../../../assets/music.png";
import "./ArtistsModal.scss";

const ArtistsModal = () => {
  const dispatch = useDispatch();
  const { userTopArtists, chosenArtists } = useSelector((state) => state.user);

  const handleArtistChosen = (artist) => {
    const hasArtistBeenChosen =
      chosenArtists.filter((chosenArtist) => artist.id === chosenArtist.id)
        .length > 0;
    if (hasArtistBeenChosen) {
      dispatch(removeArtist(artist.id));
    } else if (chosenArtists.length < 2) {
      dispatch(addArtist(artist));
    }
  };

  return (
    <div className="modal">
      <h3 className="select_artists_heading">Select Artists (upto 2)</h3>
      {chosenArtists.length > 0 && (
        <div className="chosen_artists_div">
          {chosenArtists.map((chosenArtist) => (
            <span className="chosen_artist" key={chosenArtist.id}>
              {chosenArtist.name.length > 20
                ? chosenArtist.name.substring(0, 20) + "..."
                : chosenArtist.name}
            </span>
          ))}
        </div>
      )}
      <div className="top_artists_list_modal">
        {userTopArtists.map((artist) => (
          <div
            onClick={() => handleArtistChosen(artist)}
            className={`artist_in_modal ${
              chosenArtists.filter(
                (chosenArtist) => artist.id === chosenArtist.id
              ).length > 0
                ? "chosen"
                : "not_chosen"
            }`}
            key={artist.id}
          >
            {artist.images?.length > 0 ? (
              <img
                className="artist_img_modal"
                src={artist.images[0].url}
                alt="Artist"
              />
            ) : (
              <img
                className="artist_img_modal"
                src={DEFAULT_IMAGE}
                alt="Artist"
              />
            )}
            <span className="artist_name_modal">{artist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsModal;
