import React from "react";
import "./Button.scss";

const Button = ({ label, link }) => (
        <a className="button-smaller" href={link}>
            {label}
        </a>
);

export default Button;