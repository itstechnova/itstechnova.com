import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { debounce } from '../../util/debounce';
import "./NavBar.scss";
import ModeToggle from "../../components/ModeToggle/ModeToggle";

const NavBar = ({ routes, logoRoute }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    return (
        <nav>
            <div className="nav-container" style={{ top: visible ? '0' : '-7vh' }} >
                <div className="nav-content">
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
                    <ModeToggle className="toggle"/>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
