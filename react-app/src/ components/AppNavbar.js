import React, { Component } from "react";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class AppNavbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/category">Category</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/expense">Expense</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/user">User</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
