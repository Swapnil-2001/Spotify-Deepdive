import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { isAccessTokenValid } from "../../utils/functions";

const UserItems = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserBaseRoute =
      window.location.pathname === "/me" || window.location.pathname === "/me/";
    if (isUserBaseRoute) {
      navigate("recent");
    }
  }, [navigate]);

  useEffect(() => {
    if (!isAccessTokenValid()) {
      localStorage.clear();
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default UserItems;
