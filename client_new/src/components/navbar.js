import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "../App.scss";

function Navbar() {
  return (
    <Nav id="fishNavbar">
      <NavItem>
        <NavLink href="/" className="nav-link" id="header-title">
          <i className="fas fa-fish"></i> What the Fish?!
        </NavLink>
      </NavItem>
      {/* <NavItem className="ml-auto my-auto">
        <NavLink href="/about" className="nav-link-sub" id="about-link">
          About WTF
        </NavLink>
      </NavItem> */}
    </Nav>
  );
}

export default Navbar;
