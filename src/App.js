import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import RedirectPage from "./pages/Redirect/RedirectPage";
import HomePage from "./pages/Home/HomePage";
import SearchResult from "./components/SearchResult/SearchResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path=":searchTerm" element={<SearchResult />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="redirect" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
