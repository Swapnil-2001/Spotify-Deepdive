import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserRecentTracks } from "../../../features/user/userFunctions";
import RecentTracksList from "./RecentTracksList/RecentTracksList";
import LoadingSpinner from "../../LoadingSpinner";

const UserRecentTracks = () => {
  const dispatch = useDispatch();
  const { userRecentTracks, userRecentTracksLoading } = useSelector(
    (state) => state.user
  );
  console.log(userRecentTracks);

  useEffect(() => {
    if (!userRecentTracks || userRecentTracks.length === 0) {
      dispatch(getUserRecentTracks());
    }
  }, [userRecentTracks, dispatch]);

  return (
    <div>
      {userRecentTracksLoading && <LoadingSpinner />}
      {userRecentTracks?.length > 0 && (
        <RecentTracksList tracks={userRecentTracks} />
      )}
    </div>
  );
};

export default UserRecentTracks;
