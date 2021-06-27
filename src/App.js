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
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MemberPage from "./pages/MemberPage";
import PrivateRoute from "./guard/auth";
import UserStoreProvider from "./context/UserContext";
// redux setup
import { Provider } from "react-redux";

//thunk
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// const store = createStore(rootReducer, applyMiddleware(thunk));

// import { createStore } from "redux";
// import rootReducer from "./redux/reducers/index";
import CartPage from "./pages/CartPage";
// const store = createStore(rootReducer); //old dont use persist
import configureStore from "./redux/configureStore";
import PdfReport from "./pages/report/PdfReport";
import ChartReport from "./pages/report/ChartReport";
const { store } = configureStore();
const queryClient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
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
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/cart">
                  <CartPage />
                </Route>
                <Route path="/pdf">
                  <PdfReport />
                </Route>
                <Route path="/chart">
                  <ChartReport />
                </Route>
                <PrivateRoute path="/member">
                  <MemberPage />
                </PrivateRoute>
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
      </UserStoreProvider>
    </Provider>
  );
}

export default App;
