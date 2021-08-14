import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import keynoteImg from "../../resources/images/keynote.svg";
import "./keynote.scss"

const Keynote = () => (
    <SectionWrapper id="keynote">
        <h1 className="keynote-title">
            Keynote Speaker
        </h1>
        <div className="keynote-wrapper">
            <div>
            <img src={keynoteImg} alt="" className="keynote-image"/>
            </div>
            
            <p className="keynote-text">
                <h5 className="keynote-name">Roanne Sones</h5>
                <h5 className="keynote-name">Corporate Vice President</h5>
                Roanne is responsible for program management for engineering systems, operating systems, 
                and edge products that span cloud-to-edge and edge-to-cloud including media services and 
                hardware. Her team delivers the core OS platform from RTOS, to Linux, to Android, to Windows
                 and across Microsoft devices and services including Azure, Windows, Windows Server, Xbox, 
                 and Embedded/Internet of Things.
            </p>
        </div>
        
    </SectionWrapper>
);

export default Keynote;