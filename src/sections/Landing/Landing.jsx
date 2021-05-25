import React, { useState, useEffect } from "react";
import Typist from 'react-typist';
import "./Landing.scss";
import socials from "../../resources/strings/socials";
import landing from "../../resources/strings/landing";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

const TextLoop = () => {
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        console.log("Count: " + mounted);
        setMounted(true);
    }, [mounted]);

    return (
        <div>
            {mounted ? (
                <Typist className="landing-slogan" onTypingDone={() => setMounted(false)}>
                    <span><span style={{ fontWeight: "700" }}>Prepare</span> With Us</span>
                    <Typist.Backspace count={20} delay={800} />
                    <span><span style={{ fontWeight: "700" }}>Hack</span> With Us</span>
                    <Typist.Backspace count={17} delay={800} />
                    <span><span style={{ fontWeight: "700" }}>Connect</span> With Us</span>
                    <Typist.Backspace count={20} delay={800} />
                </Typist>
            ) : (
                <span className="landing-slogan">
                    {"n"}
                </span>
            )}
        </div>
    );

}

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
                        <TextLoop />
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
