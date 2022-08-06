import { useDispatch, useSelector } from "react-redux";

import {
  setPickArtists,
  setPickGenre,
  setPickTracks,
  removeArtist,
  removeTrack,
  removeGenre,
} from "../../../../features/user/userSlice";
import "./SearchBox.scss";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { chosenArtists, chosenTracks, chosenGenre } = useSelector(
    (state) => state.user
  );

  const handleAddGenre = () => {
    dispatch(setPickGenre(true));
  };

  const handleAddArtists = () => {
    dispatch(setPickArtists(true));
  };

  const handleAddTracks = () => {
    dispatch(setPickTracks(true));
  };

  const removeChosenArtist = (artistId) => {
    dispatch(removeArtist(artistId));
  };

  const removeChosenTrack = (trackId) => {
    dispatch(removeTrack(trackId));
  };

  const removeChosenGenre = () => {
    dispatch(removeGenre());
  };

  return (
    <div className="search_box_outer_div">
      <h2 className="heading">Pick a Genre</h2>
      {chosenGenre.length > 0 && (
        <div style={{ marginBottom: "25px" }} className="chosen_item_search">
          <span className="chosen_item_name">{chosenGenre}</span>
          <span onClick={() => removeChosenGenre()} className="remove_button">
            X
          </span>
        </div>
      )}
      <button onClick={handleAddGenre} className="styled_button">
        Add a Genre
      </button>
      <h2 className="heading">Pick Artists (max. 2)</h2>
      {chosenArtists.length > 0 && (
        <div className="chosen_items_div_search">
          {chosenArtists.map(({ name, id }) => (
            <div className="chosen_item_search" key={id}>
              <span className="chosen_item_name">{name}</span>
              <span
                onClick={() => removeChosenArtist(id)}
                className="remove_button"
              >
                X
              </span>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleAddArtists} className="styled_button">
        Add Artists
      </button>
      <h2 className="heading">Pick Tracks (max. 2)</h2>
      {chosenTracks.length > 0 && (
        <div className="chosen_items_div_search">
          {chosenTracks.map(({ name, id }) => (
            <div className="chosen_item_search" key={id}>
              <span className="chosen_item_name">{name}</span>
              <span
                onClick={() => removeChosenTrack(id)}
                className="remove_button"
              >
                X
              </span>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleAddTracks} className="styled_button">
        Add Tracks
      </button>
    </div>
  );
};

export default SearchBox;
