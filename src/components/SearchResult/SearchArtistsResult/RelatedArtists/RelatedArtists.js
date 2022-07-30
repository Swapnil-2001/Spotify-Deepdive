import { useSelector } from "react-redux";

import ArtistsList from "../../../Lists/ArtistsList/ArtistsList";
import "./RelatedArtists.css";

const RelatedArtists = () => {
  const { relatedArtists } = useSelector((state) => state.searchedArtists);

  return <ArtistsList artists={relatedArtists} />;
};

export default RelatedArtists;
