import { useSelector } from "react-redux";

import DEFAULT_IMAGE from "../../../../../assets/music.png";
import "./ArtistsModal.scss";

const ArtistsModal = () => {
  const { userTopArtists } = useSelector((state) => state.user);

  return (
    <div className="modal">
      <h3 className="select_artists_heading">Select Artists (upto 5)</h3>
      <div className="top_artists_list_modal">
        {userTopArtists.map(({ id, images, name }) => (
          <div className="artist_in_modal" key={id}>
            {images?.length > 0 ? (
              <img
                className="artist_img_modal"
                src={images[0].url}
                alt="Artist"
              />
            ) : (
              <img
                className="artist_img_modal"
                src={DEFAULT_IMAGE}
                alt="Artist"
              />
            )}
            <span className="artist_name_modal">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsModal;
