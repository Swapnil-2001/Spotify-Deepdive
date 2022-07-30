import { useDispatch } from "react-redux";

import {
  getArtistTopTracks,
  getRelatedArtists,
} from "../../../features/search/searchedArtists/searchedArtistsFunctions";
import { removeSelectedArtist } from "../../../features/search/searchedArtists/searchedArtistsSlice";
import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./ArtistsList.scss";

const ArtistsList = ({ artists }) => {
  const dispatch = useDispatch();

  const selectArtist = (artistId) => {
    dispatch(removeSelectedArtist());
    dispatch(getArtistTopTracks(artistId));
    dispatch(getRelatedArtists(artistId));
  };

  return (
    <div>
      {artists?.map(({ id, images, name }) => (
        <div
          key={id}
          className="individual_artist"
          onClick={() => selectArtist(id)}
        >
          {images?.length > 0 ? (
            <img src={images[0].url} alt="Artist" />
          ) : (
            <img src={DEFAULT_TRACK_PICTURE} alt="Artist" />
          )}
          {name}
        </div>
      ))}
    </div>
  );
};

export default ArtistsList;
