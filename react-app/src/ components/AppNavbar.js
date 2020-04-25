import React, { Component } from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class AppNavbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Category</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components/">Expense</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components/">User</NavLink>
            </NavItem>

            <NavItem></NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
