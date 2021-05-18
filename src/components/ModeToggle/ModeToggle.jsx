import React from "react";
import Toggle from "react-toggle";
import sun from "../../resources/images/icons/sun.svg";

import "react-toggle/style.css";
import "./ModeToggle.scss";

export default function ThemeToggle(props) {
    const { mode, toggle } = props;
    return (
        <div>
            <Toggle
                className="mode-toggle"
                defaultChecked={mode === "light"}
                onChange={toggle}
                icons={{
                    checked: <img className="light-icon" src={sun} alt="" />,
                    unchecked: null,
                }}
            />
        </div>
    );
}
