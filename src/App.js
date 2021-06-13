import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "react-toast-notifications";
import Footer from "./components/Footer";
import NavBer from "./components/NavBer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import HospitalPage from "./pages/hospital/HospitalPage";
import IndexPage from "./pages/category/IndexPage";
import CreatePage from "./pages/category/CreatePage";
import EditPage from "./pages/category/EditPage";
import UplodePage from "./pages/UplodePage";
const queryClient = new QueryClient();
function App() {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
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
            <Route path="/hospital">
              <HospitalPage />
            </Route>
            <Route path="/upload">
              <UplodePage />
            </Route>
            <Route
              path="/category"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} exact>
                    <IndexPage />
                  </Route>
                  <Route path={`${url}/create`} exact>
                    <CreatePage />
                  </Route>
                  <Route path={`${url}/edit/:id`} exact>
                    <EditPage />
                  </Route>
                </>
              )}
            ></Route>
          </Switch>
          <Footer />
        </Router>
      </QueryClientProvider>
    </ToastProvider>
  );
}

export default App;
