import React from "react";
import "./SectionWrapper.scss";

const SectionWrapper = ({ children, id }) => {
    return (
        <div className="section-wrapper" id={id}>
            <div className="section-container">
                <div className="section-content">{children}</div>
            </div>
            
        </div>
    );
};

export default SectionWrapper;
