import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { isAccessTokenValid } from "../../utils/functions";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAccessTokenValid()) {
      navigate("/login");
    }
  }, [navigate]);

  return <div>HomePage</div>;
};

export default HomePage;
