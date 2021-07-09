import React from "react";
import "./Button.scss";

const Button = ({ label, link, type }) => (
        <a className={type ?? "button"} href={link}>
            {label}
        </a>
);

export default Button;