import "./AlbumsList.css";

const AlbumsList = ({ albums }) => {
  return (
    <div className="albums_wrapper_div">
      {albums.map(({ id, images }) => (
        <div key={id} className="individual_album">
          {images?.length > 0 ? (
            <img src={images[0].url} alt="Album Cover" />
          ) : (
            "Error fetching album!"
          )}
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
