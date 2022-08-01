import { useSelector } from "react-redux";

import ArtistsList from "../../../Lists/ArtistsList/ArtistsList";
import "./RelatedArtists.scss";

const RelatedArtists = () => {
  const { relatedArtists } = useSelector((state) => state.searchedArtists);

  return (
    <>
      {relatedArtists?.length > 0 && (
        <h2 className="related_artists_heading">Related Artists</h2>
      )}
      <ArtistsList artists={relatedArtists} />
    </>
  );
};

export default RelatedArtists;
