import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectArtist } from "../../../utils/functions";
import "./ArtistsList.scss";

const ArtistsList = ({ artists, removePreviousArtists }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="artists_list_div">
      {artists
        ?.filter(({ images }) => images?.length > 0)
        .map(({ id, images }) => (
          <div key={id} className="individual_artist_in_list">
            <img className="artist_img" src={images[0].url} alt="Artist" />
            <button
              className="styled_button"
              onClick={() =>
                selectArtist(dispatch, navigate, id, removePreviousArtists)
              }
            >
              Learn More
            </button>
          </div>
        ))}
    </div>
  );
};

export default ArtistsList;
