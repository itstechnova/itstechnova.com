import React from "react";
import "./Footer.scss";
import logo from "../../resources/images/logo/apple-touch-icon.png"
const Footer = () => (
    <React.Fragment id="footer">
        <div className="footer-container">
            <div className="footer-logo-container">
                <img src={logo} alt="logo" />
                <span className="footer-title">TechNova</span>
            </div>
            <p className="title">Made with ❤️ by UWaterloo Students</p>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" >Code of Conduct</a>
        </div>
    </React.Fragment>
);

export default Footer;