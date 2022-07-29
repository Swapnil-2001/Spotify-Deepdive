import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import spotify, { isAccessTokenValid } from "../../utils/functions";
import { getUserProfile } from "../../features/user/userFunctions";
import User from "../../components/User/User";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userProfile, userLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAccessTokenValid()) {
      localStorage.clear();
      navigate("/login");
    } else {
      const accessToken = localStorage.getItem("access_token");
      spotify.setAccessToken(accessToken);
      dispatch(getUserProfile());
    }
  }, [navigate, dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/${searchTerm}`);
  };

  return (
    <div>
      {userLoading && "Loading"}
      {userProfile && <User userProfile={userProfile} />}
      <form onSubmit={handleSearch}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </div>
  );
};

export default HomePage;
