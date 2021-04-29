import React from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";
import nav from "../../resources/strings/nav";

const NavBar = ({ routes }) => {
  return (
    <nav>
      <div className="nav-container">
        {routes.map((route) => (
          <Link
            className="nav-link"
            activeClass="active"
            to={route.sectionId}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
