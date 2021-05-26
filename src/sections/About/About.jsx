import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import "./About.scss";
import about from "../../resources/strings/about";
import logo from "../../resources/images/logo/logo.png";

const About = () => (
    <SectionWrapper id="about" >
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h1>
                        {about.title}
                    </h1>
                    <br />
                    <p>{about.description1}</p>
                    <br />
                    <p>{about.description2}</p>
                </div>
                <div className="about-graphic-container">
                    <img className="about-graphic" src={logo} alt="logo" />
                </div>
            </div>
            <div className="about-events">

            </div >
            <div className="button-smaller-container">
                <a className="button-smaller" href={about.scheduleLink}>
                    {about.scheduleCTA}
                </a>
            </div>
            
        </div>
    </SectionWrapper>
);

export default About;
