import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { isAccessTokenValid } from "../../utils/functions";
import { getUserProfile } from "../../features/user/userFunctions";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAccessTokenValid()) {
      navigate("/login");
    } else {
      dispatch(getUserProfile());
    }
  }, [navigate, dispatch]);

  return <div>HomePage</div>;
};

export default HomePage;
