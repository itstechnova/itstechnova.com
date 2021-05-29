import React from "react";
import "./SectionWrapper.scss";

const SectionWrapper = ({ children, id, paddingTop }) => {
    return (
        <div className="section-wrapper" id={id}>
            <div className="section-container" style={{paddingTop: paddingTop || "80px"}}>
                <div className="section-content">{children}</div>
            </div>
            
        </div>
    );
};

export default SectionWrapper;
