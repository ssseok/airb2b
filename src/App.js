import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Signup from "./pages/Signup";
import HeaderAside from "./components/HeaderAside";
import Header from "./components/Header";
import Main from "./components/Main";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <HeaderAside />
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
      {/* <Experience />
      <MainBottom />
      <Footer /> */}
    </HistoryRouter>
  );
}

export default App;
