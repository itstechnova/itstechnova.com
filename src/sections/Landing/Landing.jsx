import React from "react";
import Typist from 'react-typist';
import "./Landing.scss";
import socials from "../../resources/strings/socials";
import landing from "../../resources/strings/landing";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

const Landing = () => {


    return (
        <SectionWrapper id="landing">
            <div className="landing-container">
                <div className="landing-content">
                    <div className="landing-text">
                        <h4>
                            <span className="landing-title">{landing.title1}</span>
                            {landing.title2}
                        </h4>
                        <Typist className="landing-slogan">
                            <span><span style={{ fontWeight: "700" }}>Prepare</span> With Us</span>
                            <Typist.Backspace count={15} delay={500} />
                            <span><span style={{ fontWeight: "700" }}>Hack</span> With Us</span>
                            <Typist.Backspace count={12} delay={500} />
                            <span><span style={{ fontWeight: "700" }}>Connect</span> With Us</span>
                            <Typist.Backspace count={15} delay={500} />
                        </Typist>
                        <h4>{landing.description}</h4>
                        <h4>{landing.dates}</h4>
                        <a className="button" href={socials.mailingList}>
                            {landing.applyCTA}
                        </a>
                    </div>
                    <div className="landing-graphic" />

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Landing;
