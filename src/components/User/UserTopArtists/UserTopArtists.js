import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setPage } from "../../../features/user/userSlice";

const UserTopArtists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("artists"));
  }, [dispatch]);

  return <div>UserTopArtists</div>;
};

export default UserTopArtists;
