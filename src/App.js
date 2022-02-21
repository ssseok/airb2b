import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "./components/Main";
import HeaderAside from "./components/HeaderAside";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Seoul from "./pages/Seoul";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      {/* <HeaderAside />
      <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/location" element={<Seoul />} />
      </Routes>
      <Footer />
    </HistoryRouter>
  );
}

export default App;
