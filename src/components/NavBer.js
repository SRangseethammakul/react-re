import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const NavBer = () => {
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
            <NavLink to="/product" className="nav-link" activeClassName="active">
              Product
            </NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBer;
