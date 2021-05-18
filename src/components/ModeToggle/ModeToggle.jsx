import React from "react";
import Toggle from "react-toggle";
import sun from "../../resources/images/icons/sun.svg";
import useToggleMode from "../../hooks/useToggleMode";

import "react-toggle/style.css";
import "./ModeToggle.scss";

const ThemeToggle = () => {
    const [mode, toggleMode] = useToggleMode();

    return (
        <div>
            {!!mode && (
                <Toggle
                    className="mode-toggle"
                    checked={mode === "light"}
                    onChange={toggleMode}
                    icons={{
                        checked: (
                            <img className="light-icon" src={sun} alt="" />
                        ),
                        unchecked: null,
                    }}
                />
            )}
        </div>
    );
};

export default ThemeToggle;
