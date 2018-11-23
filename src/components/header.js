import React from "react";
import DropdownFilter from "./dropdownFilter";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar light color="blue" className="bg-primary mb-4" expand="md">
      <div className="container">
        <NavbarBrand href="/">VWC Weather App</NavbarBrand>
        <Nav navbar>
          <NavItem className="ml-5">
            <DropdownFilter />
          </NavItem>
          <NavItem className="ml-5">
            <NavLink className="nav-link" to="/search">
              Get Weather
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
};
