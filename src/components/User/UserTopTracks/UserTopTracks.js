import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../../LoadingSpinner";
import UserTopTracksList from "./UserTopTracksList/UserTopTracksList";
import { getUserTopTracks } from "../../../features/user/userFunctions";
import { setPage } from "../../../features/user/userSlice";

const UserTopTracks = () => {
  const dispatch = useDispatch();
  const { userTopTracks, userTopTracksLoading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(setPage("tracks"));
    if (!userTopTracks || userTopTracks.length === 0) {
      dispatch(getUserTopTracks());
    }
  }, [userTopTracks, dispatch]);

  return (
    <div>
      {userTopTracksLoading && <LoadingSpinner />}
      {userTopTracks?.length > 0 && (
        <UserTopTracksList tracks={userTopTracks} />
      )}
    </div>
  );
};

export default UserTopTracks;
