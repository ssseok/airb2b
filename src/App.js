import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Signup from "./pages/Signup";
import Auth from "./components/Auth";
import Main from "./components/Main";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <header>
        <Auth />
      </header>
      <Main></Main>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
