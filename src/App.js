import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Signup from "./pages/Signup";
import Auth from "./components/Auth";
// import Footer from "./components/Footer";

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
      {/* <Footer /> */}
    </HistoryRouter>
  );
}

export default App;
