import { useNavigate } from "react-router-dom";

import "./User.scss";

const User = ({ userProfile }) => {
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate("me/recent");
  };

  return (
    <div className="user_name_div">
      <h1>Hello, {userProfile.display_name}</h1>
      <button onClick={goToUserPage} className="search_button">
        For You
      </button>
    </div>
  );
};

export default User;
