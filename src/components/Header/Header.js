import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu } from "./HeaderElements";
import logo from "../../assets/logo.png";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="education">
            Education
          </NavLink>
          <NavLink className="menu-item" to="experience">
            Experience
          </NavLink>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="skills">
            Skills
          </NavLink>
          <NavLink className="menu-item" to="tools">
            Tools
          </NavLink>
          <NavLink className="menu-item" to="certifications">
            Certifications
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
