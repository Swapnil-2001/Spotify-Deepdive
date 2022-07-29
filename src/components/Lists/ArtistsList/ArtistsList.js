import { useDispatch } from "react-redux";

import { getArtistTopTracks } from "../../../features/search/searchedArtists/searchedArtistsFunctions";
import TopTracks from "./TopTracks/TopTracks";
import DEFAULT_TRACK_PICTURE from "../../../assets/music.png";
import "./ArtistsList.css";

const ArtistsList = ({ artists }) => {
  const dispatch = useDispatch();

  const selectArtist = (artistId) => {
    dispatch(getArtistTopTracks(artistId));
  };

  return (
    <div>
      {artists.map(({ id, images, name }) => (
        <div key={id} onClick={() => selectArtist(id)}>
          {images?.length > 0 ? (
            <img src={images[0].url} alt="Artist" />
          ) : (
            <img src={DEFAULT_TRACK_PICTURE} alt="Artist" />
          )}
          {name}
        </div>
      ))}
      <TopTracks />
    </div>
  );
};

export default ArtistsList;
