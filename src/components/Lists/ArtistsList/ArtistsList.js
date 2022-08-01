import { useDispatch } from "react-redux";

import {
  getArtist,
  getArtistTopTracks,
  getRelatedArtists,
} from "../../../features/search/searchedArtists/searchedArtistsFunctions";
import { removeSelectedArtist } from "../../../features/search/searchedArtists/searchedArtistsSlice";
import "./ArtistsList.scss";

const ArtistsList = ({ artists }) => {
  const dispatch = useDispatch();

  const selectArtist = (artistId) => {
    dispatch(removeSelectedArtist());
    dispatch(getArtist(artistId));
    dispatch(getArtistTopTracks(artistId));
    dispatch(getRelatedArtists(artistId));
  };

  return (
    <div className="artists_list">
      {artists
        ?.filter(({ images }) => images?.length > 0)
        .map(({ id, images }) => (
          <div className="individual_artist">
            <img src={images[0].url} alt="Artist" />
            <button onClick={() => selectArtist(id)}>Learn More</button>
          </div>
        ))}
    </div>
  );
};

export default ArtistsList;
