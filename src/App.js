import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import RedirectPage from "./components/Redirect/RedirectPage";
import HomePage from "./components/Home/HomePage";

const App = () => {
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
