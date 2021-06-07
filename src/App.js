import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBer from "./components/NavBer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";

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
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/detail/:id/title/:title">
            <DetailPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
