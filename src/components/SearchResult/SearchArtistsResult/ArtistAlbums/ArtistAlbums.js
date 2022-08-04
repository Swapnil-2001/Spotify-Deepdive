import AlbumsList from "../../../Lists/AlbumsList/AlbumsList";

const ArtistAlbums = ({ artistAlbums }) => {
  return (
    <div>
      <h2 style={{ color: "#eeeeee", marginBottom: "10px", marginTop: "25px" }}>
        Albums
      </h2>
      <AlbumsList removePreviousAlbums={true} albums={artistAlbums} />
    </div>
  );
};

export default ArtistAlbums;
