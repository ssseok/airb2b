import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Auth from "./components/Auth";
import Main from "./components/Main";
import Signup from "./pages/Signup";

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
