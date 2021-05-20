import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.scss";
import ModeToggle from "../../components/ModeToggle/ModeToggle";

const NavBar = ({ routes, logoRoute }) => {
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-links">
                    <Link
                        className="logo-link"
                        activeClass="active"
                        to={`/#${logoRoute.sectionId}`}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <img src={logoRoute.logoSrc} alt="logo" />
                    </Link>
                    <div>
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
                    </div>
                </div>
                <ModeToggle />
            </div>
        </nav>
    );
};

export default NavBar;
