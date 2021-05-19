import React from "react";
import "./SectionWrapper.scss";

const SectionWrapper = ({ children, id }) => {
    return (
        <div className="section-wrapper" id={id}>
            <div className="section-container">{children}</div>
        </div>
    );
};

export default SectionWrapper;
