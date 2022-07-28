import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import RedirectPage from "./components/Redirect/RedirectPage";
import HomePage from "./components/Home/HomePage";
import spotify from "./utils/functions";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("authParams")) {
      const authParams = JSON.parse(localStorage.getItem("authParams"));
      spotify.setAccessToken(authParams.access_token);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="redirect" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
