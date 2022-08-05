import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserTopArtists } from "../../../features/user/userFunctions";
import { setPage } from "../../../features/user/userSlice";
import ArtistsList from "../../Lists/ArtistsList/ArtistsList";
import LoadingSpinner from "../../LoadingSpinner";
import "./UserTopArtists.scss";

const UserTopArtists = () => {
  const dispatch = useDispatch();
  const { userTopArtists, userTopArtistsLoading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(setPage("artists"));
    if (!userTopArtists || userTopArtists.length === 0) {
      dispatch(getUserTopArtists());
    }
  }, [userTopArtists, dispatch]);

  return (
    <div className="user_top_artists_div">
      {userTopArtistsLoading && <LoadingSpinner />}
      {userTopArtists?.length > 0 && (
        <div className="user_top_artists_list_div">
          <h1 style={{ marginBottom: "30px" }}>Your Favourite Artists</h1>
          <ArtistsList artists={userTopArtists} removePreviousArtists={true} />
        </div>
      )}
    </div>
  );
};

export default UserTopArtists;
