import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import Auth from "./components/Auth";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <header>
        <Auth />
      </header>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
