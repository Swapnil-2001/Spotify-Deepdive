import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserTopArtists } from "../../../features/user/userFunctions";
import { setPage } from "../../../features/user/userSlice";
import LoadingSpinner from "../../LoadingSpinner";

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

  return <div>{userTopArtistsLoading && <LoadingSpinner />}</div>;
};

export default UserTopArtists;
