import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import RedirectPage from "./pages/Redirect/RedirectPage";
import HomePage from "./pages/Home/HomePage";
import SearchTracksResult from "./components/SearchResult/SearchTracksResult/SearchTracksResult";
import SearchAlbumsResult from "./components/SearchResult/SearchAlbumsResult/SearchAlbumsResult";
import SelectedAlbum from "./components/SelectedAlbum/SelectedAlbum";
import SearchArtistsResult from "./components/SearchResult/SearchArtistsResult/SearchArtistsResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="tracks/:searchTerm" element={<SearchTracksResult />} />
          <Route path="albums/:searchTerm" element={<SearchAlbumsResult />} />
          <Route path="artists/:searchTerm" element={<SearchArtistsResult />} />
        </Route>
        <Route path="album/:albumId" element={<SelectedAlbum />} />
        <Route path="login" element={<Login />} />
        <Route path="redirect" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
