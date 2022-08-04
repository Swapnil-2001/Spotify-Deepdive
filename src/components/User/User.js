import { useNavigate } from "react-router-dom";

import "./User.scss";

const User = ({ userProfile }) => {
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate("me/recent");
  };

  return (
    <div className="user_name_div">
      <h1 className="user_name">Hello, {userProfile.display_name}</h1>
      <button onClick={goToUserPage} className="styled_button">
        For You
      </button>
    </div>
  );
};

export default User;
