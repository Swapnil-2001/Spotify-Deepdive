import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import RedirectPage from "./pages/Redirect/RedirectPage";
import HomePage from "./pages/Home/HomePage";
import UserItems from "./pages/UserItems/UserItems";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserRecentTracks from "./components/User/UserRecentTracks/UserRecentTracks";
import UserTopArtists from "./components/User/UserTopArtists/UserTopArtists";
import UserTopTracks from "./components/User/UserTopTracks/UserTopTracks";
import SearchTracksResult from "./components/SearchResult/SearchTracksResult/SearchTracksResult";
import SearchAlbumsResult from "./components/SearchResult/SearchAlbumsResult/SearchAlbumsResult";
import SearchArtistsResult from "./components/SearchResult/SearchArtistsResult/SearchArtistsResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="tracks" element={<SearchTracksResult />} />
          <Route path="albums" element={<SearchAlbumsResult />} />
          <Route path="artists" element={<SearchArtistsResult />} />
        </Route>
        <Route path="me" element={<UserItems />}>
          <Route path="tracks" element={<UserTopTracks />} />
          <Route path="artists" element={<UserTopArtists />} />
          <Route path="recent" element={<UserRecentTracks />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="redirect" element={<RedirectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
