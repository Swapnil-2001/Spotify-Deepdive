import ArtistsList from "../../../Lists/ArtistsList/ArtistsList";
import "./RelatedArtists.scss";

const RelatedArtists = ({ relatedArtists }) => {
  return (
    <>
      <h2 className="related_artists_heading">Related Artists</h2>
      <ArtistsList artists={relatedArtists} />
    </>
  );
};

export default RelatedArtists;
