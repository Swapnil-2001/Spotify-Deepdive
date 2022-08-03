import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../../../features/user/userSlice";

const UserTopTracks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage("tracks"));
  }, [dispatch]);

  return <div>UserTopTracks</div>;
};

export default UserTopTracks;
