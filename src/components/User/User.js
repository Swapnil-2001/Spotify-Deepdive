import "./User.scss";

const User = ({ userProfile }) => {
  return <h1 className="user_name_div">Hello, {userProfile.display_name}</h1>;
};

export default User;
