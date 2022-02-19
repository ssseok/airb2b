import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderAside from "./components/HeaderAside";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <HeaderAside />
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
      <Footer />
    </HistoryRouter>
  );
}

export default App;
