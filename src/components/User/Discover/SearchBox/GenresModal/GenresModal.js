import { useDispatch, useSelector } from "react-redux";

import { genres } from "../../../../../utils/constants";
import { addGenre, removeGenre } from "../../../../../features/user/userSlice";
import "./GenresModal.scss";

const GenresModal = () => {
  const dispatch = useDispatch();
  const { chosenGenre } = useSelector((state) => state.user);

  const handleGenreChosen = (genre) => {
    if (chosenGenre === genre) {
      dispatch(removeGenre());
    } else {
      dispatch(addGenre(genre));
    }
  };

  return (
    <div className="modal">
      <h3 className="select_genres_heading">Select a Genre</h3>
      {chosenGenre.length > 0 && (
        <div className="chosen_genre">{chosenGenre}</div>
      )}
      <div className="genres_list_modal">
        {genres.map((genre) => (
          <div
            onClick={() => handleGenreChosen(genre)}
            className={`genre_in_modal ${
              chosenGenre === genre ? "chosen" : "not_chosen"
            }`}
            key={genre}
          >
            <span className="genre_name_modal">{genre}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenresModal;
