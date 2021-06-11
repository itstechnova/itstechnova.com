import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.scss";
import ModeToggle from "../../components/ModeToggle/ModeToggle";
import mlhBanner from "../../resources/images/graphics/mlh-banner.svg";
import cross from "../../resources/images/icons/cross.svg";
import hamburger from "../../resources/images/icons/hamburger.svg";

const NavBar = ({ routes, logoRoute }) => {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav>
            <div className="nav-container" >
                <div className="nav-content">
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
                    <div className={"nav-links-container"}>
                        <div className="nav-links">
                            <div className="nav-desktop-links">
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
                        <div className="mobile">
                            <ModeToggle className="toggle" />
                            <div className="mobile-menu" onClick={() => setShowNav(!showNav)}>
                                {showNav ? (
                                    <img className="nav-x" src={cross} alt="cross" />
                                ) : (
                                    <img className="nav-hamburger" src={hamburger} alt="hamburger menu" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <img className="mlh-banner" src={mlhBanner} alt="mlh-banner" />
                {showNav && <div className="nav-mobile-links">
                    {routes.map((route) => (
                        <Link
                            className="nav-link"
                            activeClass="active"
                            to={`/#${route.sectionId}`}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setShowNav(false)}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>
                }
            </div>
        </nav>
    );
};

export default NavBar;
