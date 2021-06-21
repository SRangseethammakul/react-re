import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
// import { UserStoreContext } from "../context/UserContext";
//redux
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/authAction";
const NavBer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [profile, setProfile] = React.useState(null);
  // const userStore = React.useContext(UserStoreContext);

  //redux
  const profileRedux = useSelector((state) => state.authReducer.profile);

  // const getProfile = () => {
  //   const profileValue = JSON.parse(localStorage.getItem("profile"));
  //   if (profileValue) {
  //     setProfile(profileValue);
  //   }
  // };
  // const getProfile = () => {
  //   const profileValue = JSON.parse(localStorage.getItem("profile"));
  //   if (profileValue) {
  //     userStore.updateProfile(profileValue);
  //     // setProfile(profileValue);
  //   }
  // };
  // React.useEffect(() => {
  //   // console.log("use effect navbar");
  //   getProfile();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  //redux below
  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem("profile"));
    if (profileValue) {
      dispatch(updateProfile(profileValue));
    }
  };
  React.useEffect(() => {
    // console.log("use effect navbar");
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    history.replace("/");
    // history.go(0);
    dispatch(updateProfile(null));
    // userStore.updateProfile(null);
  };
  return (
    <>
      <Navbar bg="success" expand="lg" variant="dark">
        <NavLink className="navbar-brand" to="/" exact>
          <img
            alt=""
            src="./logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Suttipong
        </NavLink>
        {/* <Navbar.Brand>
          <img
            alt=""
            src="./logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          React Bootstrap
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink
              to="/product"
              className="nav-link"
              activeClassName="active"
            >
              Product
            </NavLink>
            <NavDropdown title="Workshop" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/hospital");
                }}
              >
                Hospital (Pagination)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  history.replace("/category");
                }}
              >
                NEWS (CRUD)
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/upload" className="nav-link" activeClassName="active">
              Upload Image
            </NavLink>
            <NavLink to="/member" className="nav-link" activeClassName="active">
              Member
            </NavLink>
          </Nav>
          <Nav>
            {profileRedux ? (
              <span className="navbar-text text-white">
                Welcome {profileRedux.name}, Role: {profileRedux.role}{" "}
                <button className="btn btn-danger ml-2" onClick={logout}>
                  Log out
                </button>
              </span>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className="nav-link"
                  activeClassName="active"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </>
            )}
          </Nav>

          {/* use context
                    <Nav>
            {userStore.profile ? (
              <span className="navbar-text text-white">
                Welcome {userStore.profile.name}, Role: {userStore.profile.role}{" "}
                <button className="btn btn-danger ml-2" onClick={logout}>
                  Log out
                </button>
              </span>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className="nav-link"
                  activeClassName="active"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </>
            )}
          </Nav>
           */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBer;
