import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBer from "./components/NavBer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <NavBer />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/users">
            <AboutPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
