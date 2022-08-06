import { useDispatch } from "react-redux";

import {
  setPickArtists,
  setPickGenres,
  setPickTracks,
} from "../../../../features/user/userSlice";
import "./SearchBox.scss";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleAddGenres = () => {
    dispatch(setPickGenres(true));
  };

  const handleAddArtists = () => {
    dispatch(setPickArtists(true));
  };

  const handleAddTracks = () => {
    dispatch(setPickTracks(true));
  };

  return (
    <div className="search_box_outer_div">
      <h2 className="heading">Pick Genres (max. 5)</h2>
      <button onClick={handleAddGenres} className="styled_button">
        Add Genres
      </button>
      <h2 className="heading">Pick Artists (max. 5)</h2>
      <button onClick={handleAddArtists} className="styled_button">
        Add Artists
      </button>
      <h2 className="heading">Pick Tracks (max. 5)</h2>
      <button onClick={handleAddTracks} className="styled_button">
        Add Tracks
      </button>
    </div>
  );
};

export default SearchBox;
