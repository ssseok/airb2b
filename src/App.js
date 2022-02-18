import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
