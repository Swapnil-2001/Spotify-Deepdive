import { useNavigate } from "react-router-dom";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not_found_page_div">
      <h2>Oops! The page you're looking for does not exist.</h2>
      <div className="not_found_page_redirect_div">
        <p className="not_found_page_text">Perhaps you'd like to be here: </p>
        <button onClick={() => navigate("/tracks")} className="styled_button">
          Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
