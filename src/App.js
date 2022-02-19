import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Main2 from "./pages/Main2";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";

export const history = createBrowserHistory();

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Main2 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
