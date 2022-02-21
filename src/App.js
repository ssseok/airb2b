import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "./pages/Main";
import List from "./pages/List";
import HeaderAside from "./components/HeaderAside";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <HeaderAside />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </HistoryRouter>
  );
}

export default App;
