import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import HeaderAside from "./components/HeaderAside";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <HeaderAside />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </HistoryRouter>
  );
}

export default App;
