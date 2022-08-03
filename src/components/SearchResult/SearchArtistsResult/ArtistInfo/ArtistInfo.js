import "./ArtistInfo.scss";

const ArtistInfo = ({ artistsRef, selectedArtist }) => {
  return (
    <div ref={artistsRef} className="artist_info_div">
      {selectedArtist.images?.length > 0 && (
        <img src={selectedArtist.images[0].url} alt="Artist" />
      )}
      <div>
        <h2>{selectedArtist.name}</h2>
        {selectedArtist.genres?.length > 0 && (
          <h4>{selectedArtist.genres.join(", ")}</h4>
        )}
        <h3>{selectedArtist.followers.total.toLocaleString()} followers</h3>
      </div>
    </div>
  );
};

export default ArtistInfo;
