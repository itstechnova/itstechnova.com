import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./NavBar.scss";
import nav from "../../resources/strings/nav";
import ModeToggle from "../../components/ModeToggle/ModeToggle";

const NavBar = ({ routes }) => {

    return (
        <nav>
            <div className="nav-container">
                {routes.map((route) => (
                    <Link
                        className="nav-link"
                        activeClass="active"
                        to={`/#${route.sectionId}`}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        {route.label}
                    </Link>
                ))}
                <ModeToggle />
            </div>
        </nav>
    );
};

export default NavBar;
